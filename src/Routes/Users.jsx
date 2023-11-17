import React, { useState, useEffect, useRef } from 'react';
import Profile from '../components/Profile';
import Load from '../components/Load';

function Users() {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(null);
  const user = useRef('');

  function debounce(func, delay) {
    let timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func();
    }, delay);
  }

  function profiles(username) {
    console.log('Fetching user data for:', username);
    if (username) {
      setLoad(true);
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        })
        .finally(() => {
          setLoad(false);
        });
    } else {
      setUsers(null);
      setLoad(null);
    }
  }

  function Search (event) {
    event.preventDefault();
    const username = user.current.value;
    if (username !== '') {
      localStorage.setItem('searchInput', username);
      debounce(() => profiles(username), 300);
    } else {
      setUsers(null);
    }
  }

  console.log('Render Users component');
  return (
    <>
      <form onSubmit={Search} className="search">
        <input type="text" id="" placeholder="Search github username" ref={user} />
        <button type="submit">SEARCH</button>
      </form>
      {load ? <Load /> : users && <Profile users={users} />}
    </>
  );
}

export default Users;