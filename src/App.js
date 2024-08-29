import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Board from "./Board";
import WinnerPage from "./Winner";
import DrawPage from "./Draw";
import "./App.css";

function App() {
  return (
    
    <Router>
      <div className="app-container">
        <div className="background"></div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/winner" element={<WinnerPage />} />
            <Route path="/draw" element={<DrawPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Game() {
  const navigate = useNavigate();

  const handleGameEnd = (winner) => {
    if (winner) {
      navigate("/winner", { state: { winner } });
    } else {
      navigate("/draw");
    }
  };

  return <Board onGameEnd={handleGameEnd} />;
}

export default App;
