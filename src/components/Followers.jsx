import React, { useState, useEffect } from "react";
const Followers = () => {
    const username = localStorage.getItem('searchInput');
const [followers, setFollowers] = useState([]);
const[visible,SetVisible] = useState(5)
useEffect(() => {
  Followers();
}, []);

const Followers = () => {
  fetch(`https://api.github.com/users/${username}/followers`)
    .then((response) => response.json())
    .then((data) => {
      setFollowers(data);
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
    <div className="followers">
    {followers.length > 0 ? (
          followers.slice(0,visible).map((follower) => (
            <div key={follower.id} className="follower">
              <img src={follower.avatar_url} alt="" />
              <div className="followerp">
              <p>{follower.login}</p></div>
            </div>
          ))
        ) : (
          <p>No followers found.</p>
        )}
    </div>
    {followers.length >= visible && (
        <button onClick={View}>View More</button>
      )}
       
      
  </>
);
};
export default Followers