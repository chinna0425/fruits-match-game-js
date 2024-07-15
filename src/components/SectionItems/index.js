import './index.css'

const SectionItems = props => {
  const {item, ismatchedelement} = props
  const {imageUrl, thumbnailUrl} = item
  const ismatched = () => {
    ismatchedelement(imageUrl)
  }
  return (
    <li className="section-container">
      <button type="button" className="sectionbutton" onClick={ismatched}>
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="sectionimagesetting"
        />
      </button>
    </li>
  )
}
export default SectionItems
