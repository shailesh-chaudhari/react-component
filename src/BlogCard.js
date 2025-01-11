import React from "react"
import { dumpLogs } from "./utils"
//import classes from './BlogCard.Module.css'


const BlogCard = (props) => {

    // onLikeBtnClick = () => {
    //  this.setState((prevState, prevProps) => { 
    //    return {likeCount: prevState.likeCount + 1 }
    // })
    // }
    dumpLogs(props)
    return (
        <div className="NewBlogCard" >
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>Like Count: <span className="likeCount">{props.likeCount}</span></p>
            <button onClick={props.onLikeBtnClick}>Like</button>
        </div>
    )


}

export default BlogCard