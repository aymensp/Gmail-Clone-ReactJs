import React from 'react'
import "./SendMail.css"
import CloseIcon from "@material-ui/icons/Close"

function SendMail() {
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3> New message</h3>
                <CloseIcon />
            </div>
        </div>
    )
}

export default SendMail
