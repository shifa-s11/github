import React, { useState, useEffect } from "react";


const Organ = () => {
  const [organizations, setOrganizations] = useState([]);
  const username = localStorage.getItem('searchInput');
  const[visible,SetVisible] = useState(5)
  const[Load,setLoad] = useState(true)
  useEffect(() => {
    Organ();
  }, []);

  const Organ = () =>{
  fetch(`https://api.github.com/users/${username}/orgs`)
    .then((response) => response.json())
    .then((data) => {
      setOrganizations(data);
      setLoad(false);
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching user organizations data:', error);
    });
;}
const View = () => {
  SetVisible((prevVisible) => prevVisible + 5);
};
return (
  <>
  {Load?(<p className="error">Loading.....</p>):
    <div className="organizations-list">
      {organizations.length > 0 ? (
        organizations.slice(0,visible).map((org) => (
          <div key={org.id} className="organization">
                 <p> <span></span> {org.login} </p>
             <img src={org.avatar_url} alt="" />
            <p className="description"> <span className="desc">Description:</span>{org.description || 'No description available.'} </p>
     
            <p> <span>Events:</span> <a  className="events"href={org.events_url} target="_blank" rel="noopener noreferrer">Click Here</a></p>
          </div>
        ))
      ) : (
        <p className="error" style={{marginTop:"0.2rem"}}>No organizations found.</p>
      )}
    </div>}
    {organizations.length >= visible && (
        <button onClick={View}>View More</button>
      )}
  </>
);
      }

export default Organ;






