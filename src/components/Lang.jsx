
import React, { useState, useEffect } from "react";

const Lang = () => {
  const [topLanguages, setTopLanguages] = useState([]);

  useEffect(() => {
    const fetchUserRepositories = () => {
      const username = localStorage.getItem('searchInput');
      fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repositories => {
          // Count the usage of each language
          const languageCounts = repositories.reduce((acc, repo) => {
            const { language } = repo;
            if (language) {
              acc[language] = (acc[language] || 0) + 1;
            }
            return acc;
          }, {});

          // Sort languages based on usage count in descending order
          const sortedLanguages = Object.keys(languageCounts).sort(
            (a, b) => languageCounts[b] - languageCounts[a]
          );

          // Get the top 5 languages
          const top5Languages = sortedLanguages.slice(0, 3);

          setTopLanguages(top5Languages);
        })
        .catch(error => {
          console.error("Error fetching user repositories:", error);
        });
    };

    fetchUserRepositories();
  }, );

  return (
    <div>
      <h2>User's Top 3 Languages</h2>
      <ul>
        {topLanguages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lang