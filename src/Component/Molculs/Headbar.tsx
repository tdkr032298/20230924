import React from 'react'
import Icon from '../Atom/Icon'
import Welcome from '../Atom/Welcome'
import HomeBtn from '../Atom/Btn/HeadBarBtn/HomeBtn'
import ReportBtn from '../Atom/Btn/HeadBarBtn/ReportBtn'
import ContactBtn from '../Atom/Btn/HeadBarBtn/ContactBtn'
import LoggOutBtn from '../Atom/Btn/HeadBarBtn/LoggOutBtn'


const Headbar = () => {
  return (
    <div className='flex bg-success inset-x-0 top-0 h-12 '>
        <div className='flex flex-row flex-nowrap w-1/2 m-auto'>
            <br/>
            <Icon/>
            <br/>
            <HomeBtn/>
            <br/>
            <ReportBtn/>
        </div>
        <div className='w-50'>
            <ul>           </ul>
        </div>
        <div className='flex flex-row flex-nowrap ml-auto m-auto'>
            <br/>
            <ContactBtn/>
            <br/>
            <LoggOutBtn/>
            <br/>
            <Welcome/>
            <br/>
        </div>
    </div>
  )
}

export default Headbar