import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp,faList, faCalendar, faBell, faTasks } from '@fortawesome/free-solid-svg-icons'; 
const Header = () => {
  return (
    <div className="Header">
        <ul>
          <li className="Topmenu">
            <a href="Snap"><h2>Snap</h2></a>
          </li>
          <li className="Topmenu">
          <a href='Feature'><h5>Feature <FontAwesomeIcon icon={faChevronUp} /></h5></a>
            <ul className="Submenu">
            <li><a href='TodoList'><FontAwesomeIcon icon={faList} style={{ color: 'green' }} /> TodoList</a></li>
  <li><a href='Calender'><FontAwesomeIcon icon={faCalendar} style={{ color: 'skyblue' }} /> Calendar</a></li>
  <li><a href='Reminders'><FontAwesomeIcon icon={faBell} style={{ color: 'yellow' }} /> Reminders</a></li>
  <li><a href='Planning'><FontAwesomeIcon icon={faTasks} style={{ color: 'blue' }} /> Planning</a></li>
            </ul>
          </li>
          <li className="Topmenu">
          <a href='Company'><h5>Company <FontAwesomeIcon icon={faChevronUp} /></h5></a>
            <ul className="Submenu">
              <li><a href='History'>History</a></li>
              <li><a href='OurTeam'>OurTeam</a></li>
              <li><a href='Blog'>Blog</a></li>
            </ul>
          </li>
          <li className="Topmenu">
            <a href='Careers'><h5>Careers</h5></a>
          </li>
          <li className="Topmenu">
            <a href='About'><h5>About</h5></a>
          </li>
          <li className="Topmenu_left">
            <a href='Login'><h4><button><h4>Login</h4></button></h4></a>
            <a href='Register'><h4><button><h4>Register</h4></button></h4></a>
            </li>
          
        </ul>
      </div>
  
  )
}

export default Header;