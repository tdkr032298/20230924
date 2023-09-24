import React from 'react'
import ItemTop from '../Molculs/Item/ItemTop'
import ItemUserInput from '../Molculs/Item/ItemUserInput'
import ItemTable from '../Molculs/Item/ItemTable'
import ItemSelector from '../Molculs/Item/ItemSelector'
import ItemCostInput from '../Molculs/Item/ItemCostInput'
import ItemFile from '../Molculs/Item/ItemFile'
import ItemExtraFile from '../Molculs/Item/ItemExtraFile'
import ItemApprovalRoute from '../Molculs/Item/ItemApprovalRoute'
import ItemBtns from '../Molculs/Item/ItemBtns'
import ItemJudgement from '../Molculs/Item/ItemJudgement'
import { Route, Routes } from 'react-router-dom'
import ChangeBtn from '../Atom/Btn/ItemBtn/ChangeBtn'
import DropAddFiles from '../Molculs/Item/DropAddFiles'

const ItemPage = () => {
  return (
    <div className='w-full p-4 space-x-4'>
      <div className='h-1/7'>
        <ItemTop />
      </div>
      <div className='flex flex-row h-4/7'>
        <div className='w-1/3 p-1'>
          <ItemUserInput/>
          <ItemTable/>
        </div>
        <div className='w-1/3 p-1'>
          <ItemSelector/>         
          <br/>
          <ItemCostInput/>
        </div>
        <div className='w-1/3 p-1'>
          <DropAddFiles />
          {/* <ItemFile/> */}
          <ItemExtraFile/>
        </div>
      </div>
        
      <div className='flex flex-row h-2/7'>
        <div className='w-1/2'>
        {/* <Routes>
          <Route path="/ItemApproval"> */}
            <ItemApprovalRoute/>
          {/* </Route>
          <Route path="/ItemJudgement"> */}
            <ItemJudgement/>
          {/* </Route>
        </Routes> */}
        </div>
        <div>
          <div className='w-1/2'>
            <ItemBtns/>
          </div>
          <ChangeBtn/>
        </div>
      </div>
    </div>
  )
}

export default ItemPage