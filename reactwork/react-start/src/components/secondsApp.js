//rsf, rcc, rsc

import React from 'react';
import img1 from '../image/'

function secondsApp(props) {

    const imgstyle ={
        border:'5px inset gray',
        borderRadius:'100px',
        with:'130px'
    }

    let helloEle = <h2>Hello~~</h2>

    return (
        <div>
            <h2 className='alert alert-danger'>SecondApp 입니다.</h2>
            <img src={img1} style={imgstyle}/>
            {helloEle}
            {helloEle}
        </div>
    );
}

export default secondsApp;