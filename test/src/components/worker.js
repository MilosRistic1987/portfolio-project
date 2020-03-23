import React from 'react';

const Worker=({worker})=>{
    return <div className='workerCard'>
        <div className='textDiv'>
            <h2>{worker.employee_name}</h2>
            <label>Salary: {worker.employee_salary}</label>
            <label>Age: {worker.employee_age}</label>
        </div>
        <div className='imgDiv'></div>
    </div>
}

export default Worker
