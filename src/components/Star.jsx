import React, { useState, useEffect } from "react";

const Stars = () => {
  const username = localStorage.getItem('searchInput');
  const [starRepos, setStarRepos] = useState([]);

  useEffect(() => {
    StarRepos();
  }, []);

  const StarRepos = () => {
    fetch(`https://api.github.com/users/${username}/starred`)
      .then((response) => response.json())
      .then((data) => {
        setStarRepos(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching starred repositories data:', error);
      });
  };

  return (
    <>
      <h2>Starred Repositories</h2>
      <div className="starred-repos-list">
        {starRepos.map((repo) => (
          <div key={repo.id} className="starred-repo">
            <p>
              <span>Repository Name:</span> {repo.name}
            </p>
            <p>
              <span>Owner:</span> {repo.owner.login}
            </p>
            <img
              src={repo.owner.avatar_url}
              alt=""
            />
            <p><span>Default branch :</span>{repo.default_branch}</p>
            <p><span>Fork Count :</span>{repo.forks_count}</p>
         <p><span>Watchers:</span>{repo.watchers}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Stars