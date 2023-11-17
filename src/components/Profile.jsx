import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Profile = ({users}) =>{
  const userArray = Array.isArray(users) ? users : [users];
  console.log(users)
    return(
        <>
<div className="profile">
 { userArray.map((user, id) =>(
   <div>
      {user && user.login ? (
         <div className="card" key={id}>
        <>
 <img  className="image"src={user?.avatar_url} alt="" />
<h4 className="user">{user?.login}</h4>
<p className=""><span>Followers :</span> {user.followers}</p>
<p><span>Public repos : </span>{user.public_repos}</p>
<p><span>Name :</span>{users.name}</p>
<Link to= {`/github/${user?.login}/`}>
<span className="view">View more</span></Link></>
  </div>):(<p className="error" style={{marginTop:"2rem"}}>No User Found ....</p>)}</div>))}
  </div></>)}
  
export default Profile