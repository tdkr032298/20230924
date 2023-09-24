import React from 'react'
import FilterCancelBtn from '../../Atom/Btn/FilterCancelBtn'
import ExportBtn from '../../Atom/Btn/ExportBtn'


const ListTop = () => {
  return (
    <div className='flex p-4 space-x-4'>
        <FilterCancelBtn/>
        <ExportBtn/>
    </div>
  )
}

export default ListTop