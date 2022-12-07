import React, { useState,useCallback } from 'react';

import styled from 'styled-components';
import { signup } from '../../api/signup';
const SignUpComponent = (props) => {


    const [email, setEmail] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [isEmail, setIsEmail] = useState(false)
    const [emailColor,setEmailColor] = useState()
    const [password, setPassword] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [isPassword, setIsPassword] = useState(false)
    const [passwordColor,setPasswordColor] = useState()



    const onChangeEmail = useCallback((e) => {
        const emailRegex =
          /([\w-.]+)@/
        const emailCurrent = e.target.value
        setEmail(emailCurrent)
    
        if (!emailRegex.test(emailCurrent)) {
          setEmailMessage('이메일에는 @가 포함되어야 합니다')
          setIsEmail(false)
          setEmailColor("red")
        } else {
          setEmailMessage('올바른 이메일 형식입니다')
          setIsEmail(true)
          setEmailColor("green")
        }
      }, [])
    const onChangePassword = useCallback((e) => {
        const passwordRegex = /([\w-.]+).{7,25}$/
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)
        if (!passwordRegex.test(passwordCurrent)) {
          setPasswordMessage('비밀번호 8자리 이상 입력해주세요')
          setIsPassword(false)
          setPasswordColor("red")

        } else {
          setPasswordMessage('안전한 비밀번호입니다')
          setIsPassword(true)
          setPasswordColor("green")
        }
      }, [])

    const onClickSignUp =()=>{
        signup(email,password).then((res)=>{
            props.setLoginOrSignUp(true)
        })
        .catch((err) => {
            window.alert("이메일이 중복됩니다")
        })
      
    }
    return (
        <div>
            <div>SIGNUP</div>
            <div>이메일</div>
            <input onChange={onChangeEmail} placeholder='이메일을 입력해주세요'/>
            {email.length > 0 &&<span style={{color:`${emailColor}`}} >{emailMessage}</span>}
            <div>비밀번호</div>
            <input  type='password' onChange={onChangePassword} placeholder='비밀번호를 입력해주세요'/>
            {password.length > 0 && (<span style={{color:`${passwordColor}`}}>{passwordMessage}</span>)}
            <ButtonWrap>
                {
                    isEmail&&isPassword? <SuccessButton onClick={onClickSignUp}>회원가입</SuccessButton>: <FailButton >회원가입</FailButton>
                }            
             
              <div style={{border:"1px solid", width:"50%",cursor:"pointer"}}onClick={()=>props.setLoginOrSignUp(true)}>취소</div>
            </ButtonWrap>

        </div>
    );
};

const ButtonWrap = styled.div`
display:flex;
justify-content:space-between;
`
const SuccessButton = styled.div`
width:50%;
background-color:orange;
cursor:pointer;
border:1px solid;
`
const FailButton = styled.div`
width:50%;
border: 1px solid;

`


export default SignUpComponent;