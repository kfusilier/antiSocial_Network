import axios from "axios";

// switch URL depending on whether ur local or pushing to heroku
const backendAPI = "http://localhost:4000/api";
// const backendAPI = "https://XXXXXXXXXXX.herokuapp.com/api";

const antiSocialAppTo = axios.create({
	baseURL: `${backendAPI}`,
	headers: {
		"Content-type": "application/json",
	},
});

export default antiSocialAppTo;