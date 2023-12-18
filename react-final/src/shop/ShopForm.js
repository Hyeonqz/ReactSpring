import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function ShopForm(props) {

    //DB column을 변수로 선언
    const [photo, setPhoto] = useState('');
    const [sangpum,setSangpum] = useState('');
    const [su,setSu] = useState('');
    const [dan,setDan] = useState('');

    const navi = useNavigate(); //insert후 목록으로 이동.

    //스프링 컨트롤러 매핑 url 변수 등록
    let uploadUrl = "http://localhost:9000/shop/upload";
    let photoUrl = "http://localhost:9000/save/";
    let insertUrl = "http://localhost:9000/shop/insert";
    //file Change 시 호출 이벤트
    const uploadImage = (e) => {
        const uploadFile = e.target.files[0];
        const imageFile = new FormData();
            imageFile.append("uploadFile",uploadFile);

            axios({
                method : 'post',
                url : uploadUrl,
                data : imageFile,
                headers : {'Content-Type': 'multipart/form-data'}
            }).then(res=> {
                setPhoto(res.data);
            }).catch(error=>{
                alert(error.message);
            })
    }

    const onInsert=()=> {
        axios.post(insertUrl, {sangpum,su,dan})
            .then(res=>{
                //insert 처리 후 로직 작성
                navi("/shop/list");
            });
    }

    return (
        <div style={{marginLeft:'100px'}}>
            <table className='table table-bordered' style={{width:'600px'}}>
                <caption align='top'><b>상품등록</b></caption>
                <tbody>
                    <tr>
                        <th>상품명</th>
                        <td>
                            <input type='text' className='form-control' style={{width:'250px'}} onChange={(e)=> {
                                setSangpum(e.target.value);
                            }}/>
                        </td>
                        <th>{sangpum}</th>
                    </tr>

                    <tr>
                        <th>상품사진</th>
                        <td>
                            <input type='file' className='form-control' style={{width:'250px'}} onChange={uploadImage}/>
                        </td>
                        <th></th>
                    </tr>
                    <tr>
                        <th>수량</th>
                        <td>
                            <input type='text' className='form-control' style={{width:'250px'}} onChange={(e)=>{
                                setSu(e.target.value);
                            }}/>
                        </td>
                        <th>{su}</th>
                    </tr>
                    <tr>
                        <th>단가</th>
                        <td>
                            <input type='text' className='form-control' style={{width:'250px'}} onChange={(e)=>{
                                setDan(e.target.value);
                            }}/>
                        </td>
                        <th>{dan}</th>
                    </tr>

                    <tr>
                        <td colSpan='2'>
                            <img src={photoUrl+photo} alt='외 안 나 와' style={{width:'150px',height:'150px',marginLeft:'200px'}}/>
                        </td>
                        <td>
                            <butotn type='button' className='btn btn-outline-dark' style={{width:'120px',height:'120px',marginLeft:'30px'}}>상품등록</butotn>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ShopForm;