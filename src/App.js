import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import uuid from "react-uuid";

function App() {

  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

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

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />

      <Main activeNote={getActiveNote()} />
    </div>
  );
}

export default App;
