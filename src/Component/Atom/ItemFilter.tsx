import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { editItem } from '../slice/itemSlice';

const ItemFilter = () => {
    const { editedItem  } = useAppSelector((state: RootState) => state.item);
    const dispatch = useAppDispatch();

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        dispatch(editItem({...editedItem, itemClass: value}))

    }

  return (
    <div className='mx-2'>
    <h3 className='my-5 ml-5 font-bold text-2xl'>
         {/* itemIdが０ならば、「新規登録」と表示 */}
         {/* {editedItem.itemId ? "内容参照" : "新規登録"} */}
       </h3>  

</div>
  )
}

export default ItemFilter