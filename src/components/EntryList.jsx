import React, { useState } from "react";

function EntryList({ entries, onDeleteEntry, onEditEntry }) {
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editContent, setEditContent] = useState("");   

    if (!entries || entries.length === 0) {
        return <div className="container"> <p className="entry-empty">No entries yet — add your first one ✨</p></div>;
    }

    // newest first, without mutating the original array
    const ordered = entries.slice().reverse();

    const startEdit = (entry) => {
        setEditingId(entry.id);
        setEditTitle(entry.title);
        setEditContent(entry.content);
    };

    const saveEdit = () => {
        onEditEntry(editingId, editTitle, editContent);
        setEditingId(null);
        setEditTitle("");
        setEditContent("");
    };

    return (
        <div className="container">
        <ul className="entry-list">
            {ordered.map((entry) => (
            <li key={entry.id} className="entry-card">
                <div className="entry-meta">
                <span className="entry-date">{entry.date}</span>
                </div>

                {editingId === entry.id ? (
                <>
                    <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    rows="5"
                    />
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                </>
                ) : (
                <>
                    <h3 className="entry-title">{entry.title || "Untitled"}</h3>
                    <p className="entry-content">{entry.content}</p>
                    <button onClick={() => startEdit(entry)}>Edit</button>
                    <button onClick={() => onDeleteEntry(entry.id)}>Delete</button>
                </>
                )}
            </li>
            ))}
        </ul>
        </div>
    );
}

export default EntryList;