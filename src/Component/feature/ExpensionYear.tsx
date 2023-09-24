import React, { useState, useEffect } from 'react'
import axios from "axios"



// const [resData, setResData] = useState()

const ExpensionYear = () => {

  const [listYear, setListYear] = useState<string[]>([]);

  // useEffect ( () => {
  //   axios.get("http://pc14661:8000/test2/").then((res) => {
  //     setListYear(res.data.fiscalYear)
  //     console.log(res.data)
  //     console.log(listYear)
  //   }).catch((err)=>{
  //     //cssのalertを使う
  //     alert(err)
  //   // <div className="alert alert-error">
  //   //   <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  //   //   <span>Error! {err}</span>
  //   // </div>
  //   })
  // }, [])



  return (
      <div className='flex p-0'>
      {listYear.map((year, index) => (
        <th className='mx-1 bg-neutral border-r' key={index}>{year}</th>
        ))}
      </div>
  )
}

export default ExpensionYear