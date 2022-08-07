import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLeft from './main/MainLeft';

const LeftScreen = () => {
    return (
        <div id="ifleft">
            <Routes>
                <Route path="/" element={<MainLeft/>} exact></Route>
                <Route path="/signup" element={<MainLeft/>}></Route>
            </Routes>            
        </div>
    );
};

export default LeftScreen;