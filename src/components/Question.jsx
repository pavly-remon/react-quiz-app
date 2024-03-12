import { useState, useRef } from "react";
import Timer from "./Timer";

const Question = ({ question, handleSelectAnswer }) => {
  const shuffled = useRef();
  const [showAnswer, setShowAnswer] = useState(false);
  const [selected, setSelected] = useState(-1);
  let timer = 10000;
  if (selected !== -1) {
    timer = 3000;
  }
  if (!shuffled.current) {
    shuffled.current = [...question.answers].sort(() => Math.random() - 0.5);
  }
  const correctAnswerIndex = shuffled.current.indexOf(question.answers[0]);
  const onTimeout = () => {
    handleSelectAnswer(null);
  };
  const checkAnswer = (answer, index) => {
    setSelected(index);
    setTimeout(() => {
      setShowAnswer(true);
      setTimeout(() => {
        handleSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };
  return (
    <div id="question">
      <Timer
        key={timer}
        timeout={timer}
        onTimeout={selected === -1 ? onTimeout : null}
      />
      <h2>{question.text}</h2>
      <ul id="answers">
        {shuffled.current.map((answer, index) => {
          let cssClass = "";
          if (selected === index) {
            cssClass = "selected";
            if (showAnswer) {
              cssClass += index === correctAnswerIndex ? " correct" : " wrong";
            }
          }
          return (
            <li key={index} className="answer">
              <button
                onClick={() => checkAnswer(answer, index)}
                className={cssClass}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
