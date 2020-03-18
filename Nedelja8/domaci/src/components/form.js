import React, {useState} from 'react'
import Search from './search';


const Form=({list, newList, allUsers, setList})=>{
    const[inputName, setName]=useState('')
    const[inputTel, setTel]=useState('')
   
    // const handleInputChange = (event) => {
    //     event.persist();
    //     setInput(inputs => ({...inputs, [event.target.name]: event.target.value}));
    //   }
    const handleInputNameChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
      }
      const handleInputTelChange = (event) => {
        event.preventDefault();
        setTel(event.target.value);
      }
      
      const handleSubmit = (e)=>{
        e.preventDefault();
        if(allUsers.find(el=>el.imePrezime === inputName)){
          
          if (window.confirm(`Da li zelite da zamenite broj telefona za korisnika:${inputName} ?`)) {
            const copyUsers = [...allUsers]
            copyUsers.map(el=> {return el.imePrezime === inputName? el.brojTelefona = inputTel : el.brojTelefona})
            setList(copyUsers)
            newList(copyUsers)
            e.target.reset();
        } else {
          return
        }

        }else{
          setList([...allUsers, {imePrezime:inputName, brojTelefona:inputTel}])
          newList([...list, {imePrezime:inputName, brojTelefona:inputTel}])}
          e.target.reset();
        }
        
      
     
    
    return (
  <div>
 <form type='submit' onSubmit={handleSubmit}>
        <label>Name&Surname</label>
        <small>Format: Name Surname</small>
        <input type='text' name="imePrezime"required  onChange={handleInputNameChange}></input>
        <label>Telephone</label>
        <small>Format: +xxx-xxxxxxxxx</small>
        <input type="tel" id="phone" name="brojTelefona"
       pattern="[+]{1}[0-9]{3}-[0-9]{9}"
       required onChange={handleInputTelChange}></input>
       <button type='submit'>submit</button>
    </form>
      <Search newList={newList} list={list} allUsers={allUsers}></Search>
      </div>
    )
}

export default Form

