import { IconButton } from '@material-ui/core'
import CheckBox from '@material-ui/core/Checkbox'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import React from 'react'
import './MailRow.css'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { selectedMail } from './features/counter/mailSlice'

function MailRow({ title, subject, description, id, time }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const openMail = () => {
        dispatch(selectedMail({
            id, title, subject, description, time
        }))
        history.push("/mail")
    }

    return (
        <div onClick={openMail} className='emailRow'>
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
