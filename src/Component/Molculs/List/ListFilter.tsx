import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store'


const ListFilter = () => {

  const { selected } = useAppSelector((state: RootState)=>state.item)

  const dispatch = useAppDispatch();
  
  return (
    <div className='flex w-full'>
        <div className='flex flex-row flex-nowrap w-1/4 m-auto'>
          <div>
            <select className="select select-bordered select-xs w-full max-w-xs">
                <option disabled selected>ステータス</option>
                <option>Tiny Apple</option>
                <option>Tiny Orange</option>
                <option>Tiny Tomato</option>
            </select>
         </div>
        </div>

        <div className='flex flex-row flex-nowrap w-1/4 m-auto'>
          <div>
            <select className="select select-bordered select-xs w-16 max-w-xs">
                <option disabled selected>部門</option>
                <option>Tiny Apple</option>
                <option>Tiny Orange</option>
                <option>Tiny Tomato</option>
            </select>
         </div>
          <div>
            <select className="select select-bordered select-xs w-16 max-w-xl">
                <option disabled selected>部</option>
                <option>Tiny Apple</option>
                <option>Tiny Orange</option>
                <option>Tiny Tomato</option>
            </select>
         </div>
          {/* <div>
            <select className="select select-bordered select-xs w-16 max-w-xs">
                <option disabled selected>室</option>
                <option>Tiny Apple</option>
                <option>Tiny Orange</option>
                <option>Tiny Tomato</option>
            </select>
         </div>
          <div>
            <select className="select select-bordered select-xs w-16 max-w-xs">
                <option disabled selected>組</option>
                <option>Tiny Apple</option>
                <option>Tiny Orange</option>
                <option>Tiny Tomato</option>
            </select>
         </div> */}
        </div>

        <div className='flex flex-row flex-nowrap w-1/4 m-auto'>
          <div>
            <select className="select select-bordered select-xs w-18 max-w-xs">
                <option disabled selected>年度</option>
                <option>24年度</option>
                <option>25年度</option>
                <option>26年度</option>
                <option>27年度</option>
                <option>28年度</option>
                <option>29年度</option>
            </select>
          </div>
         </div>

        <div className='flex flex-row flex-nowrap ml-auto m-auto'>
          <div>
            <select className="select select-bordered select-xs w-full max-w-xs">
                <option disabled selected>1次判定</option>
                <option>〇</option>
                <option>×</option>
                <option>前出し</option>
            </select>
         </div>
          <div>
            <select className="select select-bordered select-xs w-full max-w-xs">
                <option disabled selected>最終判定</option>
                <option>〇</option>
                <option>×</option>
                <option>前出し</option>
            </select>
         </div>
        </div>
    </div>
  )
}

export default ListFilter