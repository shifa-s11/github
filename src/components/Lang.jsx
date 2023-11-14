
import React, { useState, useEffect } from "react";

const Lang = () => {
  const [Languages, setLanguages] = useState([]);

  useEffect(() => {
    const Repositories = () => {
      const username = localStorage.getItem('searchInput');
      fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repositories => {

          const Counts = repositories.reduce((acc, repo) => {
            const { language } = repo;
            if (language) {
              acc[language] = (acc[language] || 0) + 1;
            }
            return acc;
          }, {});
          const sort = Object.keys(Counts).sort(
            (a, b) => Counts[b] - Counts[a]
          );

          const top5Languages = sort.slice(0, 3);

          setLanguages(top5Languages);
        })
        .catch(error => {
          console.error("Error fetching user repositories:", error);
        });
    };

    Repositories();
  }, );

  return (
    <div className="language">
      <h2>User's Top 3 Languages</h2>
      <ul>
        {Languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lang