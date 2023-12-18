import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import ShopRowItem from "./ShopRowItem";

function Shop(props) {
    const navi = useNavigate();

    // 백엔드에서 받아올 리스트 데이터 변수
    const [shopList, setShopList] = useState([]);

    // 데이터 가져오는 함수
    const list = () => {
        let url = "http://localhost:9000/shop/list";

        axios.get(url)
            .then(res => {
                setShopList(res.data);
                console.log("len : " + res.data.length);
            })
    }

    // 처음 렌더링시 딱 한번 데이터 가져오기
    useEffect(() => {
        list();
    }, []);  // 두번째 인자로 빈 배열을 전달하여 한 번만 실행되도록 설정

    return (
        <div>
            <button
                type='button'
                className='btn btn-info'
                style={{ width: '120px' }}
                onClick={() => {
                    navi("/shop/form");
                }}
            >상품등록
            </button>

            <hr />
            <table className='table table-bordered' style={{ width: '500px' }}>
                <thead>
                <tr>
                    <th width='60'>번호</th>
                    <th width='150'>상품명</th>
                    <th width='300'>상세보기</th>
                </tr>
                </thead>

                <tbody>
                {
                    shopList.map((row, index) => (
                        <ShopRowItem row={row} idx={index} />
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default Shop;
