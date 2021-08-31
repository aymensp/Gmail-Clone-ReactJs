import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import TuneIcon from '@material-ui/icons/Tune';

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png' alt='gmail logo'>
                </img>

            </div>
            <div className='header_middle'>
                <SearchIcon style={{ color:'gray-800'}}/>
                <input placeholder='Search mail' type='text'/>
                <TuneIcon className='header_inputCaret'/>

            </div>
            <div className='header_right'>
            <IconButton>
                    <HelpOutlineIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <Avatar className='avatar'/>

            </div>
        </div>
    )
}

export default Header
