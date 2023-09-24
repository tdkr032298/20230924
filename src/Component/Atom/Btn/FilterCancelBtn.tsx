import axios from 'axios';
import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setListItems } from '../../slice/itemSlice';


const FilterCancelBtn = () => {

  const dispatch = useDispatch();

  const fetchData = () => {
    axios
    .get("http://pc14661:8000/api/item/")
    .then((res) => {
        dispatch(setListItems(res.data)) 
  }).catch((err)=>{
    alert(err)
  })
  }

  return (
    <button 
      className='btn btn-sm btn-primary w-50' 
      onClick={fetchData}
      >
        絞込み解除
    </button>
  )
}

export default FilterCancelBtn