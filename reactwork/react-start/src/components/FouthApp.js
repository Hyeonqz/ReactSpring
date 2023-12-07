import React, { useState } from 'react';
import img2 from '../image/1.JPG';

function FouthApp(props) {

    const [name,setName]=useState('장순영');

    const [age, setAge]=useState('29');

    const enterEvent=(e)=>{ 
        if(e.key==='Enter') {
            setName('');
            setAge('');
            e.target.value='';
        }
    }

    return (
        <div>
            <h3 className='alert alert-info'>FouthApp입니다
            <img src={img2} className='img rounded-circle' style={{width:'150px'}}/>
            </h3>
            <b style={{width:'100px',fontSize:'28px'}}>이름 : {name} <span>의 나이 : 곧 {age}살</span></b>
            <br/><br/>
            <button type='button' className='btn btn-info' 
            onClick={(e)=>{
                 setName('진현규');
                 setAge('25');
            }
            }>값변경</button>
            <button type='button' className='btn btn-info'style={{marginLeft:'10px'}} 
            onClick={(e)=>{
                setName('');
                setAge('');
            }}
            >초기화</button>
        </div>
    );
}

export default FouthApp;