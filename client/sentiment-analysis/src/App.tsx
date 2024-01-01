import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProtectedRoute from './components/ProtectedRoute';
import TranscribePage from './components/VideoUpload';
import SignInPage from './components/SignInPage';

const App: React.FC = () => {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/transcribe" element={
        <ProtectedRoute>
          <TranscribePage />
        </ProtectedRoute>
      } />
      {/* Add other routes here */}
    </Routes>
  </Router>
);
};


export default App;
