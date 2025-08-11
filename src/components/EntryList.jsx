
function EntryList({ entries, onDeleteEntry }) {
  if (!entries || entries.length === 0) {
    return <div className="container"> <p className="entry-empty">No entries yet — add your first one ✨</p></div>;
  }

  // newest first, without mutating the original array
  const ordered = entries.slice().reverse();

  return (
    <div className="container">
        <ul className="entry-list">
        {ordered.map((entry) => (
            <li key={entry.id} className="entry-card">
            <div className="entry-meta">
                <span className="entry-date">{entry.date}</span>
            </div>
            <h3 className="entry-title">{entry.title || "Untitled"}</h3>
            <p className="entry-content">{entry.content}</p>
            <button
              className="delete-button"
              onClick={() => onDeleteEntry(entry.id)}
            >
              Delete
            </button>
            </li>
        ))}
        </ul>
    </div>
  );
}

export default EntryList;