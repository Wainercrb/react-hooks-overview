import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import ContextPage from "./pages/ContextPage";
import ContextPageSearch from "./pages/ContextPageSearch";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/context" element={<ContextPage />} />
            <Route exact path="/context-search" element={<ContextPageSearch />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
