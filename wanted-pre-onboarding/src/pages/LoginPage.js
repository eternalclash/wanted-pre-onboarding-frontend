import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, UseNavigate } from 'react-router';

import LoginComponent from '../components/LoginComponent';
import SignUpComponent from '../components/SignUpComponent';

const LoginPage = () => {
    const navigate =useNavigate()
    useEffect(()=>{
        const user=localStorage.getItem("access_token")
        if(user) {
           navigate("/todo")
        }
    },[])

    const [loginOrSignUp,setLoginOrSignUp] = useState(true)
     
    return (
        <div>
            {loginOrSignUp ?   <LoginComponent setLoginOrSignUp={setLoginOrSignUp}/> : <SignUpComponent setLoginOrSignUp={setLoginOrSignUp}/>}
        </div>
    );
};

export default LoginPage;

