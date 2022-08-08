import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link } from 'react-router-dom';
import LeftScreen from './LeftScreen';
import RightScreen from './RightScreen';
import img01 from './image/logo2.png';
import img02 from './image/searchicon.png';

/* class App extends Component {
  render() {  */
/* function App(history) {  */ 
function App() {     
  return (
    <BrowserRouter>
      <div id="page">
        <div id="outerleft">            
          <div id="dotleft">
            <Link to='/'>
            <div className='logo'>{/* 로고 클릭 시 홈으로 이동 시키기 */} 
            <img src={img01} alt='logo' width='200' /> {/* onClick={()=> {history.push('/')}} */}
            </div>
            </Link>
            <LeftScreen/>
          </div>
        </div>

        <div id="outerright">
          <div id="dotright">
            <div className='search'>
                <input type='text' value='' placeholder="검색어를 입력하세요!" className='searchKeyword'/>
                <button className='searchBtn' type='submit'><img src={img02} alt='search' width='20'/></button>
            </div>
            <RightScreen/>
          </div>
        </div>
      
      </div>
    </BrowserRouter>
  );
 /*  } */
}

export default App;