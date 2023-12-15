import React from 'react';
import titleimg from '../image/q1.jpg';
function Title(props) {
    return (
        <div>
            <img src={titleimg} style={{height:'150px'}}/>
            <b style={{fontSize:'20px'}}>
                React-Springboot project
            </b>
        </div>
    );
}

export default Title;