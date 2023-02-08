const APP_INITIAL_STATE = {
  data: [],
};

const appReducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_DATA': {
      return {
        ...state,
        data: [...state.data, ...action.value]
      }
    }
    default: {
      return state
    }
  }
};

export { APP_INITIAL_STATE, appReducer };
