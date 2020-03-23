import React from 'react';
import axios from 'axios';

const base_url='http://dummy.restapiexample.com/api/v1';

 export const GetAllWorkers=()=>{
  return  axios.get(`${base_url}/employees`)
}

export const PostNewWorker=(name,salary)=>{
  return axios.post(`${base_url}/create`,{employee_name:name,employee_salary:salary})
}