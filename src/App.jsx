import "./App.css";
import Main from "./components/Main/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Favorites from "./components/Favorite/Favorites";

function App() {
  return (
    <>
        <Router>
          <NavBar />
          <main className="flex-1 p-8 box-border w-[100%] flex flex-col ">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
          </main>
        </Router>
    </>
  );
}

export default App;
