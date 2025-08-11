import React, { useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import './App.css';

function App() {
  const [entries, setEntries] = useState(() => {
    try {
      const raw = localStorage.getItem("learned_entries");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("learned_entries", JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = (newEntry) => {
    setEntries((prev) => [...prev, newEntry]);
  };

  const handleDeleteEntry = (id) => {
  setEntries((prev) => prev.filter((entry) => entry.id !== id));
};

  return (
    <main>
      <Header />
      <EntryForm onAddEntry={handleAddEntry} />
      <EntryList entries={entries} onDeleteEntry={handleDeleteEntry} />
      <Footer />
    </main>
  );
}

export default App;