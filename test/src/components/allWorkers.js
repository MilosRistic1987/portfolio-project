import React from 'react';
import Worker from './worker';


const AllWorkers=({workers,startIndex,endIndex,selectedWorkersScope, setSelectedPage,sortSalary})=>{
    let pageNmbr;
    let array=[];
    if(selectedWorkersScope === 'all'){
        pageNmbr=1
    }else{pageNmbr= Math.ceil(workers.length/selectedWorkersScope)}
    console.log(pageNmbr)
    for(var i = 1; i <= pageNmbr; i++){
        array.push(i)
    }
   if(sortSalary==='Salary Up'){
    workers.sort((a, b) => parseFloat(a.employee_salary) - parseFloat(b.employee_salary))
   }else{
    workers.sort((a, b) => parseFloat(b.employee_salary) - parseFloat(a.employee_salary))
   }

    return<div className='WorkerList'>
{workers.slice(startIndex,endIndex).map(el=><Worker key={el.id} worker={el}/>)}
<div>
{array.map(el=><button onClick={()=>setSelectedPage(el)}>{el}</button>)}
</div>
    </div>
     
}

export default AllWorkers