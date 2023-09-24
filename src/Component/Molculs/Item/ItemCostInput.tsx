import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { editItem } from '../../slice/itemSlice';

const ItemCostInput = () => {
  
  const { editedItem } = useAppSelector((state: RootState) => state.item);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // console.log({...editedItem})
    switch ( name )  {
  case "lossCost": dispatch(editItem({...editedItem, lossCost: value}));
  break;
  case "recoveryMonths": dispatch(editItem({...editedItem, recoveryMonths: value}));
  break;
    }
  }
  
  return (
    <div className='font-bold mx-3'>
      <div className='mt-1'>
        <label className="label-text flex whitespace-nowrap ">
          <span>♦年間効果　　   &nbsp;</span>
          <input type="text" name = "lossCost" placeholder={"入力"} value = {editedItem.lossCost} onChange = {handleInputChange} className="input input-bordered input-xs  w-40" />
          （百万円）
        </label>
      </div>      
      <div className='mt-1'>
        <label className="label-text flex whitespace-nowrap">
          <span>♦投資回収年月   &nbsp;</span>
          <input type="text" name = "recoveryMonths" placeholder={"入力"} value = {editedItem.recoveryMonths} onChange = {handleInputChange} className="input input-bordered input-xs  w-40" />
              （カ月）
        </label>
      </div>      
      </div>
  )
}

export default ItemCostInput