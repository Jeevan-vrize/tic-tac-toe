import React from "react";
import { Link, useLocation } from "react-router-dom";

function WinnerPage() {
  const location = useLocation();
  const { winner } = location.state;

  return (
    <div className="result-page">
      <h1>Winner: {winner}</h1>
      <Link to="/" className="restart-link">Play Again</Link>
    </div>
  );
}

export default WinnerPage;
