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

  // get data from redux
  const dispatch = useDispatch();
  const movieStateReducer = useSelector((state: any) => state?.movieReducer);
  const selectedRandomCard = movieStateReducer?.selectedRandomCard;
  const hiddenRandomCard = movieStateReducer?.hiddenRandomCard;
  const totalTurn = movieStateReducer?.totalTurn;
  const [computerScore, userScore] = movieStateReducer?.score;

  // handle OK function of modal when each turn
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

  // handle OK function of modal in final turn
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

  // handle Cancel function of modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // check value input is valid or not
  const checkTypeInputValid = (computerField: string, userField: string) => {
    if (
      computerField === "unknown" ||
      computerField === "n/a" ||
      userField === "unknown" ||
      userField === "n/a"
    ) {
      return false;
    }

    return true;
  };

  // compare two value field
  const compareTwoValueField = (
    computerFieldNumber: number,
    userFieldNumber: number
  ) => {
    if (computerFieldNumber > userFieldNumber) {
      setResult(-1);
      dispatch(actSetScoreGame([computerScore + 1, userScore]));
    } else if (computerFieldNumber < userFieldNumber) {
      setResult(1);
      dispatch(actSetScoreGame([computerScore, userScore + 1]));
    } else if (computerFieldNumber === userFieldNumber) {
      setResult(0);
    }
    setIsModalOpen(true);
  };

  // handle click function when click each card
  const handleClickCard = (type: string) => {
    setClicked(true);
    setIsModalOpen(true);

    const computerField = selectedRandomCard[type];
    const userField = hiddenRandomCard[type];

    const computerFieldNumber = parseInt(
      selectedRandomCard[type]?.replace(",", "")
    );
    const userFieldNumber = parseInt(hiddenRandomCard[type]?.replace(",", ""));

    const isValidType = checkTypeInputValid(computerField, userField);

    if (totalTurn <= 9) {
      switch (type) {
        case "max_atmosphering_speed":
          if (!isValidType) {
            // Draw
            setResult(0);
            setIsModalOpen(true);
          } else {
            compareTwoValueField(computerFieldNumber, userFieldNumber);
          }
          return;

        case "cost_in_credits":
          if (!isValidType) {
            // Draw
            setResult(0);
            setIsModalOpen(true);
          } else {
            compareTwoValueField(computerFieldNumber, userFieldNumber);
          }
          return;

        case "passengers":
          if (!isValidType) {
            // Draw
            setResult(0);
            setIsModalOpen(true);
          } else {
            compareTwoValueField(computerFieldNumber, userFieldNumber);
          }
          return;

        case "Film Appearances":
          const computerFilms = selectedRandomCard?.films.length;
          const userFilm = hiddenRandomCard?.films.length;

          compareTwoValueField(computerFilms, userFilm);
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
        closable={false}
      >
        {getResultEachTurn()}
      </Modal>

      <Modal
        title="Final result"
        open={isModalResultOpen}
        onOk={handleModalResultOk}
        cancelButtonProps={{ style: { display: "none" } }}
        okText="Continue"
        closable={false}
      >
        <ResultGame className="result">{getFinalResult()}</ResultGame>
      </Modal>
    </>
  );
};

export default StarCardInfo;
