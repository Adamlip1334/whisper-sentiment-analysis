from flask import Flask, request, jsonify
from flask_cors import CORS
from whisperdriver import start_transcription_task, whisper_transcribe
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)
app.config["UPLOAD_FOLDER"] = "uploads/"  # Define a folder to save uploaded files


@app.route("/")
def index():
    """
    The index function returns a welcome message when the root URL is accessed.
    :return: The string "Welcome to the server!" is being returned.
    """
    return "Welcome to the server!"


@app.route("/transcribe", methods=["POST"])
def transcribe_video():
    print("Transcription request received!")
    if "video" not in request.files:
        return "No video part", 400
    file = request.files["video"]
    if file.filename == "":
        return "No selected file", 400
    if file:
        filename = secure_filename(file.filename)
        video_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(video_path)
        result = whisper_transcribe(video_path)
        return jsonify(transcript=result)


if __name__ == "__main__":
    os.makedirs(
        app.config["UPLOAD_FOLDER"], exist_ok=True
    )  # Create the upload folder if it doesn't exist
    app.run(host="0.0.0.0", port=1313, debug=True)
