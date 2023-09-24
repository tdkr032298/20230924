import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { ITEM,  } from '../../../Types';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import itemSlice, { fetchAsyncGetEditedItem, incrementMapCount, setListItems } from '../../slice/itemSlice';
import { RootState } from '../../app/store';
import { TrashIcon } from '../../../HeloIcons';

import {useNavigate} from 'react-router-dom';
// import setListItems from "../../slice/listTableSlice"

const ListTable = () => {

    const {items, amount} = useAppSelector((state: RootState)=>state.item)
    const {editedItem} = useAppSelector((state: RootState)=>state.item)
    
    // const {editedItem} = useAppSelector((state: RootState)=>state.item)
    
    const dispatch = useAppDispatch();

    // useEffect ( () => {
    //   axios
    //       .get("http://pc14661:8000/api/item/")
    //       .then((res) => {
    //           dispatch(setListItems(res.data)) 
    //     }).catch((err)=>{
    //       alert(err)
    //     })
    //   }, [] )
  

    // dispatch(allListItem())
  
    let count = 0;
    // useEffect(()=>{
    //   dispatch(setAmount(count))
    // },[])

    //★★★★0917追記★★★★//
    const navigate = useNavigate();
  
    return (
      <div className="overflow-x-auto bg-neutral max-h-[520px] max-w-[1300px]">
        <table className="table-xs w-full p-3 table-pin-rows table-pin-cols">
          <thead className='bg-neutral text-center w-full'>
            <tr>
              <th className='border-r'>IDNo</th>
              <th className='border-r'>状態</th> 
              <th className='border-r'>タイトル</th> 
              <th className='border-r'>担当者</th> 
              <th className='border-r'>部署</th> 
              <th className='border-r'>投資金額 
                <th className='border-r'>24</th>
                <th className='border-r'>25</th>
                <th className='border-r'>26</th>
                <th className='border-r'>27</th>
                <th className='border-r'>28</th>
                <th className='border-r'>29</th>
              </th> 
              <th className='border-r'>経費金額 
                <th className='border-r'>24</th>
                <th className='border-r'>25</th>
                <th className='border-r'>26</th>
                <th className='border-r'>27</th>
                <th className='border-r'>28</th>
                <th className='border-r'>29</th>
              </th> 
              <th className='border-r'>1次<br/>判定</th> 
              <th className='border-r'>最終<br/>判定</th> 
              <th className='border-r'>月割</th>
              <th className='border-r'>削除</th>
            </tr>
          </thead> 
          <tbody className='text-center'>
            { items.map((item)=>{
              // dispatch(incrementMapCount());
              return(
                <>
                  <tr>
                    <td  className='border-r bg-info'>{item.itemId}</td>
                    <td className='border-r bg-info'>{item.individualStatusName}</td>
                    {/* クリックしたら、itemの詳細をGETして、編集画面に移動する */}
                    <td className='border-r bg-info'>
                      <a 
                        // onClick={() => {
                        //   dispatch(fetchAsyncGetEditedItem(item.ITMTPId))
                        //   navigate("/item")
                        // }}
                        // className='bg-info link-primary'
                        >
                          {item.itemName}
                        </a>
                    </td>
                    <td  className='border-r bg-info'>{item.divisionName}</td>
                    <td  className='border-r bg-info'>{item.jinmeiName}</td>
                    <td className='border-r bg-info'>
                    <td className='border-r bg-info'>24</td>
                    <td className='border-r bg-info'>25</td>
                    <td className='border-r bg-info'>26</td>
                    <td className='border-r bg-info'>27</td>
                    <td className='border-r bg-info'>28</td>
                    <td className='border-r bg-info'>29</td>
                    </td> 
                    <td className='border-r bg-info'>
                      <td className='border-r bg-info'>24</td>
                      <td className='border-r bg-info'>25</td>
                      <td className='border-r bg-info'>26</td>
                      <td className='border-r bg-info'>27</td>
                      <td className='border-r bg-info'>28</td>
                      <td className='border-r bg-info'>29</td>
                    </td> 
                    <td className='border-r bg-info'>{item.judgement}</td> 
                    <td className='border-r bg-info'>{item.finalJudgement}</td> 
                    <td className='border-r bg-info'>{item.monthlyCost}</td> 
                    <td className='border-r bg-info'><TrashIcon/></td>
                  </tr>
              </>
          )
        })}
      </tbody>
        <tr>
          <th>合計</th>
          <th>{items.length +1}</th>
          <th>件</th>
        </tr>
        </table>
      </div>
    )
}

export default ListTable