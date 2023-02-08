import { Link } from "react-router-dom";
import { Component } from 'react';

import "./topbar.css"



class TopBar extends Component{
  
  constructor(props){
      super(props);
      console.log(this.props);
      this.state = {
        user: []
      };
    }

    componentDidMount(){
      fetch('/api/users')
        .then(response => response.json())
        .then(response => {
          this.setState({ users: response });
        });
    }
  render(){
    const user= false;
    return (
      <div className='top'>
        <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-youtube"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
        </div>

        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
            <li className="topListItem"><Link className="link" to="/todolist">TODOLIST</Link></li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <img className="topImg"
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link></li>
              <li className="topListItem">
                <Link className="link" to="register">REGISTER</Link></li>
              <li className="topListItem">
                <Link className="link" to="/check">Check for auth</Link></li>
              </ul>
                
          )}

          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    );
  }
}

export default TopBar;