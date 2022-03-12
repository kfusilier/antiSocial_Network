import {useState} from "react";
import * as postService from "../../api/post.service";
import { useParams } from 'react-router-dom'



const Like = (props) => {

    // const [likes, setLikes] = useState(`${props.like}`);
    const [likes, setLikes] = useState(0);

    // const updateLikes = async () => {
    //     let updatedPost = {likes: parseInt(likes)+1}
    //     await postService.update(`${props.post}`, updatedPost).then((res) => {
    //         setLikes(res.data.data)
    //         console.log(res.data.data)

    //     })
    // };
    
    return (
    <div>
        {/* <button onClick={updateLikes}>Like!</button> */}

        <button 
            style={{color: 'blue'}}
            onClick = {()=>setLikes(likes +1)}>
            Like
            </button>            
        <span> {likes}</span>
    </div>
    )
}

export default Like;