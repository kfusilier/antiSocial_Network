import style from './landing.module.css';
import NavBar1 from '../navbar1/index';

function Landing() {
	return (
		<>
			<NavBar1 />
			<div className={style.homeBrand}>
				<div className={style.homeLogo}>
					<p>antiSocial</p>
				</div>
				<div className={style.homeBlurb}>
					<p>a place to be alone, together.</p>
				</div>
			</div>
		</>
	);
}

export default Landing;
