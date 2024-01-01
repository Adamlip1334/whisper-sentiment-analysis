import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/VideoUpload.module.css";

const VideoUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTranscript(null);
    const fileList = event.target.files;
    if (fileList) {
      setFile(fileList[0]);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("video", file);

      setUploading(true);

      try {
        const response = await fetch("http://localhost:1313/transcribe", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (response.ok) {
          setTranscript(data.transcript); 
        } else {
          alert("Failed to upload the video.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while uploading the video.");
      } finally {
        setUploading(false);
      }
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upload a Video for Transcription</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fileUploadContainer}>
          <label className={styles.uploadButton}>
            Choose File
            <input 
              type="file" 
              className={styles.fileInput} 
              onChange={handleFileChange} 
              accept="video/*" 
            />
          </label>
          {file && <span className={styles.fileName}>{file.name}</span>}
        </div>
        <button
          type="submit"
          disabled={uploading}
          className={styles.button}
        >
          {uploading ? 'Uploading...' : 'Upload Video'}
        </button>
      </form>
      {transcript && (
        <div className={styles.transcript}>
          <h2 className={styles.subtitle}>Transcript</h2>
          <p className={styles.transcriptText}>{transcript}</p>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
