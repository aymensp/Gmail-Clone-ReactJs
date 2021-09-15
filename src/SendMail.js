import React from 'react'
import "./SendMail.css"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { closeSendMessage } from './features/counter/mailSlice'
import { useDispatch } from 'react-redux'
import { db } from './firebase'

function SendMail() {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (formData) => {
        console.log(formData)
        
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,

        });
        dispatch(closeSendMessage)
    };
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3> New message</h3>
                <CloseIcon className='sendMail__close'
                onClick={()=>dispatch(closeSendMessage())}
                />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                style={{fontSize:'16px'}}
                    type="email"
                    placeholder="To"
                    {...register("to", { required: true })}
                />
                {errors.to && <span className="sendMail__error">This field is required !</span>}
                <input
                style={{fontSize:'16px'}}
                    name='subject'
                    type="text"
                    placeholder="Subject"
                    {...register("subject", { required: true })}
                />
                {errors.subject && <span className="sendMail__error">This field is required !</span>}

                <input
                    style={{fontSize:'16px'}}
                    type="text"
                    name='message'
                    placeholder="Message ..."
                    className="sendMail__message"
                    {...register("message", { required: true })}
                />
                {errors.message && <span className="sendMail__error">This field is required !</span>}

                <div className="sendMail__options">
                    <Button className='sendMail__send'
                        type='submit'
                        variant='contained'
                        color='primary'
                    >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
