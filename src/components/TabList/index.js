import './index.css'

const TabList = props => {
  const {item, changeInital, isActive} = props
  const {tabId, displayText} = item
  const addstyle = isActive ? 'addtabliststyle' : ''
  const changetab = () => {
    changeInital(tabId)
  }
  return (
    <li className="tablistcontainer">
      <button
        type="button"
        className={`tablistbutton ${addstyle}`}
        onClick={changetab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabList
