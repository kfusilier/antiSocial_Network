// Small User Name + Set Avatar Image

import style from './avatarSmall.module.css';
import Smiley from './Smiley.png';

const AvatarSmall = () => {
	return (
		<div>
			<div className={style.avatarImage}>
				<img src={Smiley} alt='smiley' />
			</div>
			<div className={style.avatarName}>
				<p>USER NAME</p>
			</div>
		</div>
	);
};

export default AvatarSmall;
