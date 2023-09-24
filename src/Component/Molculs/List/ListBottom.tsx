import React from 'react'
import DeclineStatus from '../../Atom/Btn/ListBtn/DeclineStatus'
import JudgementApprovalStatus from '../../Atom/Btn/ListBtn/JudgementApprovalStatus'
import ListApprovalStatus from '../../Atom/Btn/ListBtn/ListApprovalStatus'
import RejudgementStatus from '../../Atom/Btn/ListBtn/RejudgementStatus'
import ListCancelStatus from '../../Atom/Btn/ListBtn/ListCancelStatus'
import JudgementCompleteStatus from '../../Atom/Btn/ListBtn/JudgementCompleteStatus'
import ConfirmStatus from '../../Atom/Btn/ListBtn/ConfirmStatus'
import ApprovalRequestStatus from '../../Atom/Btn/ListBtn/ApprovalRequestStatus'



const ListBottom = () => {
  return (
    <div className='flex  px-8 space-x-4'>
      <ApprovalRequestStatus/>
      <DeclineStatus/>
      <ListApprovalStatus/>
      <JudgementApprovalStatus/>
      <RejudgementStatus/>
      <ListCancelStatus/>
      <JudgementCompleteStatus/>
      <ConfirmStatus/>
    </div>
  )
}

export default ListBottom