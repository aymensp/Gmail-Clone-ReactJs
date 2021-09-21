import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';
import { auth, provider } from './firebase'
import './Login.css'
function Login() {
    const dispatch = useDispatch();
    const SignIn = ()=>{
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName : user.displayName,
                email:user.email,
                photoUrl : user.photoURL
            }))
            
        })
        .catch (error => alert(error.message));
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png' alt='gmail__logo' />
                <Button variant='contained' color='primary' onClick={SignIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
