import React, { useState, useEffect } from "react";
const Followers = () => {
    const username = localStorage.getItem('searchInput');
const [followers, setFollowers] = useState([]);

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

return (
  <>
    <div className="followers">
    {followers.length > 0 ? (
          followers.map((follower) => (
            <div key={follower.id} className="follower">
              <img src={follower.avatar_url} alt="" />
              <p>{follower.login}</p>
            </div>
          ))
        ) : (
          <p>No followers found.</p>
        )}
    </div>
  </>
);
};
export default Followers