import React from 'react'
import { HomeIcon } from '../../../../HeloIcons'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setListItems } from '../../../slice/itemSlice';





const HomeBtn = () => {

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
    <div>
        <button 
          className='btn btn-sm btn-ghost w-36 text-info' 
          onClick={fetchData}
        >
            Home<HomeIcon/>
        </button>

    </div>
  )
}

export default HomeBtn