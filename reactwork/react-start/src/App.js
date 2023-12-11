import './App.css';
import { useState } from 'react';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import FiveApp from './components/FiveApp';
import SixApp from './components/SixApp';
import SevenApp from './components/SevenApp';

function App() {

    //기본값을 2로 설정한다
    const [idx,setIdx]=useState(1)

    return (
        <div className="App">
            <b style={{fontSize:'16px'}}>컴포넌트 선택하기 : </b>

            <select onChange={(e)=>{
                setIdx(Number(e.target.value));
            }}>
                <option value='1' selected>OneApp 확인하기</option>
                <option value='2'>TwoApp 확인하기</option>
                <option value='3'>ThreeApp 확인하기</option>
                <option value='4'>FourApp 확인하기</option>
                <option value='5'>FiveApp 확인하기</option>
                <option value='6'>SixApp 확인하기</option>
                <option value='7'>SevenApp 확인하기</option>

            </select>

            {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:idx===4?<FourApp/>:idx===5?<FiveApp/>:idx===6?<SixApp/>:<SevenApp/>}
        </div>
    );
}

export default App;
