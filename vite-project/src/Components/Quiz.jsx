import React from "react";

function Quiz({ question, onAnswerClick }) {
  return (
    <div className="quiz">
      <div className="question-section">
        <div className="question-text">{question.questionText}</div>
      </div>
      <div className="answer-section">
        {question.answerOptions.map((answerOption, index) => (
          <button
            key={index}
            onClick={() => onAnswerClick(answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
