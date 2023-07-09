import { useState } from "react";
import UserBox from "./Rooms/UserBox";
import ChatBox from "./Chat/ChatBox";

const MessagePage = () => {
  const [partnerValid, setPartnerValid] = useState(false);
  let Partner = null;
  if (partnerValid) {
    Partner = ChatBox;
  }

  const backToUsers = (b) =>{
    if (b){
      setPartnerValid(false);
    }
  };

  const chatPartner = (p) => {
    if (p !== UserBox) {
      setPartnerValid(true);
    }
  };

  return <>{partnerValid ? <Partner backToUsers={backToUsers}/> : <UserBox chatPartner={chatPartner} />}</>;
};

export default MessagePage;
