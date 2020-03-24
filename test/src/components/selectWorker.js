import React from 'react';

const SelectWorkers=({setSelectedWorkersScope, setSelectedPage,setSortSalary})=>{
    const options=['all',5,10,15,20]
    const optionsSaray=['Salary Up','Salary Down']
    return <div className='select'>
        <select  onChange={(e)=>{setSelectedWorkersScope(e.target.value); setSelectedPage(1)}}>
            {options.map(el=><option>{el}</option>)}
        </select>
        <select onChange={(e)=>{setSortSalary(e.target.value)}}>
            {optionsSaray.map(el=><option>{el}</option>)}
        </select>
    </div>
}

export default SelectWorkers