import React from "react";

function Result({ score, total }) {
  return (
    <div className="score-section">
      You scored {score} out of {total}
    </div>
  );
}

export default Result;
