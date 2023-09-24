import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks';

const ApprovalRequestStatus = () => {

  // const { items } = useAppSelector((state) => state.item)
  // const dispatch = useAppDispatch();
  // const clickedButton = () => {
  //   //全アイテムのステータスを更新する　確かめる
  //   items.map((item) => {
  //     item.statusCode === "1535"  //全体ステータス（15）、個別ステータス（35）
  //     return dispatch(editItem({...item, statusCode: item.statusCode}));
  //   })
  // }

  //onClick={clickedButton}

  return (
    <button className='btn btn-sm btn-secondary w-50'  >
        承認依頼
    </button>
  )
}

export default ApprovalRequestStatus

