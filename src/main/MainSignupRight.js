import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainSignupRight.css';
import img05 from '../image/miniroom.gif';
import img06 from '../image/miniroom2.gif';
import img07 from '../image/miniroom3.gif';

const MainSignupRight = () => {
    const [userId, setUserId] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [userPwdCheck, setUserPwdCheck] = useState("");
    const [userNickname, setUserNickname] = useState("");
    const [userBirth, setUserBirth] = useState("");
    const [userGender, setUserGender] = useState("남자");

    const handleChange = (e) => {
      console.log(e.target.value);
      setUserGender(e.target.value);
    };
        
    const [userIdError, setUserIdError] = useState(false);
    const [userPwdError, setUserPwdError] = useState(false);
    const [userPwdCheckError, setUserPwdCheckError] = useState(false);
    const [userNicknameError, setUserNicknameError] = useState(false);
    const [userBirthError, setUserBirthError] = useState(false);

    const onChangeUserId = (e) => { /* 중복확인 추가해야됨 */
        const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
        if ((!e.target.value || (userIdRegex.test(e.target.value)))) setUserIdError(false);
        else setUserIdError(true);
        setUserId(e.target.value);
    }

    const onChangeUserPwd = (e) => {
        const userPwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        /* /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/ */
        if((!e.target.value || (userPwdRegex.test(e.target.value)))) setUserPwdError(false);
        else setUserPwdError(true);
        
        if(!userPwdCheck || e.target.value === userPwdCheck) setUserPwdCheckError(false);
        else setUserPwdCheckError(true);
        setUserPwd(e.target.value);        
    }

    const onChangeUserPwdCheck = (e) => {
        if(userPwd === e.target.value) setUserPwdCheckError(false);
        else setUserPwdCheckError(true);
        setUserPwdCheck(e.target.value);
    }

    const onChangeUserNickname = (e) => {
        setUserNicknameError(false);
        setUserNickname(e.target.value);
    }

    const onChangeUserBirth = (e) => {
        setUserBirthError(false);
        setUserBirth(e.target.value);
    }

    const validation = () => {
        if(!userId) setUserIdError(true);
        if(!userPwd) setUserPwdError(true);
        if(!userPwdCheck) setUserPwdCheckError(true);
        if(!userNickname) setUserNicknameError(true);
        if(!userBirth) setUserBirthError(true);

        if(userId && userPwd && userPwdCheck && userNickname && userBirth) return (true);
        else return false;
    }

    const onSubmit = () => {
        if(validation()) return;
        //API call
        else{
        /* const url = `/userSignUp`;

        const form = new FormData()       
        form.append('userId', userId)
        form.append('userPwd', userPwd)
        form.append('userNickname', userNickname)
        form.append('userBirth', userBirth)
        form.append('userGender', userGender)
        
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },  
        };
        return axios.post(url, form, config); */
           axios.post('/userSignUp',  {
                headers: {
                  'Content-type': "application/json",
                },              
                data:{
                userId: userId,
                userPwd: userPwd,
                userNickname: userNickname,
                userBirth: userBirth,
                userGender: userGender }}) 
               .then( response => {
                    window.alert('성공')
                    console.log('response : ', JSON.stringify(response, null, 2))
                
                }).catch( error => {
                    console.log('failed', error)
                })            
           }       
        }     
    

    return ( 
        <div>
            <div className='signupContainer_main'>
                <Container className="panel">
                    <div className="signupFormMsg">
                        {/* <h3 style={{fontSize:"17pt"}}>회원가입</h3>
                        <hr style={{margin:'auto'}} width='400' /> */}
                        <p style={{marginTop:'20px'}}>스마일 월드에 오신 것을 환영합니다.</p>
                        <p style={{marginTop:'-10px'}}>회원가입하신 후 <span style={{color: "rgb(253, 117, 7)"}}>스마일 월드의 다양한 서비스</span>를 만나보세요!😊</p>
                    </div>
                    <Form> {/* serial id pwd nickname birth gender  */}
                        {/* 에러메시지 구역 */}                     
                        <Form.Group as={Row}>
                            {userIdError || userPwdError || userPwdCheckError || userNicknameError || userBirthError ?
                                <Alert variant="danger" style={{fontSize: 12}}>
                                    {userIdError ?
                                        <div>아이디는 최소 5자 이상이어야 합니다.(문자 또는 숫자 포함)</div> : null}
                                    {userPwdError ?
                                        <div>비밀번호는 최소 8자 이상이어야 합니다.(문자, 숫자, 특수문자 반드시 포함)</div> : null}       
                                    {userPwdCheckError ?
                                        <div>입력하신 비밀번호가 일치하지 않습니다.</div> : null}
                                    {userNicknameError ?
                                        <div>닉네임을 입력해주세요.</div> : null}           
                                    {userBirthError ?
                                        <div>생년월일을 입력해주세요.</div> : null}                                                               
                                </Alert> 
                            : null}
                        </Form.Group>                       
                        
                        <Form.Group as={Row} className="mb-2">                                                          
                            <Col sm>
                                <span className='signupTitle'>아이디</span>
                                <Form.Control maxLength={20} placeholder='아이디 입력' style={{fontSize: 14}} value={userId} onChange={onChangeUserId}/>                                
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-2">
                            <Col sm>
                                <span className='signupTitle'>비밀번호</span>
                                <Form.Control maxLength={20} placeholder='비밀번호 입력' style={{fontSize: 14}} value={userPwd} type={"password"} onChange={onChangeUserPwd}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-2">
                            <Col sm>
                                <span className='signupTitle'>비밀번호 재확인</span>
                                <Form.Control maxLength={20} placeholder='비밀번호 입력' style={{fontSize: 14}} value={userPwdCheck} type={"password"} onChange={onChangeUserPwdCheck}/>
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-2">
                            <Col sm>
                                <span className='signupTitle'>닉네임</span>
                                <Form.Control maxLength={20} placeholder='닉네임 입력' style={{fontSize: 14}} value={userNickname} onChange={onChangeUserNickname} />
                            </Col>
                        </Form.Group>

                        {/*  생년월일&성별 유효성검사 데이터넘기는 법 체크 */}                    
                        <Form.Group as={Row} className="mb-2">
                            <Col sm>
                                <span className='signupTitle'>생년월일</span>
                                <Form.Control value={userBirth} style={{fontSize: 15}} type="date" onChange={onChangeUserBirth} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-2">
                            <Col sm>
                                <span className='signupTitle'>성별</span>                          
                                <div className='genderDiv'> 
                                    <Form.Check inline label="남자" value="남자" name={userGender} type="radio" onChange={handleChange} checked={userGender ==='남자'}/>
                                    <Form.Check inline label="여자" value="여자" name={userGender} type="radio" onChange={handleChange} checked={userGender ==='여자'}/>                                    
                                </div>                  
                            </Col>
                        </Form.Group>
                        <div className="d-grid gap-1" style={{marginBottom: 10}}>
                            <Button variant="secondary" onClick={onSubmit}>
                               회원가입
                            </Button>
                        </div>
                        <span style={{fontSize: 14}}>기존 회원이신가요? <Link to="/" className="link">로그인</Link></span>               
                    </Form>

                </Container>
                <div className='ad'>
                    <img src={img05} alt='miniroom1' width='250' height='180'/>
                    <img src={img06} alt='miniroom2' width='250' height='180'/>
                    <img src={img07} alt='miniroom3' width='250' height='180'/>
                </div>    
            </div>                
            
        </div>
    );
};

export default MainSignupRight;