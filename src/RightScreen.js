import React from 'react';
import MainRight from './main/MainRight';
import { Route, Routes } from 'react-router-dom';
import MainSignupRight from './main/MainSignupRight';

const RightScreen = () => {
    return (
        <div id="ifright">
            <Routes>
                <Route path="/" element={<MainRight/>} exact></Route>
                <Route path="/signup" element={<MainSignupRight/>}></Route>
            </Routes>
            
        </div>
    );
};

export default RightScreen;