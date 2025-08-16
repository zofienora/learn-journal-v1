function Header() {
  return (
    <header className="header">
        <div className="container">
          <div className="header-above">
              <div className="header-left-one">
                  <p className="header-one">LEARNED()</p>
                  <p className="header-one">VOLUME <span className="span-red">1</span> — ENTRY LOG</p>
                  <p className="header-two">a minimal learning journal</p>
              </div>
              <div className="header-right-one">
                <p className="header-three">Learning doesn’t happen all at once — it builds, moment by moment. Recording your reflections transforms small steps into lasting insight.</p>
              </div>
          </div>
        </div>  
       {/*  <div className="container">
            <button className="darkToggle">Light/Dark</button>
        </div> */}
    </header>
  );
}

export default Header;