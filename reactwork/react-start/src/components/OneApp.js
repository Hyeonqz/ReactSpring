import React, { useState } from 'react';

function OneApp(props) {

    const [number,setNumber]=useState(0);


    const numDecre = () => {
        if (number === 0) {
          alert('0보다 아래로 감소 금지!');
          return;
        }
    
        setNumber(number - 1);
      };
    
      const numIncre = () => {
        if (number === 10) {
          alert('10보다 위로 증가 금지!');
          return;
        }
    
        setNumber(number + 1);
      };

    return (
        <div>
            <h3>OneApp입니다</h3>
            <div className='number'>
                {number}
            </div>
            <div>
                <button type='button' className='btn' onClick={numDecre}>감소</button>
                <button type='button' className='btn' onClick={numIncre}>증가</button>
            </div>
        </div>
    );
}

export default OneApp;