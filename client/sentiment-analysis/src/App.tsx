import React from 'react';
import VideoUpload from './components/VideoUpload'; 
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transcribe" element={<VideoUpload />} />
        {/* Other routes can be added here */}
      </Routes>
    </Router>
  );
};


export default App;
