import { FETCH_DATA } from "../actions/appActions";

const APP_INITIAL_STATE = {
  data: [],
};

function appReducer(state = APP_INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    default:
      return state;
  }
}

export default appReducer;
