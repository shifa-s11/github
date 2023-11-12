import React, { useState, useEffect, useRef } from 'react';
import Profile from './Profile'

function Users() {
    const [users, setUsers] = useState([]);
    const BaseUrl = "https://api.github.com/users";
    const user = useRef('')
  
function profiles(username){
  if(username){
  fetch(`https://api.github.com/users/${username}`)
  .then((response) => response.json())
  .then((data) => {
    setUsers(data);
  })
  .catch((error) => {
    console.error('Error fetching user data:', error);
  })} else {
    setUsers(null);
  }
    ;}
    function Search(){
      if (user.current.value !== '') {
        profiles(user.current.value);
      }
      else {
        setUsers(null);
      }
}

 
    return (
      <>
       <div className="search">
    <input type="text" id="" placeholder="Search github username" ref={user} />
    <button onClick={Search}>SEARCH</button></div>
       { users&&< Profile users={users}/>}
      </>
    );}

  


  
export default Users