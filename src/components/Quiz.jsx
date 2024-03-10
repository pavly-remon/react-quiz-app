import { useState, useEffect } from "react";
import Question from "./Question";
import Summary from "./Summary";

import QUESTIONS from "@/data/questions";

const CORRECT_ANSWERS = QUESTIONS.map((question) => question.answers[0]);

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizCompleted = activeQuestionIndex === QUESTIONS.length;
  const handleSelectAnswer = (answer) => {
    setUserAnswers((prev) => [...prev, answer]);
  };

  const handleReset = () => {
    setUserAnswers([]);
  };
  return (
    <>
      {!quizCompleted ? (
        <div id="quiz">
          <Question
            question={QUESTIONS[activeQuestionIndex]}
            handleSelectAnswer={handleSelectAnswer}
          />
        </div>
      ) : (
        <Summary onReset={handleReset} />
      )}
    </>
  );
};

export default Quiz;
