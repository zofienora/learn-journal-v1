function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });



  return (
    <header className="header">
        <div className="container">
          <div className="header-above">
              <div className="header-left-one">
                  <p className="header-one">VOLUME <span className="span-red">1</span> — ENTRY LOG</p>
                  <p className="header-two">a minimal learning journal</p>
              </div>
              <div className="header-right-one">
                <p className="header-three">Recording your reflections transforms small steps into lasting insight.</p>
              </div>
          </div>
          <div className="header-below">
            <div className="below-one">{today}</div>
            <div className="below-two ibm-plex-mono-light">The Minimal — but not so minimal — Learning Journal is about more than notes. It is about tracking your progress, rewiring your brain for growth, and discovering how small, daily reflections add up. Over weeks, you see what you’ve built, what you’ve understood, and how far you’ve come. It is about discipline, curiosity, and the simple act of showing up every day.</div>
          </div>
        </div>  
       {/*  <div className="container">
            <button className="darkToggle">Light/Dark</button>
        </div> */}
    </header>
  );
}

export default Header;