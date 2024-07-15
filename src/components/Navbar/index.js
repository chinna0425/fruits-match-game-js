import './index.css'

const Navbar = props => {
  const {score, timerbound} = props
  return (
    <nav className="p1nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="p1nav-logo"
      />
      <div className="p1nav-score-container">
        <li>
          <p className="nav-score-para">
            Score: <span className="nav-para-spanelement">{score}</span>
          </p>
        </li>
        <div className="p1nav-timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="p1nav-timer-log"
          />
          <li>
            <p className="nav-para-spanelement">{timerbound}</p>
          </li>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
