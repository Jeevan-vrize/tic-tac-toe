import React from "react";
import { Link } from "react-router-dom";

function DrawPage() {
  return (
    <div className="result-page">
      <h1>No Winner: It's a Draw!</h1>
      <Link to="/" className="restart-link">Play Again</Link>
    </div>
  );
}

export default DrawPage;
