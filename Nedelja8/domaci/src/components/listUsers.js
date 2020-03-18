import React from 'react'
import User from './user';

const ListUsers = (props)=>{
    let {users}=props;

    return (<div className="launch-list">
        {users.map(user=><User user={user} />)}
    </div>)
}

export default ListUsers;