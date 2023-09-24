import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { setBudgetStatus } from '../../../slice/itemSlice';

const NewItemBtn = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickEvent = () => {
    navigate("/item")
    dispatch(setBudgetStatus())
  }

  return (
    <div>
        <button className='btn btn-sm btn-primary w-36' onClick={onClickEvent}>
            新規作成
        </button>
    </div>
  )
}

export default NewItemBtn