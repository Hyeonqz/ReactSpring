import React, { useState } from 'react';
import img1 from '../image/1.JPG';


function ThirdApp(props) {

    const [message,setMessage]=useState('Happy Day');

    const enterEvent=(e)=>{ //e.keyCode===13
        if(e.key==='Enter') {
            setMessage('');
            e.target.value='';
        }
    }

    return (
        <div>
            <h3 className='alert alert-info'>세번째 웹 어플리케이션 입니다.</h3>
            <h3 style={{color:'red'}}>{message}</h3>
            <h4>메시지를 입력하시오</h4>

            <input type='text' style={{width:'300px',fontSize:'1.5em'}} defaultValue={message} 
            onChange={(e)=>{
                console.log(e.target.value)
                //message 변수에 입력값 넣기
                setMessage(e.target.value);
            }}/>
            
        </div>
    );
}

export default ThirdApp;