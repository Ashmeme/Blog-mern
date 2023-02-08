import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Weblog</span>
      </div>
      <img className="headerImg" src="https://www.holsby.org/wp-content/uploads/2016/06/nature-header.jpg" alt="" />
    </div>
  )
}
