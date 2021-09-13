import React from 'react'
import "./MailList.css"
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import RedoIcon from "@material-ui/icons/Redo"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SettingsIcon from "@material-ui/icons/Settings"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import Section from './Section'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import MailRow from './MailRow'


function MailList() {
    return (
        <div className="mailList">
            <div className="mailList_settings">
                <div className="mailList_settings_left">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList_setting-right">
                <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="mailList_sections">
                <Section Icon={InboxIcon} title="primary" color="red" selected={true} />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8"  />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green"  />
            </div>
            <div className="mailList_list">
                   <MailRow
                   title="twitch"
                   subject='hey follow streamer'
                   description="This is a test "
                   time='18pm'
                   />
            </div>
        </div>
    )
}

export default MailList
