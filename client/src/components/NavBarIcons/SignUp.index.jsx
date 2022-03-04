// Sign Up Icon = Person with checkmark

import style from './icons.module.css';
import IconPath from './IconPath';

function SignUpIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='24px'
			viewBox='0 0 24 24'
			width='24px'
			className={style.icon}>
			<path d={IconPath.Signup} />
		</svg>
	);
}

export default SignUpIcon;
