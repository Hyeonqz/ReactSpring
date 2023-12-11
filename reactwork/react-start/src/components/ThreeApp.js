// import React, { useState } from 'react';
//
// function ThreeApp(props) {
//
//     const [h1,setHp1]=useState('010');
//     const [h2,setHp2]=useState('1234');
//     const [h3,setHp3]=useState('5678');
//     const [photo,setPhoto]=useState("../image2/bear.png");
//
//     const changeHp1=(e)=>{
//         setHp1(e.target.value);
//     }
//
//     const changeHp2=(e)=>{
//         setHp2(e.target.value);
//     }
//
//     const changeHp3=(e)=>{
//
//         setHp3(e.target.value);
//     }
//
//     return (
//         <div>
//             <h3>TwoApp입니다_문제1</h3>
//             <div>
//                 <select onChange={changeHp1}>
//                     <option>010</option>
//                     <option>011</option>
//                     <option>012</option>
//                     <option>013</option>
//                     <option>014</option>
//                 </select>
//                 <b> - </b>
//                 <input type='text' maxLength={4} style={{width: '40px',height:'13px'}}
//                 onKeyUp={changeHp2}/>
//                 <b> - </b>
//                 <input type='text' maxLength={4} style={{width: '40px',height:'13px'}}
//                 onKeyUp={changeHp3}/>
//
//                 <b>이미지 선택 : </b>
//                 <select onChange={changePhoto}>
//                     <option value="1">이미지1</option>
//                     <option value="2">이미지2</option>
//                 </select>
//             </div>
//
//             <br/><br/>
//             <h1>{h1} - {h2} - {h3}</h1>
//             <img src={photo} style={{width:'200px',height:'200px',marginTop:'50px'}}/>
//         </div>
//     );
// }
//
// export default ThreeApp;