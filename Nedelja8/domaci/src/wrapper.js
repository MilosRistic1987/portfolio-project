import React, { useState } from 'react'
import './App.css';
import Form from './components/form';
import ListUsers from './components/listUsers';




const Wrapper=()=>{
const[list,newList]=useState([]);
const[allUsers,setList]=useState([]);


    return (
      <div className='mainDiv'>
        <Form newList={newList} list={list} allUsers={allUsers} setList={setList}></Form>
        <ListUsers users={list}></ListUsers>
      </div>
    )
}

export default Wrapper