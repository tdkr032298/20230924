import React from 'react'

import ExpensionYear from '../feature/ExpensionYear'
import ListTop from '../Molculs/List/ListTop'
import ListFilter from '../Molculs/List/ListFilter'
import ListTable from '../Molculs/List/ListTable'
import ListBottom from '../Molculs/List/ListBottom'


const ListPage = () => {
  return (
    <div className='w-full'>
        <ListTop/>
        <ListFilter/>
        <div className='p-3'>
        <ListTable/>
        </div>
        <ListBottom/>
    </div>
  )
}

export default ListPage