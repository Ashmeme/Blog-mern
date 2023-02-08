import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Settings() {
  return (
    <><div className="settings">
          <div className="settingsWrapper">
              <div className="settingsTitle">
                  <span className="settingsUpdateTitle">Update Account</span>
                  <span className="settingsDeleteTitle">Delete Account</span>

              </div>
              <form className="settingsForm">
                  <label>Profile picture</label>
                  <div className="settingsPP">
                      <img src="https://images.unsplash.com/photo-1517315003714-a071486bd9ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                          alt="" />
                      <label htmlFor="fileInput">
                          <i className="settingsPPIcon fa-solid fa-user"></i>
                      </label>
                      <input type="file" id="fileInput" style={{ display: "none" }} />
                  </div>
                  <label>Username</label>
                  <input type="text" placeholder="Mariyam" />
                  <label>Email</label>
                  <input type="email" placeholder="mariyam@gmail.com" />
                  <label>Password</label>
                  <input type="password" />
                  <button className="settingsSubmit">Update</button>
          </form>
      </div><Sidebar />
      
    </div></>
  )
}
