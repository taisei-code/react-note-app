import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Sidebar from "./components/Sidebar";
import uuid from "react-uuid";

function App() {

  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    console.log("新しく追加されました")

    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    }

    setNotes([...notes, newNote]);
    console.log(notes);
  } 

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={ notes } />
    </div>
  );
}

export default App;
