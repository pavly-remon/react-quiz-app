import { useState } from "react";
import Timer from "./Timer";

const TIMER = 10000;
const Question = ({ question, handleSelectAnswer, correctAnswer }) => {
  const shuffled = [...question.answers].sort(() => Math.random() - 0.5);
  const onTimeout = () => {
    handleSelectAnswer(null);
  };
  return (
    <div id="question">
      <Timer key={question.id} timeout={TIMER} onTimeout={onTimeout} />
      <h2>{question.text}</h2>
      <ul id="answers">
        {shuffled.map((answer, index) => (
          <li key={index} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
