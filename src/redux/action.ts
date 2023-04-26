import {
  GET_LIST_STAR_SHIP,
  SET_SELECTED_RANDOM_CARD,
  SET_HIDDEN_RANDOM_CARD,
  SET_TOTAL_TURN,
  SET_SCORE_GAME,
} from "./type";

export const actSetListStarShip = (payload: any) => {
  return {
    type: GET_LIST_STAR_SHIP,
    payload: payload,
  };
};

export const actSetSelectedRandomStarShip = (payload: any) => {
  return {
    type: SET_SELECTED_RANDOM_CARD,
    payload: payload,
  };
};

export const actSetHiddenRandomStarShip = (payload: any) => {
  return {
    type: SET_HIDDEN_RANDOM_CARD,
    payload: payload,
  };
};

export const actSetTotalTurn = (payload: any) => {
  return {
    type: SET_TOTAL_TURN,
    payload: payload,
  };
};

export const actSetScoreGame = (payload: any) => {
  return {
    type: SET_SCORE_GAME,
    payload: payload,
  };
};
