import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NoMatch from "./Pages/NoMatch";
import Navbar from "./Components/Navbar";
import Trending from "./Pages/Trending";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
