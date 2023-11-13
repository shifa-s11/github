import React, { useRef } from "react";


const Profile = ({users}) =>{
  const userArray = Array.isArray(users) ? users : [users];
  console.log(users)
    return(
        <>
<div className="profile">
 { userArray.map((user, id) =>(
  <div className="card" key={id}>
 <img  className="image"src={user?.avatar_url} alt="" />
<h4 className="user">{user?.login}</h4>
<p className="followers"><span>Followers :</span> {user.followers}</p>
<p><span>Public repos : </span>{user.public_repos}</p>
<p><span>Twitter handle :</span>{users.twitter_username}</p>
<span className="view">View more</span>
  </div>))}
  </div></>)}
  
export default Profile