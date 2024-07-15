import {Component} from 'react'
import Navbar from '../Navbar'
import TabList from '../TabList'
import SectionItems from '../SectionItems'
import WinorLoss from '../WinorLoss'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleslist: props.tabsList,
      tabitems: props.imagesList,
      initial: 'FRUIT',
      randomimg: 0,
      score: 0,
      timer: 60,
      status: true,
    }
  }

  componentDidMount() {
    this.timerout = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {timer, status} = this.state
    if (timer === 0) {
      clearInterval(this.timerout)
      this.setState({status: !status, timer: 0})
    } else {
      this.setState(prev => ({timer: prev.timer - 1}))
    }
  }

  changeInital = tabId => {
    this.setState({initial: tabId})
  }

  ismatchedelement = imageUrl => {
    const {randomimg, tabitems} = this.state
    const items = tabitems[randomimg].imageUrl
    if (items === imageUrl) {
      this.setState(prev => ({
        randomimg: Math.floor(Math.random() * 29),
        score: prev.score + 1,
      }))
    } else {
      const {status} = this.state
      clearInterval(this.timerout)
      this.setState({status: !status})
    }
  }

  playagain = () => {
    this.setState({
      score: 0,
      timer: 60,
      status: true,
      randomimg: Math.floor(Math.random() * 29),
    })
    this.timerout = setInterval(this.tick, 1000)
  }

  render() {
    const {
      titleslist,
      tabitems,
      initial,
      randomimg,
      score,
      timer,
      status,
    } = this.state
    const updated = tabitems.filter(eachset =>
      eachset.category.includes(initial),
    )
    const timerbound = timer > 0 ? `${timer} Sec` : `${timer} sec`
    return (
      <div className="">
        <Navbar score={score} timerbound={timerbound} />
        <div className="background-container">
          {status && (
            <ul className="two-containers">
              <div className="image-container">
                <img
                  src={tabitems[randomimg].imageUrl}
                  className="imageset"
                  alt="match"
                />
              </div>
              <ul className="unordertitle-container">
                {titleslist.map(eachitem => (
                  <TabList
                    item={eachitem}
                    key={eachitem.tabId}
                    isActive={initial === eachitem.tabId}
                    changeInital={this.changeInital}
                  />
                ))}
              </ul>
              <ul className="unorderedimagecontaienr">
                {updated.map(each => (
                  <SectionItems
                    item={each}
                    key={each.thumbnailUrl}
                    ismatchedelement={this.ismatchedelement}
                  />
                ))}
              </ul>
            </ul>
          )}
          {!status && <WinorLoss score={score} playagain={this.playagain} />}
        </div>
      </div>
    )
  }
}
export default MatchGame
