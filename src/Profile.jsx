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
<p className="user">{user?.login}</p>
<p className="followers"><span>Followers :</span> {user.followers}</p>
<p><span>Public repos : </span>{user.public_repos}</p>
<span>View more</span>
  </div>))}
  </div></>)}
  
export default Profile