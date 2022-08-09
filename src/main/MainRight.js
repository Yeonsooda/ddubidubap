import React from 'react';
import './MainRight.css';
import img03 from '../image/siworld.gif';
import img04 from '../image/minimi.png';

/* class RightScreen extends Component {
    render() { */
/* function MainRight() { */
const MainRight = () => {
    return (
        <div>
            <div className='mainHome'>
            <img src={img03} width='750' height='450' alt='miniroom'/> 
            <br/>              
            <p style={{marginTop: 20}}>이곳은 여러분의 스마일 월드입니다.<img src={img04} width='50' alt='minimi' style={{marginBottom: 35}}/></p>
            </div>       
        </div>
    );
   /*  }  */   
}

export default MainRight;