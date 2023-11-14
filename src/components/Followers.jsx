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
    <h2>Followers</h2>
    <div className="followers-list">
      {followers.map((follower) => (
        <div key={follower.id} className="follower">
          <img src={follower.avatar_url} alt={`Avatar of ${follower.login}`} />
          <p>{follower.login}</p>
        </div>
      ))}
    </div>
  </>
);
};
export default Followers