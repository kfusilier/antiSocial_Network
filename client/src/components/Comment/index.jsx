import style from './Comment.module.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
// import antiSocialAppTo from "../../api/axios.config";
import * as postService from "../../api/post.service";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Comment = (props) => {
  const [posts, setPosts] = useState([]);
  let {id} = useParams()

  const fetchPosts = async () => {
    await postService.get(`${id}`).then((res) => {
      
    console.log(res.data.data.comments);
      setPosts(res.data.data.comments);
    });
  };



  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className = {style.usersContainer}>
     
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Comments
        </Typography>
        
        <Typography variant="body2">
        <ul>
			    {posts.map((sub) => (
       
				<li>{sub.content}
                <br/>
                <NavLink to={`/posts/${id}/comments/${sub._id}/edit`}>
                <button type ='button' className={style.button}>Edit</button>
				</NavLink>

                </li>
				))}

                
		</ul>

         
								
								
						
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>

    </div>
    
  );
};
export default Comment;