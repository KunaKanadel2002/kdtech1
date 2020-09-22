import React from "react";


const BlogContainer = (props) => {
    // const Expand=()=>{
    //   return   document.getElementsByName("content").Style.height= "max-content";
    // }
    return (

       <>
            <div className="title">{props.title}</div>
            <img src={props.img} alt="jpg" />
            <div name="content" className="content">{props.content} </div>
            {/* <div onClick={} style={{color:"blue"}}> More...</div> */}
        </>
    )
}

export default BlogContainer;