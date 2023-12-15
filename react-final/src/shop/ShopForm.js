import React from 'react';

function ShopForm(props) {
    return (
        <div style={{marginLeft:'100px'}}>
            <table className='table table-bordered' style={{width:'600px'}}>
                <caption align='top'><b>상품등록</b></caption>
                <tbody>
                    <tr>
                        <th>상품명</th>
                        <td>
                            <input type='text' className='form-control' style={{width:'250px'}}/>
                        </td>
                        <th></th>
                    </tr>

                    <tr>
                        <th>상품사진</th>
                        <td>
                            <input type='file' className='form-control' style={{width:'250px'}}/>
                        </td>
                        <th></th>
                    </tr>
                    <tr>
                        <th>수량</th>
                        <td>
                            <input type='text' className='form-control' style={{width:'250px'}}/>
                        </td>
                        <th></th>
                    </tr>
                    <tr>
                        <th>단가</th>
                        <td>
                            <input type='text' className='form-control' style={{width:'250px'}}/>
                        </td>
                        <th></th>
                    </tr>

                    <tr>
                        <td colSpan='2'>
                            <img src='../logo512.png' style={{width:'150px',height:'150px',marginLeft:'200px'}}/>
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