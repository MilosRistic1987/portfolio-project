import React from 'react';

const SelectWorkers=({setSelectedWorkersScope, setSelectedPage})=>{
    const options=['all',5,10,15,20]
    return <div className='select'>
        <select  onChange={(e)=>{setSelectedWorkersScope(e.target.value); setSelectedPage(1)}}>
            {options.map(el=><option>{el}</option>)}
        </select>
    </div>
}

export default SelectWorkers