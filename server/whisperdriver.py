from multiprocessing import Pool, Queue
import whisper
import os

# Initialize a queue for tasks
task_queue = Queue()
num_workers = 4  # Adjust based on your server's capability


def whisper_transcribe(audio_path):
    """
    The `whisper_transcribe` function transcribes audio using the Whisper model.

    :param audio_path: The audio_path parameter is the path to the audio file that you want to
    transcribe. It should be a string representing the file path, including the file name and extension
    :return: the transcribed text from the audio file.
    """

    # Load the Whisper model
    model = whisper.load_model('base')  # tiny, base, small, medium, or large

    # Transcribe the audio
    result = model.transcribe(audio_path)
    print(result["text"])

    # os.remove(audio_path)

    return result["text"]


def worker():
    while True:
        video_path = task_queue.get()
        transcription = whisper_transcribe(video_path)
        # TODO: Store or send transcription


def start_transcription_task(video_path):
    whisper_transcribe(video_path)
   #  task_queue.put(video_path)


if __name__ == "whisper":
    pool = Pool(num_workers, worker)
