function Header() {
  return (
    <header className="header">
        <div className="container">
            <h1 className="appname">The Daily Learn Journal</h1>
            <p className="first_sentence">What did I learn today?</p>
        </div>  
       {/*  <div className="container">
            <button className="darkToggle">Light/Dark</button>
        </div> */}
    </header>
  );
}

export default Header;