import { useState } from "react";
import { ResultGame, StarCardInfoWrapper } from "./style";
import { useSelector, useDispatch } from "react-redux";
import {
  actSetListStarShip,
  actSetScoreGame,
  actSetTotalTurn,
} from "../../redux/action";
import { Modal } from "antd";

interface StarCardInfoProps {
  name?: string;
  value?: any;
  hidden: boolean;
  type: string;
}

const StarCardInfo = (props: StarCardInfoProps) => {
  const { name, value, hidden, type } = props;
  const [clicked, setClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalResultOpen, setIsModalResultOpen] = useState(false);
  const [result, setResult] = useState(0);
  const [isUserWin, setIsUserWin] = useState(0);

  const dispatch = useDispatch();

  // get data from redux
  const movieStateReducer = useSelector((state: any) => state?.movieReducer);
  const selectedRandomCard = movieStateReducer?.selectedRandomCard;
  const hiddenRandomCard = movieStateReducer?.hiddenRandomCard;
  const totalTurn = movieStateReducer?.totalTurn;
  const [computerScore, userScore] = movieStateReducer?.score;

  // antd
  const handleModalOk = () => {
    setClicked(false);
    setIsModalOpen(false);

    if (totalTurn === 9) {
      // final turn
      if (userScore > computerScore) {
        setIsUserWin(1);
      } else if (userScore < computerScore) {
        setIsUserWin(-1);
      } else {
        setIsUserWin(0);
      }
      setIsModalOpen(false);
      setIsModalResultOpen(true);
    }

    dispatch(actSetTotalTurn(totalTurn + 1));
  };

  const handleModalResultOk = () => {
    setIsModalResultOpen(false);
    dispatch(actSetTotalTurn(0));
    dispatch(
      actSetListStarShip(
        JSON.parse(localStorage.getItem("allStarShip") || "[]")
      )
    );

    dispatch(actSetScoreGame([0, 0]));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClickCard = (type: string) => {
    setClicked(true);
    setIsModalOpen(true);

    if (totalTurn < 9) {
      switch (type) {
        case "max_atmosphering_speed":
          const computerFieldSpeed = selectedRandomCard?.max_atmosphering_speed;
          const userFieldSpeed = hiddenRandomCard?.max_atmosphering_speed;
          const computerSpeed = parseInt(
            selectedRandomCard?.max_atmosphering_speed
              .replace(",", "")
              .replace(",", "")
          );
          const userSpeed = parseInt(
            hiddenRandomCard?.max_atmosphering_speed
              .replace(",", "")
              .replace(",", "")
          );

          if (
            computerFieldSpeed === "unknown" ||
            computerFieldSpeed === "n/a" ||
            userFieldSpeed === "unknown" ||
            userFieldSpeed === "n/a"
          ) {
            // Draw
            setResult(0);
            setIsModalOpen(true);
          } else {
            if (computerSpeed > userSpeed) {
              setResult(-1);
              dispatch(actSetScoreGame([computerScore + 1, userScore]));
            } else if (computerSpeed < userSpeed) {
              setResult(1);
              dispatch(actSetScoreGame([computerScore, userScore + 1]));
            } else if (computerSpeed === userSpeed) {
              setResult(0);
            }
            setIsModalOpen(true);
          }
          return;

        case "cost_in_credits":
          const computerFieldCredits = selectedRandomCard?.cost_in_credits;
          const userFieldCredits = hiddenRandomCard?.cost_in_credits;
          const computerCredits = parseInt(
            selectedRandomCard?.cost_in_credits.replace(",", "")
          );
          const userCredits = parseInt(
            hiddenRandomCard?.cost_in_credits.replace(",", "")
          );

          if (
            computerFieldCredits === "unknown" ||
            computerFieldCredits === "n/a" ||
            userFieldCredits === "unknown" ||
            userFieldCredits === "n/a"
          ) {
            // Draw
            setResult(0);
            setIsModalOpen(true);
          } else {
            if (computerCredits > userCredits) {
              setResult(-1);
              dispatch(actSetScoreGame([computerScore + 1, userScore]));
            } else if (computerCredits < userCredits) {
              setResult(1);
              dispatch(actSetScoreGame([computerScore, userScore + 1]));
            } else if (computerCredits === userCredits) {
              setResult(0);
            }
            setIsModalOpen(true);
          }
          return;

        case "passengers":
          const computerFieldPassengers = selectedRandomCard?.passengers;
          const userFieldPassengers = hiddenRandomCard?.passengers;
          const computerPassengers = parseInt(
            selectedRandomCard?.passengers.replace(",", "")
          );
          const userPassengers = parseInt(
            hiddenRandomCard?.passengers.replace(",", "")
          );

          if (
            computerFieldPassengers === "unknown" ||
            computerFieldPassengers === "n/a" ||
            userFieldPassengers === "unknown" ||
            userFieldPassengers === "n/a"
          ) {
            // Draw
            setResult(0);
            setIsModalOpen(true);
          } else {
            if (computerPassengers > userPassengers) {
              setResult(-1);
              dispatch(actSetScoreGame([computerScore + 1, userScore]));
            } else if (computerPassengers < userPassengers) {
              setResult(1);
              dispatch(actSetScoreGame([computerScore, userScore + 1]));
            } else if (computerPassengers === userPassengers) {
              setResult(0);
            }
            setIsModalOpen(true);
          }
          return;

        case "Film Appearances":
          const computerFilms = selectedRandomCard?.films.length;
          const userFilm = hiddenRandomCard?.films.length;

          if (computerFilms > userFilm) {
            setResult(-1);
            dispatch(actSetScoreGame([computerScore + 1, userScore]));
          } else if (computerFilms < userFilm) {
            setResult(1);
            dispatch(actSetScoreGame([computerScore, userScore + 1]));
          } else if (computerFilms === userFilm) {
            setResult(0);
          }
          setIsModalOpen(true);
          return;
      }
    }
  };

  const getResultEachTurn = () => {
    if (result === 0) {
      return <p>Draw</p>;
    } else if (result === 1) {
      return <p>You win</p>;
    } else {
      return <p>You lose</p>;
    }
  };

  const getFinalResult = () => {
    if (isUserWin === 1) {
      return "You win";
    } else if (isUserWin === -1) {
      return "Computer win";
    } else {
      return "Draw";
    }
  };

  return (
    <>
      <StarCardInfoWrapper
        onClick={hidden ? () => handleClickCard(type) : () => {}}
        className="test"
      >
        <span>{name}:</span>
        <span>{hidden && !clicked ? "?" : value}</span>
      </StarCardInfoWrapper>

      <Modal
        title="Result"
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        {getResultEachTurn()}
      </Modal>

      <Modal
        title="Final result"
        open={isModalResultOpen}
        onOk={handleModalResultOk}
        cancelButtonProps={{ style: { display: "none" } }}
        okText="Continue"
      >
        <ResultGame className="result">{getFinalResult()}</ResultGame>
      </Modal>
    </>
  );
};

export default StarCardInfo;
