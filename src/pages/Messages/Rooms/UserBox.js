import NavLinkButton from "../../../components/UI/NavLinkButton";
import SearchBar from "../../../components/UI/SearchBar";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./UserBox.module.css";
import Cookies from "universal-cookie";
const UserBox = ({ chatPartner }) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);

  const chatRoom = (searchedUser) => {
    (async () => {
      fetch("http://localhost:8080/socialize/api/messages/createRoom", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookies.get("accessToken"),
        },
        body: JSON.stringify({
          joinUsername: searchedUser,
        }),
      })
        .then((response) => response.json())
        .then((roomId) => navigate(`/messages/${roomId}`))
        .catch((err) => console.log(err));
    })();
    
  };

  useEffect(() => {
    (async () => {
      fetch("http://localhost:8080/socialize/api/messages/getRooms", {
        method: "get",
        headers: {
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
      })
        .then((response) => response.json())
        .then((response) =>
          response.message !== "Error"
            ? setRooms(response.users)
            : setRooms([])
        )
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <div>
      <SearchBar page="messages" chatRoom={chatRoom} />
      <h1>Messages</h1>
      <div className={styles.user_block}>
        {rooms?.map((room) => (
          <NavLinkButton
            key={room.id}
            className={styles.user}
            onClick={() => chatPartner(room.id, room.roomName)}
            goTo={`${room.id}`}
          >
            {room.roomName}
          </NavLinkButton>
        ))}
      </div>
    </div>
  );
};

export default UserBox;
