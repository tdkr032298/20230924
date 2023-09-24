import React,{memo, VFC} from 'react'
import ItemPage from '../Template/ItemPage'
import Headbar from '../Molculs/Headbar'
import Sidebar from '../Molculs/Sidebar'
import { Router } from 'react-router-dom'

const Item: VFC = memo(() => {
  return (
    <div className='h-screen'>
      <div className='h-1/10'>
        <Headbar/>
      </div>
      <div className='flex h-9/10'>
        <Sidebar/>
        <ItemPage />
      </div>
    </div>
  )
})

export default Item