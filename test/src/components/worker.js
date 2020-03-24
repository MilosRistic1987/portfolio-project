import React from 'react';

const Worker=({worker})=>{
    return <div className='workerCard'>
        <div className='firstPart'>
            <div className='textDiv'>
            <h2>{worker.employee_name}</h2>
            <label>Salary: <span>{worker.employee_salary}</span> rsd</label>
            <label>Age: <span>{worker.employee_age}</span> years</label>
            </div>
            <div className='logoDiv'>
                <img src='../logo.png'></img>
                <div className='overlay'></div>
            </div>
        </div>
        
        <div className='imgDiv'>

        </div>
    </div>
}

export default Worker
