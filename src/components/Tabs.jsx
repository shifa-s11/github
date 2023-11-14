import React from "react";


const Tabs = ({type,setType}) => {
    return(
       <>
        <div className='footer'>
      <button className={`button ${type === "starred-repos" ? 'active' : ''}`} onClick={() => setType("starred-repos")}>
  Starred-Repos
</button>
<button className={`button ${type === "followers" ? 'active' : ''}`} onClick={() => setType("followers")}>
  Followers
</button>
<button className={`button ${type === "lang" ? 'active' : ''}`} onClick={() => setType("lang")}>
 Languages
</button>
      </div>
      <hr />
  
       </>
    )
}
export default Tabs