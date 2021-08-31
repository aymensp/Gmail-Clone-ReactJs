import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import "./SideBar.css"
import AddIcon from '@material-ui/icons/Add'
import SideBarOption from './SideBarOption'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'




function SideBar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>} 
            className="sidebar_compose"
            > 
                Compose
            </Button>
            <SideBarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SideBarOption Icon={StarIcon} title="Starred" number={32}/>
            <SideBarOption Icon={AccessTimeIcon} title="Snoozed" number={12}/>
            <SideBarOption Icon={LabelImportantIcon} title="Important" number={20}/>
            <SideBarOption Icon={NearMeIcon} title="Sent" number={43}/>
            <SideBarOption Icon={NoteIcon} title="Drafts" number={11}/>
            <SideBarOption Icon={ExpandMoreIcon} title="More" number={2}/>
            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>

                </div>

            </div>
        </div>
    )
}

export default SideBar
