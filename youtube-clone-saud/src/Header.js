import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/MenuSharp';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";
import "./Header.css";


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
            <input value = {inputSearch} onChange = {e => setInputSearch(e.target.value)} type="text" placeholder="search" />
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="search__icon" />
            </Link>
        </div>
        <div className="header__right">
        <VideoCallIcon className="header__icon"/>
           <AppsIcon className="header__icon"/>
           <NotificationsIcon className="header__icon"/>
           <Avatar src="/images/avatar2.jpeg" className="header__icon"/>
        </div>
        </div>
    )
}

export default Header
