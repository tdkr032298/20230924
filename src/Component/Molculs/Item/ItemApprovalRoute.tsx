import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store'
import { editItem } from '../../slice/itemSlice'

const ItemApprovalRoute = () => {

  // // const { approver, editedItem } = useAppSelector((state: RootState) => state.item)
  // const dispatch = useAppDispatch()

  // // const approver1Name = approver.approver1.name
  // // const approver2Name = approver.approver2.name
  // // const approver3Name = approver.approver3.name

  // const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const { value } = e.target;
  //   dispatch(editItem({ ...editedItem, approvalRouteComment: value }));
  // };

  return (
  //   <div>
  //        <footer className='footer flex justify-between items my-2'>
  //         <div className='border border-black rounded-lg '>
  //           <p>♦承認ルート設定</p>
  //           <div className='flex justify-center p-1'>
  //           <select className="select select-bordered select-xs w-1/4 max-w-xs mx-1">
  //             <option>{approver1Name}</option>
  //           </select>
  //           <select className="select select-bordered select-xs w-1/4 max-w-xs mx-1">
  //             <option>{approver2Name}</option>
  //           </select>
  //           <select className="select select-bordered select-xs w-1/4 max-w-xs mx-1">
  //             <option>{approver3Name}</option>
  //           </select>
  //               <textarea className="textarea textarea-bordered" value={editedItem.approvalRouteComment} onChange={handleInputChange} placeholder="備考"></textarea>
  //           </div>
  //         </div>
  //       </footer>

  //   </div>
  <div>ItemApprovalRoute</div>
  )

}

export default ItemApprovalRoute