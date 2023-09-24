import React from 'react'
import {useNavigate} from 'react-router-dom';


const BackBtn = () => {

  const navigate = useNavigate();

    const onClickEvent = () => {
    navigate("/list")
  }

  return (
    <button className='btn btn-sm btn-primary w-50' onClick={onClickEvent} >
      戻る
    </button>
  )
}

export default BackBtn