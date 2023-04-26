import {
  GET_LIST_STAR_SHIP,
  SET_SELECTED_RANDOM_CARD,
  SET_HIDDEN_RANDOM_CARD,
  SET_TOTAL_TURN,
  SET_SCORE_GAME,
} from "./type";

const initialState = {
  listStarShip: [],
  selectedRandomCard: {},
  hiddenRandomCard: {},
  totalTurn: 0,
  score: [0, 0],
};

export const movieReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case GET_LIST_STAR_SHIP:
      return {
        ...state,
        listStarShip: payload,
      };

    case SET_SELECTED_RANDOM_CARD:
      return {
        ...state,
        selectedRandomCard: payload,
      };

    case SET_HIDDEN_RANDOM_CARD:
      return {
        ...state,
        hiddenRandomCard: payload,
      };

    case SET_TOTAL_TURN:
      return {
        ...state,
        totalTurn: payload,
      };

    case SET_SCORE_GAME:
      return {
        ...state,
        score: payload,
      };

    default:
      return state;
  }
};
