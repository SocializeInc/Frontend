import {Routes,Route} from "react-router-dom";

import "./App.css";

import Auth from "./pages/Login/Auth";
import Home from "./pages/Home/Home";
import Feed from "./pages/Home/Feed/Feed";
import Profile from "./pages/Profile/Profile";
import MessagePage from "./pages/Messages/MessagePage";

function App() {
  return (
    <Routes>
      <Route key="Feed" path="/" element={<Home main={Feed}/>}/>
      <Route key="Authentication" path="/login" element={<Auth />} />
      <Route key="Feed" path="/home" element={<Home main={Feed}/>} />
      <Route key="Profile" path="/profile" element={<Home main={Profile}/>} />
      <Route key="MessagePage" path="/messages" element={<Home main={MessagePage}/>} />
    </Routes>
  );
}

export default App;
