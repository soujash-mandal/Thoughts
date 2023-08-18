import { UserButton } from "@clerk/clerk-react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import User from "./Pages/User";
import NoMatch from "./Pages/NoMatch";
import Navbar from "./Components/Navbar";
import Trending from "./Pages/Trending";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
