import quizCompleted from "@assets/quiz-complete.png";
const Summary = ({ onReset }) => {
  return (
    <div id="summary">
      <img src={quizCompleted} alt="Quiz Completed" />
      <h2>Quiz Completed</h2>
      <button onClick={onReset}>Start Again</button>
    </div>
  );
};

export default Summary;
