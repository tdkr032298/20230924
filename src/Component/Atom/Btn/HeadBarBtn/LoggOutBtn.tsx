import React from 'react'
import { UserIcon } from '../../../../HeloIcons'
import {useNavigate} from 'react-router-dom';



const LoggOutBtn = () => {

  const navigate = useNavigate();

  const onClickEvent = () => {
    navigate("/")
  }

  return (
    <button className='btn btn-sm btn-primary w-50' onClick={onClickEvent}>
        ログアウト<UserIcon/>
    </button>
  )
}

export default LoggOutBtn