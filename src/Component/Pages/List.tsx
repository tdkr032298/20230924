import React,{memo, VFC} from 'react'
import ListPage from '../Template/ListPage'
import Headbar from '../Molculs/Headbar'
import Sidebar from '../Molculs/Sidebar'

const List: VFC = memo(() => {
  return (
    <div className='h-screen'>
      <div className='h-1/10'>
        <Headbar/>
      </div>
      <div className='flex h-hull'>
        <Sidebar/>
        <ListPage />
      </div>
    </div>
  )
})

export default List