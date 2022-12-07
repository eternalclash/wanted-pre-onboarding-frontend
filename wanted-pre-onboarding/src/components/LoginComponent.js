import React, { useState,useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { login } from '../api/login';

const LoginComponent = (props) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [isEmail, setIsEmail] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [isPassword, setIsPassword] = useState(false)

    const onChangeEmail = useCallback((e) => {
        const emailRegex =
          /([\w-.]+)@/
        const emailCurrent = e.target.value
        setEmail(emailCurrent)
    
        if (!emailRegex.test(emailCurrent)) {
          setEmailMessage('이메일에는 @가 포함되어야 합니다')
          setIsEmail(false)
        } else {
          setEmailMessage('올바른 이메일 형식입니다')
          setIsEmail(true)
        }
      }, [])
    const onChangePassword = useCallback((e) => {
        const passwordRegex = /([\w-.]+).{7,25}$/
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)
        if (!passwordRegex.test(passwordCurrent)) {
          setPasswordMessage('비밀번호 8자리 이상 입력해주세요')
          setIsPassword(false)
        } else {
          setPasswordMessage('안전한 비밀번호입니다')
          setIsPassword(true)
        }
      }, [])
    
      const onClickLogin =()=>{
        login(email,password).then((res)=>{
           window.alert('로그인 성공')
           localStorage.setItem("access_token", res.data.access_token);
           navigate("/todo")
        })
        .catch((err) => {
            window.alert(err.response.data.message)
        })
    }
    return (
        <div>
            <div>LOGIN</div>
            <div>이메일</div>
            <input onChange={onChangeEmail} placeholder='이메일을 입력해주세요'/>
            {email.length > 0 &&<span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
            <div>비밀번호</div>
            <input  type='password' onChange={onChangePassword} placeholder='비밀번호를 입력해주세요'/>
            {password.length > 0 && (<span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>)}
            <ButtonWrap>            
              <div onClick={onClickLogin}>로그인</div>
              <div onClick={()=>props.setLoginOrSignUp(false)}>회원가입</div>
            </ButtonWrap>

        </div>
    );
};

const ButtonWrap = styled.div`
display:flex;
justify-content:space-between;
`

export default LoginComponent;