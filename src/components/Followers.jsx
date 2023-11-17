import React, { useState, useEffect } from "react";
const Followers = () => {
    const username = localStorage.getItem('searchInput');
const [followers, setFollowers] = useState([]);
const[visible,SetVisible] = useState(5);
const[Load,setLoad] = useState(true)
useEffect(() => {
  Followers();
}, []);

const Followers = () => {
  fetch(`https://api.github.com/users/${username}/followers`)
    .then((response) => response.json())
    .then((data) => {
      setFollowers(data);
      setLoad(false);
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching followers data:', error);
    });
};
const View = () => {
  SetVisible((prevVisible) => prevVisible + 5);
};


return (
  <>
 { Load?(<p></p>):
 (followers.length===0?(<p className="error">No Followers Found</p>):(
    <div className="followers">
         { followers.slice(0,visible).map((follower) => (
            <div key={follower.id} className="follower">
              <img src={follower.avatar_url} alt="" />
              <div className="followerp">
              <p>{follower.login}</p></div>
            </div>
          ))}
        </div>)
        )}
      {!Load && followers.length > visible && (
        <button className="ViewMore" onClick={View}>
          View More
        </button>
      )}
      {!Load && visible >= followers.length && followers.length > 0 && (
        <p className="error" >
          No More Followers Found
          </p>)}
  </>)
};
export default Followers