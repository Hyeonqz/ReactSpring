import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function ShopDetail(props) {
    const {num} = useParams();
    const[data,setData] = useState('');

    let photoUrl = "http://localhost:9000/save/";
    let detailUrl = "http://localhost:9000/shop/detail?num"+num;

    //Spring으로 부터 num에 해당하는 data받기
    const onDataReceived =()=> {
        axios.get(detailUrl)
            .then(res=>{
                setData(res.data);
            });
    }

    //처음 랜더링시 위의 함수 호출
    useEffect(()=>{
        onDataReceived();
    },[]);

    return (
        <div>
            <h2>{num}</h2>
            <h1>ShopDetail이다</h1>
        </div>
    );
}

export default ShopDetail;