import React, { useState, useEffect } from "react";


const Stars = () => {
  const username = localStorage.getItem('searchInput');
  const [starRepos, setStarRepos] = useState([]);
  const [visible, setVisible] = useState(5);
  const [Load, setLoad] = useState(true);

  useEffect(() => {
    StarRepos();
  }, []);

  const StarRepos = () => {
    fetch(`https://api.github.com/users/${username}/starred`)
      .then((response) => response.json())
      .then((data) => {
        setStarRepos(data);
        setLoad(false);
        console.log(data);
      })
      .catch((error) => {
        setLoad(false);
        console.error('Error fetching starred repositories data:', error);
      });
  };

  const View = () => {
    setVisible((prevVisible) => prevVisible + 5);
  };

  return (
    <>
      {Load ? (
        <p className="error">Loading...</p>
      ) : starRepos.length === 0 ? (
        <p className="error">No starred repositories found.</p>
      ) : (
        <div className="starred">
          {starRepos.slice(0, visible).map((repo) => (
           <div key={repo.id} className="starred-repo">
         <img src={repo.owner.avatar_url }alt="" />      
         <p><span>Repo-Name:</span> {repo.name}</p>
         <p><span>Owner:</span> {repo.owner.login}</p>
         <p><span>Default branch :</span>{repo.default_branch}</p>
          <p><span>Fork Count :</span>{repo.forks_count}</p>
          <p><span>Watchers:</span>{repo.watchers}</p>
                 </div>
          ))}
        </div>
      )}
      {!Load && starRepos.length > visible && (
        <button className="ViewMore" onClick={View}>
          View More
        </button>
      )}
      {!Load && visible >= starRepos.length && starRepos.length > 0 && (
        <p className="error" style={{ margin: "2rem", fontSize: "2.5rem" }}>
          No More Starred Repos Found
        </p>
      )}
    </>
  );
};
export default Stars