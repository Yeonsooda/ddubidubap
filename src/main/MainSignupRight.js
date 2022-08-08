import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainSignupRight.css';
import img05 from '../image/miniroom.gif';
import img06 from '../image/miniroom2.gif';
import img07 from '../image/miniroom3.gif';

const MainSignupRight = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const [userIdError, setUserIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const onChangeUserId = (e) => {
        const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
        if ((!e.target.value || (userIdRegex.test(e.target.value)))) setUserIdError(false);
        else setUserIdError(true);
        setUserId(e.target.value);
    };
    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);

        if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        if (password === e.target.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(e.target.value);
    };
    const onChangeUserName = (e) => {
        setUserNameError(false);
        setUserName(e.target.value)
    };
    const onChangeEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };

    const validation = () => {
        if(!userId) setUserIdError(true);
        if(!password) setPasswordError(true);
        if(!confirmPassword) setConfirmPasswordError(true);
        if(!userName) setUserNameError(true);
        if(!email) setEmailError(true);

        if(userId && password && confirmPassword && userName && email) return true;
        else return false;
    }

    const onSubmit = (e) => {
        if(validation()) return;
        
        // API Call      

    }
    /* serial id pwd nickname birth gender*/
    return ( 
        <div>                
            <div className='signupContainer_main'>
                <Container className="panel">
                    <div className="signupFormMsg">
                        <h3 style={{fontSize:"17pt"}}>회원가입</h3>
                        <hr style={{margin:'auto'}} width='400' />
                        <p style={{marginTop:'20px'}}>스마일 월드에 오신 것을 환영합니다.</p>
                        <p style={{marginTop:'-10px'}}>회원가입하신 후 <span style={{color: "rgb(253, 117, 7)"}}>스마일 월드의 다양한 서비스</span>를 만나보세요!😊</p>
                    </div>      
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm>
                                <span className='signupTitle'>아이디</span>
                                <Form.Control maxLength={20} placeholder="UserID" value={userId} onChange={onChangeUserId} />
                                {userIdError && <div class="invalid-input">User ID must be at least 5 letter and contain letters or numbers.</div>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm>
                                <span className='signupTitle'>아이디</span>
                                <Form.Control maxLength={20} type="password" placeholder="Password" value={password} onChange={onChangePassword} />
                                {passwordError && <div class="invalid-input">Password must be at least 8 characters and contain at least one letter and one number. </div>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm>
                                <span className='signupTitle'>아이디</span>
                                <Form.Control maxLength={20} type="password" placeholder="Confirm Password" value={confirmPassword} onChange={onChangeConfirmPassword} />
                                {confirmPasswordError && <div class="invalid-input">Those passwords didn't match.</div>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm>
                                <span className='signupTitle'>아이디</span>
                                <Form.Control maxLength={20} placeholder="Username" value={userName} onChange={onChangeUserName} />
                                {userNameError && <div class="invalid-input">Required.</div>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm>
                                <span className='signupTitle'>아이디</span>
                                <Form.Control maxLength={50} type="input" placeholder="Email Address" value={email} onChange={onChangeEmail} />
                                {emailError && <div class="invalid-input">Please enter valid email format.</div>}
                            </Col>
                        </Form.Group>                    
                        <div className="d-grid gap-1">
                            <Button variant="secondary" onClick={onSubmit}>
                                Sign Up
                            </Button>
                            <br/>
                        </div>
                    </Form>                
                    <span className="text">Have an account? <Link to="/" className="link">Sign In</Link></span>    
                </Container>
                <div className='ad'>
                    <img src={img05} alt='miniroom1' width='250' height='175'/>
                    <img src={img06} alt='miniroom2' width='250' height='175'/>
                    <img src={img07} alt='miniroom3' width='250' height='175'/>
                </div>
            </div>
        </div>
    );
};

export default MainSignupRight;