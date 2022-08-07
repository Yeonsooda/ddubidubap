import React from 'react';
import './MainRight.css';
import img03 from '../image/siworld.gif';
import img04 from '../image/minimi.png';

/* class RightScreen extends Component {
    render() { */
function MainRight() {
    return (
        <div>
            <div className='mainHome'>
            <img src={img03} width='750' height='450'/> 
            <br/><br/>              
            이곳은 여러분의 스마일 월드입니다.<img src={img04} width='50'/>
            </div>       
        </div>
    );
   /*  }  */   
}

export default MainRight;