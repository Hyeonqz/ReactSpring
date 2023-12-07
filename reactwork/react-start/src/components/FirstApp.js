import React from 'react';
import './Mystyle.css';

function FirstApp(props) {
    return (
            <div>
                <h2 className='line'>FirstApp components</h2>
                <div style={{fontsize:'50px',marginleft:'100px',backgroundColor:'gray'}}>
                    안녕 오늘은 목요일이란다..
                </div>
            </div>
        );
    }

export default FirstApp;