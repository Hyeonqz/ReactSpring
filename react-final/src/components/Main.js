import React from 'react';
import main1 from '../image/q3.jpg';
import main2 from '../image/q4.jpg';
import main3 from '../image/q5.JPG';
import main4 from '../image/q6.JPG';

function Main(props) {
    return (
        <div>
            <img src={main1} style={{width:'120px', height:'120px'}}/>
            <img src={main2} style={{width:'120px', height:'120px'}}/>
            <img src={main3} style={{width:'120px', height:'120px'}}/>
            <img src={main4} style={{width:'120px', height:'120px'}}/>
        </div>
    );
}

export default Main;