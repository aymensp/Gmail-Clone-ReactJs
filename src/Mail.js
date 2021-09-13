import React from 'react'
import "./MailList"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox"
import ErrorIcon from "@material-ui/icons/Error"
import DeletIcon from "@material-ui/icons/Delete"
import EmailIcon from "@material-ui/icons/Email"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { IconButton } from '@material-ui/core'
import { Label } from '@material-ui/icons'
import { useHistory } from 'react-router'

function Mail() {
const history = useHistory();

    return (
        <div className="mail">

            <div className="mail__tools">


                <div className="mail__toolsLeft">
                    <IconButton>
                        <ArrowBackIcon onClick={()=> history.push("/")} />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeletIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">

                </div>
            </div>
        </div>
    )
}

export default Mail
