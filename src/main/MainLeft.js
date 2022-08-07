import React, { useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import './MainLeft.css';

/* class LeftScreen extends Component {
    render() { */
function MainLeft(history) {   
    const [id, setId] = useState('')
    const [pwd, setPwd] = useState('')

    const idRef = useRef(null)

    const onChangeId = (e) => {
        const {value} = e.target
        setId(value)
    }

    const onChangePwd = (e) => {
        const {value} = e.target
        setPwd(value)
    }
       
/*     const toSignup = () =>{
        document.location.href("/siginup")
    } */

    return (
        <div>
            <div className="loginContainer">
                <h3>회원 로그인</h3>
                <hr width='300' />
                <table className='loginContainer_sub'>
                    <tr>                    
                        <td>
                            <input type="text" placeholder="아이디를 입력하세요!" value={id} onChange={onChangeId} ref={idRef} className="loginInput"/>
                        </td>
                        <td rowSpan='2'>
                            <button className='loginBtn' disabled={pwd.length<6}>로그인</button>           
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" placeholder="비밀번호를 입력하세요!" value={pwd} onChange={onChangePwd} className="loginInput"/>
                        </td>
                    </tr>
                </table>
            </div>

            <div className="loginEtcContainer">
            <p className='loginEtcFont'>
                아직 SIWorld 회원이 아니신가요? 
                <Link to="/signup">
                    <button className='signupBtn'>회원가입</button>
                </Link>
            </p>     

            <p className='loginEtcFont'>
                회원 아이디 또는 비밀번호를 잊으셨나요?
                <button className='finderBtn' >아이디/비밀번호 찾기</button>
            </p>
            </div>  

        </div>
    );
   /*  } */
}

export default MainLeft;