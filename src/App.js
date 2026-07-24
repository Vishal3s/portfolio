import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";  // We'll create this
import GooeyNavPage from './pages/GooeyNavPage';

function App() {
  return (
    <div className="dark bg-gray-900 text-white min-h-screen">
      <Routes>
        <Route path="*" element={<HomePage />} /> {/* Catch-all route */}
        <Route path="/nav" element={<GooeyNavPage />} />
      </Routes>
    </div>
  );
}

export default App;