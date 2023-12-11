import React from 'react';
import Alert from '@mui/material/Alert';
import AppleIcon from '@mui/icons-material/Apple';

function FourApp(props) {

    //배열변수선언
    const names=['진평','선범','영환','호석','성경','주영'];

    //반복문을 변수에 저장 후 출력
    const nameList=names.map((name)=>(<li>{name}</li>));

    //색상을 5개 배열로 주고 결과물을 div로 출력

    const colors=['red','blue','green','pink','black'];
    
    return (
        <div>
            <h3>FourApp입니다</h3>
            <Alert severity="warning">배열연습 <AppleIcon/></Alert>
            <div>
                <h3>map연습</h3>
                <ul>
                    {
                        //반복문을 직접 리턴
                        names.map((name,index)=>(<b style={{margin: '5px 5px'}}>{index+1}:{name}</b>))
                    }
                    
                </ul>

                <ul>
                    {nameList}
                </ul>

                <hr/>

                <h3>과제_배열색상 가로로 출력하기</h3>

                    {
                        colors.map((color,idx)=>(<b style={{color:color,margin:'5px 5px'}}>{idx+1}:{color}</b>))
                    }
            </div>
        </div>
    );
}

export default FourApp;