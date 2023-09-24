import React from 'react'
import BackBtn from '../../Atom/Btn/ItemBtn/BackBtn'
import ItemFilter from '../../Atom/ItemFilter'
import { useAppSelector } from '../../app/hooks'

const ItemTop = () => {

  const { editedItem } = useAppSelector((state) => state.item)

  return (
    <div className='flex'>
      <BackBtn/>
      {/* ItemFilter自体を無くしたい */}
      <div className='mx-2'>
         <h3 className='my-5 ml-5 font-bold text-2xl'>
              {/* itemIdが０ならば、「新規登録」と表示 */}
              {editedItem.itemId ? "内容参照" : "新規登録"}
            </h3>  

    </div>
      {/* <ItemFilter/> */}
    </div>
  )
}

export default ItemTop