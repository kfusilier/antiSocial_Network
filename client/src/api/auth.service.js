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
                localStorage.setItem("userId",res.data.userId)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

// const getProfile = () => {
//     return antiSocialAppTo
//     .get(`${users}/profile`)
// }


//get UserId attempt
const getProfile = () => {
    let userId = localStorage.getItem("userId")
    return JSON.parse(userId)
}

// check current user exist 
const currentUser = () => {
    let user = localStorage.getItem("user")
    return JSON.parse(user)
}
const logout = () => {
    localStorage.removeItem("user")
}
export {register , login, currentUser, logout, getProfile}