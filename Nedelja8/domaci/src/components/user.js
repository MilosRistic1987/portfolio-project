import React from 'react'

const User=({user})=>{
    return( 
       
            <div className='listCapsula'>
                <div className='shape'>
                    <h6 className='handWrite'>{user.imePrezime || ''}</h6>
                </div>
                <div className='shape'>
                    <h6 className='phoneNumber'>{user.brojTelefona || ''}</h6>
                    </div>
                <div className='polygon'>
                </div>
            </div>)
        
    }
    


export default User