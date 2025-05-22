from flask import Flask, request, jsonify
from flask_cors import CORS  
import pickle
import pandas as pd
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

CSV_FILE = "news_data.csv"

# Ensure the CSV file exists
if not os.path.exists(CSV_FILE):
    df = pd.DataFrame(columns=["title", "content", "label"])
    df.to_csv(CSV_FILE, index=False)

# Load trained models and vectorizer
with open("models.pkl", "rb") as f:
    models = pickle.load(f)

with open("vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

# Label output function
def output_label(n):
    return "Fake News" if n == 0 else "True News"

# Route to predict news type
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        news_text = data.get("text", "")

        if not news_text.strip():
            return jsonify({"error": "Empty text input"}), 400

        # Transform input text
        transformed_text = vectorizer.transform([news_text])

        # Get predictions from all models
        predictions = {name: output_label(model.predict(transformed_text)[0]) for name, model in models.items()}

        return jsonify(predictions)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Add news (both true and fake)
@app.route('/add_news', methods=['POST'])
def add_news():
    try:
        data = request.json
        title = data.get("title")
        content = data.get("content")
        news_type = data.get("label") # Should be "TRUE" or "FALSE"

        if not title or not content:
            return jsonify({"error": "Title and content are required."}), 400
        if news_type not in ["TRUE", "FALSE"]:
            return jsonify({"error": "Invalid type. Use 'TRUE' or 'FALSE'"}), 400

        # Load existing data
        df = pd.read_csv(CSV_FILE)
        new_entry = pd.DataFrame([{"title": title, "content": content, "label": news_type}])

        # Append and save
        df = pd.concat([df, new_entry], ignore_index=True)
        df.to_csv(CSV_FILE, index=False)

        return jsonify({"message": f"{news_type} news added successfully!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
