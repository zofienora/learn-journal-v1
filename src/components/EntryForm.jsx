import React, { useState } from "react";


function EntryForm({ onAddEntry }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!content.trim()) return;

        const newEntry = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        date: new Date().toLocaleDateString(),
        };

        onAddEntry(newEntry);
        setTitle("");
        setContent("");
    };


    return (
        <>
            <div className="container">
                <form className="entry-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title (optional)"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="entry-title"
                    />
                    <textarea
                        placeholder="What did you learn today?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="entry-content"
                        rows="5"
                    />
                    <button type="submit" className="submit-button">Add Entry</button>
                </form>      
            </div>
        </>
    )
}

export default EntryForm;