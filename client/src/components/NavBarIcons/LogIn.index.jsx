// Log in Icon = Open Door w/ arrow entering

import style from './icon.module.css';
import IconPath from './IconPath';

function LogInIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			enable-background='new 0 0 24 24'
			height='24px'
			viewBox='0 0 24 24'
			width='24px'
			className={style.icon}>
			<path d={IconPath.Login} />
		</svg>
	);
}

function LogInButton(props) {
	return <LogInIcon type={props.type} name={props.name} />;
}

export { LogInIcon, LogInButton };
