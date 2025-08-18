import React, { useState } from "react";


function EntryForm({ onAddEntry }) { // Functional component for the entry form
    const [title, setTitle] = useState(""); // State for the title input
    const [content, setContent] = useState(""); // State for the content input

    const handleSubmit = (e) => { // Function to handle form submission
        e.preventDefault(); // Prevent the default form submission behavior

        if (!content.trim()) return; //  if the content field is empty (even if it has only spaces), the function exits early and doesn’t submit anything

        const newEntry = { // Create a new entry object with the current date and time
        id: Date.now(), // Generate a unique ID based on the current timestamp
        title: title.trim(), // Trim whitespace from the title
        content: content.trim(), // Trim whitespace from the content
        date: new Date().toLocaleDateString(), // Format the current date as a string
        };

        onAddEntry(newEntry); // Call the onAddEntry function passed as a prop to add the new entry
        setTitle(""); // Reset the title input field to an empty string
        setContent(""); // Reset the content input field to an empty string
        setShowForm(false); // Hide the form after submission
    };

    const [showForm, setShowForm] = useState(false);


    return (
        <>
            <div className="container">
                <button className="entry-button" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Close" : "+ New Entry"}
                </button>

                {showForm &&
                <form className="entry-form" onSubmit={handleSubmit} >
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
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault(); // prevent newline
                            handleSubmit(e);    // submit the form
                            }
                        }}
                        className="entry-content"
                        rows="5"
                    />
                    <button type="submit" className="submit-button">Add Entry</button>
                </form> }     
            </div>
        </>
    )
}

export default EntryForm;