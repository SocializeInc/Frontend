import BlockButton from "../../../components/UI/BlockButton";

const UserBox = () => {
  return(
    <div>
      <h1>Messages</h1>
      //TODO: dinamikusan az adatbázisból lekérdezve foreach-el fogja kiíírni az összes chatban lévő usert
      //példa kedvéért beégetve egy
      <div>
        <BlockButton>Random User</BlockButton>
      </div>
    </div>
  );
};

export default UserBox;