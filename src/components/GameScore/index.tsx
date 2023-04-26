import { GameScoreWrapper } from "./style";
import { useSelector } from "react-redux";

const GameScore = () => {
  const movieStateReducer = useSelector((state: any) => state?.movieReducer);
  const score = movieStateReducer?.score;
  const totalTurn = movieStateReducer?.totalTurn;
  const [computerScore, userScore] = score;

  return (
    <GameScoreWrapper>
      <span className="computer-score">Computer: {computerScore}</span>
      <span className="round">Round: {totalTurn + 1}</span>
      <span className="user-score">User: {userScore}</span>
    </GameScoreWrapper>
  );
};

export default GameScore;
