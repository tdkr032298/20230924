import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { ITEM,} from '../../../../Types';
// import { setListItems } from '../../slice/itemSliceSlice';

const ListApprovalRequestBtn = () => {

  const dispatch = useDispatch();

  const fetchData = () => {
      axios
      .get<{items:ITEM[]}>("http://pc14661:8000/test3/")
      .then((res) => {
          // res.data.map((items)=>items.title)
          // const itemsData = res.data.items;
          // const filteredItems = itemsData.filter((item) => item.ITMTPId === 1 && item.itemStatus === "1010" );
          // dispatch(setListItems(filteredItems))
          // console.log(itemsData)
      // console.log(listItems)
    }).catch((err)=>{
      alert(err)
    })}

  // const fetchTableData = createAsyncThunk(
  //     "texttext/getText",
  //     async () => {
  //         const res = await axios.get<{items: READ_ITEM[]}>(
  //           "http://pc14661:8000/test3/",
  //             {
  //                 // headers: {
  //                 //     // Authorization: `JWT ${localStorage.localJWT}`,
  //                 // },
  //                 params: {
  //                   ITMTPId:1
  //                     //指定されたIdのものを取得
  //                 },
  //             },
  //         )  -
  //         console.log(res.data)
  //         return setListItems(res.data.items);   //returnで渡した値はpaylodeとして受け取ることができる
  //           })   

  return (
    <div>
    <button 
      className='btn btn-sm btn-outline w-36 my-0 text-info'
      onClick={fetchData}
    >
        リスト承認待ち
    </button>
    </div>
  )
}

export default ListApprovalRequestBtn