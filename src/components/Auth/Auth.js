import React from 'react'
import classes from './AuthStyles/Auth.module.css'
import AuthForm from './AuthForm'

export default function Auth() {
    return (
        <>
            <div className={classes.Auth} >
            <AuthForm/>
            </div>
        </>
        
    )
}
