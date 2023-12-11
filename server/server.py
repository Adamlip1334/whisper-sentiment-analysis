from flask import Flask, request
from whisper import start_transcription_task

app = Flask(__name__)

@app.route('/')
    """
    The index function returns a welcome message when the root URL is accessed.
    :return: The string "Welcome to the server!" is being returned.
    """
def index():
    return "Welcome to the server!"

@app.route('/transcribe', methods=['POST'])
    """
    The function transcribe_video() extracts the video file path from the request, starts a
    transcription task for the video, and returns a message indicating that the transcription has
    started.
    :return: the string "Transcription started!"
    """
def transcribe_video():
    # Extract video file path from the request
    video_path = get_video_path_from_request(request)
    start_transcription_task(video_path)
    return "Transcription started!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1313, debug=True)
