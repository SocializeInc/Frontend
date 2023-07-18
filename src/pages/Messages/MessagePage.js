import { useState } from "react";
import UserBox from "./Rooms/UserBox";
import ChatBox from "./Chat/ChatBox";

const MessagePage = () => {
  const [partnerValid, setPartnerValid] = useState(false);
  const [roomId, setRoomId] = useState(null);

  const getRoomInfo = (id, name) => {
    if (id !== null) {
      setPartnerValid(true);
      setRoomId(id);
    }
  };

  return <>{partnerValid ? <ChatBox roomId={roomId}/> : <UserBox chatPartner={getRoomInfo} />}</>;
};

export default MessagePage;