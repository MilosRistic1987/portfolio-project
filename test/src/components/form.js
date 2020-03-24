import React, { useState } from 'react';
import {PostNewWorker} from '../web_services/workerApi';


const Form=()=>{
    const [name,setName]=useState('');
    const [salary,setSalary]=useState(0);

    return <div>
        <form type='submit' onSubmit={(e)=>{e.preventDefault(); PostNewWorker(name,salary).then(res=>{console.log(res)})}}>
        <input  onChange={(e)=>setName(e.target.value)} type='text' placeholder='Name&Surname'></input>
        <input  onChange={(e)=>setSalary(e.target.value)}type='number'  placeholder='Sallary'></input>
        <button className='formBtn' type='submit'>Submit</button>
        </form>
       
    </div>
}

export default Form