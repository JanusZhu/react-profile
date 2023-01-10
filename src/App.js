import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Count } from "./pages/Count";
import { Navbar } from "./pages/Navbar";
import { LogPage } from "./pages/LogPage";
import { useState, createContext } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const AppContext = createContext();

function App() {
  const [name, setName] = useState("Janus");
  return (
    <div className="App">
      <Provider store={store}>
        <AppContext.Provider value={{ name, setName }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/count" element={<Count />}></Route>
              <Route path="/logPage" element={<LogPage />}></Route>
              <Route path="*" element={<h1>Page not found</h1>}></Route>
            </Routes>
          </Router>
        </AppContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
