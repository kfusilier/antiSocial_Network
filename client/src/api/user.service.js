import antiSocialAppTo from "./axios.config";

const getAllUser = () => {
    return antiSocialAppTo.get("/users");
}

const showUser = (id) => {
    return antiSocialAppTo.get(`/users/${id}`);
}

const updateUser = (id, data) => {
    return antiSocialAppTo.put(`/users/${id}`, data);
}

const destroyUser = (id) => {
    return antiSocialAppTo.delete(`/users/${id}`);
}

export {getAllUser, showUser, updateUser, destroyUser};