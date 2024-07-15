import './index.css'

const WinorLoss = props => {
  const {score, playagain} = props
  const playgame = () => {
    playagain()
  }

  return (
    <div className="winorlosscontainer">
      <div className="winorossinnercontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="tophysize"
        />
        <p className="winorlossscorepara">YOUR SCORE</p>
        <h1 className="winorlossscore">{score}</h1>
        <button type="button" className="winorlossbutton" onClick={playgame}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />{' '}
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}
export default WinorLoss
