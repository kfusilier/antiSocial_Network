import antiSocialAppTo from "./axios.config";
const auth = "/auth";
const users = "/users"
// create a password for the first time 
const register = (email, password, screenName) => {
    return antiSocialAppTo
    .post(`${auth}/register`, {email, password, screenName})
    .then((res) =>{
        console.log(res)
    })
}
// return a token
const login = (email, password) => {
    try {
        return antiSocialAppTo
        .post(`${auth}/login`, {email, password})
        .then((res) => {
            console.log(res)
            if (res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data.token))
                localStorage.setItem("id", JSON.stringify(res.data.foundUser._id))
                localStorage.setItem("screenName", JSON.stringify(res.data.foundUser.screenName))
            }
        })
    } catch (error) {
        console.log(error)
    }
}
const getProfile = () => {
    return antiSocialAppTo
    .get(`${users}/profile`)
}
// check current user exist 
const currentUser = () => {
    let user = localStorage.getItem("user")
    return JSON.parse(user)
}

const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("id")
    localStorage.removeItem("screenName")
}
export {register , login, currentUser, logout, getProfile}