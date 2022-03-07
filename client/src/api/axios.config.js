import axios from "axios";

// switch URL depending on whether ur local or pushing to heroku
const backendAPI = "http://localhost:4000/api";
// const backendAPI = "https://XXXXXXXXXXX.herokuapp.com/api";
	
const user = JSON.parse(localStorage.getItem('user'))
// standard instance naming convention can be api, client or apiClient
const antiSocialAppTo = axios.create({
	baseURL: `${backendAPI}`,
	headers: {
	"content-type": "application/json",
	authorization: `Bearer ${user}`
	},

});

export default antiSocialAppTo;