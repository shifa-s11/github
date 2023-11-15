import React, { useState, useEffect } from "react";

const Stars = () => {
  const username = localStorage.getItem('searchInput');
  const [starRepos, setStarRepos] = useState([]);
  const[visible,SetVisible] = useState(5)
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
  const View = () => {
    SetVisible((prevVisible) => prevVisible + 5);
  };
  return (
    <>
      <div className="starred">
        {starRepos.length > 0 ? (
          starRepos.slice(0,visible).map((repo) => (
            <div key={repo.id} className="starred-repo">
              <img
                src={repo.owner.avatar_url }alt=""
              />
                            <p><span>Repo-Name:</span> {repo.name}</p>
                 <p><span>Owner:</span> {repo.owner.login}</p>
              <p><span>Default branch :</span>{repo.default_branch}</p>
              <p><span>Fork Count :</span>{repo.forks_count}</p>
              <p><span>Watchers:</span>{repo.watchers}</p>
            </div>
          ))
        ) : (
          <p>No starred repositories found.</p>
        )}
      </div>
      {starRepos.length >= visible && (
        <button onClick={View}>View More</button>
      )}
       
    </>
  );
};
export default Stars