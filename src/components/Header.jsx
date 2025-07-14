function Header() {
  return (
    <header className="header">
        <div className="container">
            <h1 className="appname">The Daily Learn Journal</h1>
            <p>A daily learning journal to reflect on what you learned today.</p>
        </div>  
        <div className="container">
            <button className="darkToggle">Light/Dark</button>
        </div>
    </header>
  );
}

export default Header;