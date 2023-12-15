import React from 'react';
import infoimg from '../image/q2.jpg'
function Info(props) {
    return (
        <div>
            <img src={infoimg} style={{height:'250px',width:'150px'}}/>
            <br/>
            <div>쌍용교육센터</div>
            <div>010-5648-0375</div>
        </div>
    );
}

export default Info;