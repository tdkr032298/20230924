import React from 'react'
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { editItem } from '../../slice/itemSlice';

// onChange = {handleInputChange}

const ItemUserInput = () => {

  const { editedItem } = useAppSelector((state: RootState) => state.item);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    console.log({...editedItem})
    switch ( name )  {
        // case "itemClass": dispatch(editItem({...editedItem, itemClass: value}));
        // break;
        case "itemName": dispatch(editItem({...editedItem, itemName: value}));
        break;
        case "departmentCode": dispatch(editItem({...editedItem, departmentCode: value}));
        break;
        case "jinmeiName": dispatch(editItem({...editedItem, jinmeiName: value}));
        break;
        case "phone": dispatch(editItem({...editedItem, phone: value}));
        break;
        case "budgetNo": dispatch(editItem({...editedItem, budgetNo: value}));
        break;
        case "billNo": dispatch(editItem({...editedItem, billNo: value}));
        break;

        
        // case "investForHard_2": dispatch(editItem({...editedItem, {...investForHard, 2: value}}));
        // break;
        // case "investForHard_3": dispatch(editItem({...editedItem, {...investForHard, 3: value}}));
        // break;
        
    } 
    // dispatch(setInputValueTitle(e.target.value));s
    // console.log(e.target.value) 
    
}
//selectorで選ばれたの値をstateにセットする
const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    dispatch(editItem({...editedItem, itemClass: value}))

}


  return (
    <div className='font-bold'>
        <div className='mt-1'>
            <label className="label-text">
            ♦種別　　　 &emsp;
            {/* <input type="text" name = "itemClass" placeholder={"入力"} value = {editedItem.itemClass} onChange = {handleInputChange} className="input input-bordered input-xs  w-40" /> */}
                <select className="select select-bordered select-xs w-40 max-w-xs mx-1" placeholder={"選択"} value={editedItem.itemClass} onChange = {handleSelectChange}> 
                    { editedItem.itemClass === "新規登録" ? 
                    <option selected>新規登録</option> :
                    <>
                    <option selected ></option>
                    <option value={"継続（変更なし）"}>継続（変更なし）</option>
                    <option value={"内容変更"}>内容変更</option>
                    <option value={"金額変更"}>金額変更</option>
                    </>
                    }
                </select>
            </label>
        </div>
       <div className='mt-1'>
            <label className="label-text">
                ♦件名　　　　 &nbsp;
                <input type="text" name = "itemName" placeholder={"入力"} value = {editedItem.itemName} onChange = {handleInputChange} className="input input-bordered input-xs  w-40" />
                <span className="label-text-alt text-accent">＊</span>
            </label>
        </div>
        <div className='mt-1'>
            <label className="label-text">
                ♦部署コード　 &nbsp;
                <input type="text" name = "departmentCode" placeholder={"入力"} value = {editedItem.departmentCode} onChange = {handleInputChange} className="input input-bordered input-xs  w-40" />
                <span className="label-text-alt text-accent">＊</span>
            </label>
        </div>
        <div className='mt-1'>
            <label className="label-text">
                ♦担当者名　　 &nbsp;
                <input type="text" name = "jinmeiName" placeholder={"入力"} value = {editedItem.jinmeiName} onChange = {handleInputChange} className="input input-bordered input-xs  w-40" />
                <span className="label-text-alt text-accent">＊</span>
            </label>
        </div>
        <div className='mt-1'>
            <label className="label-text">
                ♦連絡先　　　 &nbsp;
                <input type="text" name = "phone" placeholder={"入力"} value = {editedItem.phone} onChange = {handleInputChange} className="input input-bordered input-xs  w-40" />
                <span className="label-text-alt text-accent">＊</span>
            </label>
        </div>
        <div className='mt-1'>
            <label className="label-text">
                ♦予算No.　　&emsp;
                <input type="text" name = "budgetNo" placeholder={"入力"} value = {editedItem.budgetNo} onChange = {handleInputChange} className="input input-bordered input-xs  w-40" />
            </label>
        </div>
        <div className='mt-1'>
            <label className="label-text">
                ♦決裁No.　　&emsp;
                <input type="text" name = "billNo" placeholder={"入力"} value = {editedItem.billNo} onChange = {handleInputChange} className="input input-bordered input-xs  w-40" />
            </label>
        </div>

    </div>
  )
}

export default ItemUserInput