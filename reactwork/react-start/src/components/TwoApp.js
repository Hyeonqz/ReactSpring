import React, { useState } from 'react';

function TwoApp(props) {

    const [photo,setPhoto]=useState('../image/bear.png')

    const radiocheck=(e)=> {

        setPhoto(e.target.value);
    }
    return (
        <div>
            <h3>TwoApp입니다</h3>
            <div>
                <b>이미지선택 : </b>
                <label>
                    <input type='radio' name='photo'value='../image/bear.png' onClick={radiocheck} defaultChecked/>
                </label>

                <label>
                    <input type='radio' name='photo'value='../image/ddong.png' onClick={radiocheck}/>
                </label>
            </div>

            <img src={photo} style={{width:'200px',height:'200px',marginTop:'50px'}}/>
        </div>
    );
}

export default TwoApp;