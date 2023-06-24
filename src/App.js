import {Routes,Route} from "react-router-dom";

import Auth from "./pages/Login/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

import "./App.css";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Auth />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
