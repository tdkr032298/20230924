import React,{memo, VFC} from 'react'
import {Routes, Route} from 'react-router-dom';



import Item from '../Pages/Item';
import List from '../Pages/List';
import Login from '../Pages/Login';

export const Router: VFC = memo(()=>{
    return(
        <Routes>
            <Route path='/item'  element={<Item />} />
            <Route path='/list'  element={<List />} />
            <Route path='/'  element={<Login />} />
        </Routes>
    )
})