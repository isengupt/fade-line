export default function Navbar() {
    return (
        <nav className="fixed-nav-bar">
        <div className="fixed__nav__logo__container">
          <div className="fixed__nav__logo">i.</div>
        </div>
        <div className="fixed__nav__menu__container">
          <div className="fixed__nav__menu">
            <span class="burger"></span>
          </div>
        </div>
        <div className="fixed__nav__items__container">
          <div className="fixed__nav__items">
            <a href="#" className="fixed__nav__item">
              RESUME
            </a>
            <a href="https://isengupt.github.io/overtop-scroll/" className="fixed__nav__item">
            PREVIOUS DEMO
            </a>
            <a href="https://github.com/isengupt/fade-line" className="fixed__nav__item">
            GITHUB
            </a>
          </div>
        </div>
      </nav>
    )
}