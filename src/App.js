import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import { Provider } from "react-redux";
import AppStore from "./store/appStore";
import ContextPage from "./pages/ContextPage";
import ContextPageSearch from "./pages/ContextPageSearch";
import MainPage from "./pages/MainPage";
import ReduxPage from "./pages/ReduxPage";

function App() {
  return (
    <Provider store={AppStore}>
      <AppProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route exact path="/context" element={<ContextPage />} />
              <Route exact path="/redux" element={<ReduxPage/>} />
              <Route
                exact
                path="/context-search"
                element={<ContextPageSearch />}
              />

            </Routes>
          </BrowserRouter>
        </div>
      </AppProvider>
    </Provider>
  );
}

export default App;
