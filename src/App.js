import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import ContextPage from "./pages/ContextPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/context" element={<ContextPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
