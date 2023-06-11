import React from "react";

import Form from './components/Form/Form'
import "./App.css";

function App() {

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  return (
    <div className="app">
      <h1>Socialize</h1>
      <Form users={database} />
    </div>
  );
};

export default App;