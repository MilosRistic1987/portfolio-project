import { getPastLaunches } from "../services/spacex_service";
import Launch from './launch';

const Filter=()=>{
    const filter = document.createElement("section");
    let sortedYears;
    getPastLaunches().then(response=>{
        sortedYears =[...new Set(response.data.map(el => 
        el.launch_year ))] ;
        sortedYears.unshift('all')
        var dropSelect=document.createElement('select');
        filter.appendChild(dropSelect);
        var options=sortedYears.map((el)=>{
            return `<option value="${el}">${el}</option>`
        })
        dropSelect.innerHTML=options
        
        dropSelect.addEventListener('change', (e)=>{
            const div=document.querySelector('.launch-list')
            div.innerHTML=''
            let filteredData;
            if(e.target.value === "all"){
                filteredData = response.data
            }else{
                filteredData = response.data.filter(el=>el.launch_year === e.target.value)
            }
         
         filteredData.forEach(element => {
            div.appendChild(Launch(element));
          });
        })
        console.log(sortedYears, dropSelect)
    
    })
return filter
}

   
export default Filter