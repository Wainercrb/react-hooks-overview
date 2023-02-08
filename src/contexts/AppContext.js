import React, { useReducer, useContext } from "react";
import { APP_INITIAL_STATE, appReducer } from "./reducers/appReducer";

const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, APP_INITIAL_STATE);

  return (
    <AppContext.Provider value={{ data: state.data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
