import React from 'react'
import { useNavigate } from 'react-router-dom';

const ChangeBtn = () => {
    const navigate = useNavigate();

    const onClickEvent = () => {
    navigate("/ItemApproval")
  }
  return (
    <div>
        <button className='btn' onClick={onClickEvent}>入替</button>
    </div>
  )
}

export default ChangeBtn