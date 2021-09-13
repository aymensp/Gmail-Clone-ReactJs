import { IconButton } from '@material-ui/core'
import CheckBox from '@material-ui/core/Checkbox'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import React from 'react'
import './MailRow.css'
import { useHistory } from 'react-router'

function MailRow({ title, subject, description, id, time }) {
const history = useHistory();

    return (
        <div onClick={()=> history.push("/mail")} className='emailRow'>
            <div className='emailRow__options'>
                <CheckBox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className='emailRow__title'>
                {title}
            </h3>
            <div className='emailRow__message'>
                <h4>{subject} {"  "}
                    <span className='emailRow__description'> - {description}</span>
                </h4>


            </div>
            <p className='emailRow__time'>
                {time}
            </p>
        </div>
    )
}

export default MailRow
