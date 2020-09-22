import React from "react";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook"
import Twitter from "@material-ui/icons/Twitter"
import './style.css'
const SocialMedia=()=>{
return(<div className="SocialMedia">
    <span className="icon"><Facebook style={{ fontSize: '2.5rem'}}/></span>
    <span className="icon"><Twitter style  ={{ fontSize: '2.5rem'}}/></span>
    <span className="icon"><Instagram style={{ fontSize: '2.5rem'}}/></span>
    
   
</div>)

}

export default SocialMedia;