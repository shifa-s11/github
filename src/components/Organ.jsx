import React, { useState, useEffect } from "react";


const Organ = () => {
  const [organizations, setOrganizations] = useState([]);
  const username = localStorage.getItem('searchInput');

  useEffect(() => {
    Organ();
  }, []);

  const Organ = () =>{
  fetch(`https://api.github.com/users/${username}/orgs`)
    .then((response) => response.json())
    .then((data) => {
      setOrganizations(data);
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching user organizations data:', error);
    });
;}

return (
  <>
    <div className="organizations-list">
      {organizations.length > 0 ? (
        organizations.map((org) => (
          <div key={org.id} className="organization">
                 <p> <span></span> {org.login} </p>
             <img src={org.avatar_url} alt="" />
            <p className="description"> <span className="desc">Description:</span>{org.description || 'No description available.'} </p>
     
            <p> <span>Events:</span> <a  className="events"href={org.events_url} target="_blank" rel="noopener noreferrer">Click Here</a></p>
          </div>
        ))
      ) : (
        <p>No organizations found.</p>
      )}
    </div>
  </>
);
      }

export default Organ;






