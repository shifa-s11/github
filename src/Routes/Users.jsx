import React, { useState, useEffect, useRef } from 'react';
import Profile from '../components/Profile'
import Load from '../components/Load';

function Users() {
    const [users, setUsers] = useState([]);
    const [load,setload] = useState(null);
    const BaseUrl = "https://api.github.com/users";
    const user = useRef('')
  const debounceTimeout = useRef(null);
  
  // function debounce(func, delay) {
  //   clearTimeout(debounceTimeout.current);
  //   debounceTimeout.current = setTimeout(func, delay);
  // }
  function debounce(func, delay) {
    console.log('Debounce: Waiting for', delay, 'milliseconds before executing...');
    clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      console.log('Debounce: Executing the function!');
      func();
    }, delay);
  }
function profiles(username){
  console.log('Fetching user data for:', username);
  if(username){
    setload(true)
  fetch(`https://api.github.com/users/${username}`)
  .then((response) => response.json())
  .then((data) => {
    setUsers(data);
  })
  .catch((error) => {
    console.error('Error fetching user data:', error);
  }) .finally(() => {
    setload(false);
  }); }else {
    setUsers(null);
    setload(null)
  }
    ;}
    function Search(){
      const username = user.current.value;
      if (user.current.value !== '') {
        localStorage.setItem('searchInput', username);
        debounce(() => profiles(username), 300);
        // profiles(user.current.value);
      }
      else {
        setUsers(null);
      }
}

console.log('Render Users component');
    return (
      <>
       <div className="search">
    <input type="text" id="" placeholder="Search github username" ref={user} />
    <button onClick={Search}>SEARCH</button></div>
       {load?<Load/> :users&&< Profile users={users}/>}
      </>
    );}
  
export default Users