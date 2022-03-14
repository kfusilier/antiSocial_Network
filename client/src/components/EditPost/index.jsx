import style from './editPost.module.css';
import { useEffect, useState } from 'react';
import antiSocialAppTo from '../../api/axios.config';
import * as postService from '../../api/post.service';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const EditPost = (props) => {
	const [posts, setPosts] = useState([]);
	const [text, setText] = useState(props.text);
	let { id } = useParams();

	const fetchPosts = async () => {
		await postService.get(id).then((res) => {
			//   console.log(res.data.data);
			setPosts(res.data.data);
		});
	};

	const deleteBtn = async () => {
		await postService.destroy(id).then(() => {
			document.location = `/browsepage`;
		});
	};

	const handleSubmit = async () => {
		const updatePost = { text, user: `${props.user}` };
		let res = await postService
			.update(props.postId, updatePost)
			.then(() => {
				setText('');
				console.log(updatePost);
				props.refreshPosts();
				document.location = '/BrowsePage';
			});
		if (!res === 201) {
			alert(`bad: ${res.status}`);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className={style.displayWrapper}>

<Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
		Edit your Post:         
		</Typography>
    

        <Typography variant="body2">
		<p>{props.text}</p>
		<br/>
				<form>
					<label>
						<textarea
							type='text'
							name='text'
							placeholder={props.text}
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
					</label>
					<br/>
					<input
						className={style.button}
						type='submit'
						value='Save New Post'
						onClick={handleSubmit}></input>
				</form>
				<br/>
				<button className={style.button} onClick={deleteBtn}>
					Delete Post
				</button>

	
        </Typography>
      </CardContent>
	  
      
	  <br/>
    </Card>


			<div id={style.title}>
				<br />
				
				
			</div>
		</div>
	);
};

export default EditPost;
