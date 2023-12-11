import whisper
# Path: server/whisper.py
model = whisper.load_model("base")

result = model.transcribe("PATH TO FILE")
print(result["text"])



