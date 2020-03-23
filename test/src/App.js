import React, {useEffect,useState} from 'react';
import './App.css';
import SelectWorkers from './components/selectWorker';
import AllWorkers from './components/allWorkers';
import Form from './components/form';
import {GetAllWorkers} from './web_services/workerApi'




function App() {
const[workers,setWorkers]=useState([]);
const [startIndex,setStartIndex]=useState(0);
const [endIndex,setEndIndex]=useState(workers.length-1);
const [selectedWorkersScope,setSelectedWorkersScope]=useState('all');
const [selectedPage,setSelectedPage]=useState(1)

useEffect(()=>{
  GetAllWorkers().then(res =>{
    if(selectedWorkersScope === 'all'){
    setStartIndex(0)
    setEndIndex(23)
  }else{
    setStartIndex((selectedPage-1)* selectedWorkersScope)
    setEndIndex(selectedPage * selectedWorkersScope)
  }
  
  setWorkers(res.data.data)
})
},[selectedWorkersScope,selectedPage])

  return (
    <div className='mainDiv'>
        <SelectWorkers selectedWorkersScope={selectedWorkersScope} setSelectedWorkersScope={setSelectedWorkersScope} setSelectedPage={setSelectedPage}/>
      <AllWorkers selectedWorkersScope={selectedWorkersScope} startIndex={startIndex} endIndex={endIndex} workers={workers} setSelectedPage={setSelectedPage}/>
     <Form/>
    </div>
   
  );
}

export default App;
