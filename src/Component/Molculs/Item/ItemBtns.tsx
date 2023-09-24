import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchAsyncCreateItem, fetchAsyncGetEditedItem, fetchAsyncUpdateItem,  editItem, initialState } from '../../slice/itemSlice'
import { RootState } from '../../app/store'


const ItemBtns = () => {

    //dispatchを定義
    const dispatch = useAppDispatch();

      //stateを取り込み
      const { editedItem  } = useAppSelector((state: RootState) => state.item);
      const { items } = useAppSelector((state: RootState) => state.item)

   // 関数を定義
  //押せる押せない 必須項目（テキストの長さが０だったらボタン押せない）
  const isDisableRequired = 
    editedItem.itemName.length === 0 || 
    editedItem.departmentCode.length === 0 ||
    editedItem.jinmeiName.length === 0 ||
    editedItem.phone.length === 0 
    // editedItem.lossCost.length === 0 ||
    // editedItem.recoveryMonths.length === 0 ||


  //-----引き戻しボタン-----//
  const pullBack = () => {
    dispatch(fetchAsyncUpdateItem({ ...editedItem, individualStatusCode: "10" }));
  }
  const isDisableBack = () => {
    if(editedItem.individualStatusCode !== "1015" || "1020" || "1025") {
       return true
      //1015...個別計画登録中、G承認中
      //1020...個別計画登録中、室長承認中
      //1025...個別計画登録中、部長承認中
    }
    
  }


  //-----途中保存ボタン-----//
  const temporarySave = () => {
    if (editedItem.itemId === 0) {
      dispatch(fetchAsyncCreateItem({ ...editedItem, individualStatusCode: "10" }))
    }
    else {
      dispatch(fetchAsyncUpdateItem({ ...editedItem, individualStatusCode: "10" }));      
    }
  }
  //押下制御は登録ボタンと共通



  //-----登録ボタン-----//
  const save = () => {
    if (editedItem.itemId === 0) {
      dispatch(fetchAsyncCreateItem(editedItem))
    }
    else {
      dispatch(fetchAsyncUpdateItem({ ...editedItem, individualStatusCode: "15" }));     
    
    }
  };
  const isDisableSave = ()=> {
    if(editedItem.individualStatusCode !== "1010" ) {
      return true
     //1010...個別計画登録中、編集中

   }
  }


  //-----却下ボタン-----//
  const decline = () => {
      dispatch(fetchAsyncUpdateItem({ ...editedItem, individualStatusCode: "10" }));     

  };
   // 押下制御は引き戻しボタンと共通（isDisableBack）


  //-----承認ボタン-----//
  const approve = () => {

    if (editedItem.individualStatusCode === "15") {
      dispatch(editItem({...editedItem, individualStatusCode: "20"}))
      dispatch(fetchAsyncUpdateItem({ ...editedItem, individualStatusCode: "20" }));
    }
    else if (editedItem.individualStatusCode === "20") {
      dispatch(editItem({...editedItem, individualStatusCode: "25"}))
      dispatch(fetchAsyncUpdateItem({ ...editedItem, individualStatusCode: "25" }));
    }
    else if (editedItem.individualStatusCode === "25" ) {
      dispatch(editItem({...editedItem, individualStatusCode: "30"}))
      dispatch(fetchAsyncUpdateItem({ ...editedItem, individualStatusCode: "30" }));
    }
    };

    const isDisableApprove = () => {
      if(editedItem.individualStatusCode !== "1015" || "1020" || "1025") {
         return true
        //1015...個別計画登録中、G承認中
        //1020...個別計画登録中、室長承認中
        //1025...個別計画登録中、部長承認中
      }
    };
  
  //-----承認解除ボタン-----//
  const approvalCancel = () => {
    dispatch(fetchAsyncUpdateItem({ ...editedItem, individualStatusCode: "10" }));
  }

  return (
    <div className='flex p-1'>
        <button className='btn btn-primary' onClick={pullBack} disabled={isDisableBack()}>引き戻し</button>
        <button className='btn btn-primary' onClick={temporarySave} disabled={isDisableSave()}>途中保存</button>
        <button className='btn btn-primary' onClick={save} disabled={isDisableRequired && isDisableSave()}>　登録　</button>
        <button className='btn btn-primary' onClick={decline} disabled = {isDisableBack()}>　却下　</button>
        <button className='btn btn-primary' onClick={approve} disabled = {isDisableApprove()}>　承認　</button>
        <button className='btn btn-primary' onClick={approvalCancel} disabled = {isDisableApprove()}>承認解除</button>
    </div>
  )

}

export default ItemBtns