import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img  src="https://images.pexels.com/photos/4301252/pexels-photo-4301252.jpeg?cs=srgb&dl=pexels-ali-naaz-4301252.jpg&fm=jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quibusdam, nesciunt nam deleniti modi a
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Hobby</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Job</li>
        <li className="sidebarListItem">Study</li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        <i className="sidebarIcon fa-brands fa-youtube"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  )
}
