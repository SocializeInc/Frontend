import {Routes,Route} from "react-router-dom";

import Auth from "./pages/Login/Auth";
import Home from "./pages/Home/Home";

import "./App.css";
import Feed from "./pages/Home/Feed/Feed";
import Profile from "./pages/Profile/Profile";
import MessagePage from "./pages/Messages/MessagePage";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home main={Feed}/>} />
      <Route exact path="/login" element={<Auth />} />
      <Route exact path="/home" element={<Home main={Feed}/>} />
      <Route exact path="/profile" element={<Home main={Profile}/>} />
      <Route exact path="/messages" element={<Home main={MessagePage}/>} />
    </Routes>
  );
}

export default App;
