import React from 'react'
import YearChoise from '../Atom/YearChoise'
import NewItemBtn from '../Atom/Btn/SideBarBtn/NewItemBtn'
import ListApprovalRequestBtn from '../Atom/Btn/SideBarBtn/ListApprovalRequestBtn'
import ItemApplication from '../Atom/Btn/SideBarBtn/ItemApplication'
import ItemApprovalBtn from '../Atom/Btn/SideBarBtn/ItemApprovalBtn'
import ListJudgementBtn from '../Atom/Btn/SideBarBtn/ListJudgementBtn'
import ListJudgementApprovalBtn from '../Atom/Btn/SideBarBtn/ListJudgementApprovalBtn'
import ListFinalJudgrmentBtn from '../Atom/Btn/SideBarBtn/ListFinalJudgrmentBtn'
import ListFinalJudgementConfirmBtn from '../Atom/Btn/SideBarBtn/ListFinalJudgementConfirmBtn'
import MonthlyCostApplication from '../Atom/Btn/SideBarBtn/MonthlyCostApplicationBtn'
import MonthlyCostApplicationBtn from '../Atom/Btn/SideBarBtn/MonthlyCostApplicationBtn'
import MonthlyCostApprovalBtn from '../Atom/Btn/SideBarBtn/MonthlyCostApprovalBtn'
import SistemAdminBtn from '../Atom/Btn/SideBarBtn/SistemAdminBtn'



const Sidebar = () => {
    
  return (
    <div className='w-1/7 bg-success p-2'>
        
        <YearChoise/>
        <br/>
        <br/>
        <NewItemBtn/>
        <br/>
        <ul className='font-bold text-info'>案件修正</ul>
        <ItemApplication/>
        <br/>
        <ItemApprovalBtn/>
        <br/>
        <ListApprovalRequestBtn/>
        <br/>
        <br/>
        <ul className='font-bold text-info'>判定</ul>
        <ListJudgementBtn/>
        <br/>
        <ListJudgementApprovalBtn/>
        <br/>
        <ListFinalJudgrmentBtn/>
        <br/>
        <ListFinalJudgementConfirmBtn/>
        <br/>
        <br/>
        <ul className='font-bold text-info'>月割り登録・修正</ul>
        <MonthlyCostApplicationBtn/>
        <br/>
        <MonthlyCostApprovalBtn/>
        <br/>
        <br/>
        <SistemAdminBtn/>
        <br/>
        <br/>
    </div>
  )
}

export default Sidebar