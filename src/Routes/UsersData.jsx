import React, { useState, useEffect } from 'react';
import Tabs from '../components/Tabs';
import Followers from '../components/Followers';
import Lang from '../components/Lang';
import Star from '../components/Star';
import Organ from '../components/Organ';
import Users from './Users';
import Load from '../components/Load';
import { Link } from 'react-router-dom';

const UsersData = () => {
  const username = localStorage.getItem('searchInput');
  const [load,setload] = useState(null);
  const [user, setUser] = useState(null);
  const [type, settype] = useState("followers");

  useEffect(() => {
    console.log(type)
    const username = localStorage.getItem('searchInput');
    if (username) {
      setload(true)
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          console.log(data)
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        }).finally(() => {
          setload(false);
        }); }else {
          setload(null)
        };
  }, []);
  const Userurl = `https://api.github.com/users/${username}`
  

  
  return (
    <>
      {user ? (
        <div className="CardHolder">
        <div className='CardProfile'>
        <div className='avatar'>
      <img className='avatarimg'  src={user.avatar_url} alt="avatar" />
        </div>
        <div className="info">
<h1 className='user1'>{user.login}</h1>
<p><span>Followers : </span> {user.followers}</p>
<p><span>Following : </span>{user.following}</p>
<p><span>Github-Bio : </span>{user.bio}</p>
<p><span>Public-repo : </span>{user.public_repos}</p>
<p><span>Public-gists :</span>{user.public_gists}</p>
{/* <p>
  <span>Twitter-handle : </span>
  <a  className = "twitter" href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noopener noreferrer">
  https://twitter.com/${user.twitter_username}
  </a>
</p> */}
<p><span>Location : </span>{user.location}</p>
<p><span>Created at : </span>{new Date(user.created_at).toLocaleDateString()}</p>
<p><span>Updated at : </span>{new Date(user.updated_at).toLocaleDateString()}</p>
<div className='infobutton'>
<button><a href={`https://twitter.com/${user.twitter_username}`} target='_blank' rel='noopener noreferrer'>Twitter</a> </button>
<button><a href={user.html_url} target='_blank' rel='noopener noreferrer'>Visit</a></button></div>

        </div>
        </div>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
     
      {load?<Load/>:<Tabs type={type} setType = {settype} />}
     {/* <Tabs type={type} setType = {settype} /> */}
     {type === "followers" && (
      <div>
      <Followers/>
      </div>
     )}
         {type === "lang" && (
      <div>
        <Lang/>
      </div>
     )}
          {type === "starred-repos" && (
      <div>
        <Star/>
      </div>
     )}
        {type === "organ" && (
      <div>
        <Organ />
      </div>
     )}
     
    </>
  );
};

export default UsersData;