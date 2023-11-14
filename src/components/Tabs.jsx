import React from "react";
import { Link } from "react-router-dom";

const Tabs = ({type,setType}) => {
    return(
       <>
        <div className='footer'>
          <div className="footerbutton">
      <button className={`button ${type === "starred-repos" ? 'active' : ''}`} onClick={() => setType("starred-repos")}>
  Starred-Repos
</button>
<button className={`button ${type === "followers" ? 'active' : ''}`} onClick={() => setType("followers")}>
  Followers
</button>
<button className={`button ${type === "lang" ? 'active' : ''}`} onClick={() => setType("lang")}>
 Languages
</button>
<button className={`button ${type === "organ" ? 'active' : ''}`} onClick={() => setType("organ")}>
Organizations
</button></div>
<Link className="back" to={`/github/`}>
      <button className="backbutton" >Back</button></Link>
      </div>
      <hr className="hr"/>
  
       </>
    )
}
export default Tabs