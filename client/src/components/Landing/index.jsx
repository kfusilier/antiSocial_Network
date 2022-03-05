import style from './landing.module.css';

function Landing() {
	return (
		<div className={style.homeBrand}>
			<div className={style.homeLogo}>
				<p>antiSocial</p>
			</div>
			<div className={style.homeBlurb}>
				<p>a place to be alone, together.</p>
			</div>
		</div>
	);
}

export default Landing;

// <div className='homeBrand'>
// 	<div classname='homeLogo'>
// 		<p>antiSocial</p>
// 	</div>
// 	<div className='homeBlurb'>
// 		<p>a place to be alone, together.</p>
// 	</div>
// </div>
