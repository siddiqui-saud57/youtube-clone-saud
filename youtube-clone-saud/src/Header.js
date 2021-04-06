import React,{useState}from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from "react-router-dom"

const Header = () => {
    const [inputSearch,setInputSearch] = useState("")

    return (
        <div className="header">
            <div className="header__left"> 
            <MenuIcon />
            <Link to='/'>
            <img
            className="header__logo"
             src="https://cdn.mos.cms.futurecdn.net/T3WPQpG2jcbDvaVpdLhbvh-1200-80.jpg"
             alt="pic"
            />
            </Link>
          
            </div>
            <div className="header__input">
            <input
            onChange={(e) =>setInputSearch(e.target.value)}
            value={inputSearch}
             placeholder="search"
              type="text" />
              <Link to={`/search/${inputSearch}`}>
           <SearchIcon className="header__inputButton"/>
           </Link>
            </div>
          <div className="header__icons">
          <VideoCallIcon className="header__icon"/>
           <AppsIcon className="header__icon"/>
           <NotificationsIcon className="header__icon"/>
           <PersonIcon className="header__icon"/>
          </div>
          
        </div>
    )
}

export default Header
