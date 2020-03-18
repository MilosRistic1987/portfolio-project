import React, {useState} from 'react'

const Search=(props)=>{
    let{newList, list, allUsers} = props
  
    
    
    
 
    const searchInputNameChange = (event) => {
        event.preventDefault();
        let copyList = [...allUsers]
        console.log(event.target.value)
        console.log(copyList)
        
        let filteredList = copyList.filter(el=>el.imePrezime.includes(event.target.value))
        console.log(filteredList)
        
        newList(filteredList)
      }   

    return(<div className='search'>
        <label>Search</label>
        <input type='text' onChange={searchInputNameChange} placeholder='Search'></input>
    </div>)
}

export default Search