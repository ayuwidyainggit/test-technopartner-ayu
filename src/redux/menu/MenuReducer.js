import {
  FETCH_MENU_FAILURE,
  FETCH_MENU_REQUEST,
  FETCH_MENU_SUCCESS,
} from "./ActionType";

const initialstate = {
  loading: true,
  data: [],
  oldData: null,
  error: "",
};

export const MenuReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_MENU_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MENU_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_MENU_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
