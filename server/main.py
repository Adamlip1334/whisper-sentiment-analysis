from whisperdriver import whisper_transcribe  

# Path to your test audio file
test_audio_path = "test.mp4"

# Call the function and print the result
transcription = whisper_transcribe(test_audio_path)
print("Transcription:", transcription)
