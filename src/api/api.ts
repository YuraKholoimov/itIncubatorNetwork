import axios from "axios";

const baseUrl = `https://social-network.samuraijs.com/api/1.0/`

const instanceAxios = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "74a2af3c-45fa-4c81-b701-0275dea0591d"
    },

})

const api = () => ({
    authMe: () => {
        return instanceAxios.get(`${baseUrl}auth/me`, {withCredentials: true})
    },
    getUserById: (userId: number) =>   instanceAxios.get(`/profile/${userId}`),
    getUser: (currentPage: number, usersOnPageCount: number) => {
        return instanceAxios.get(`${baseUrl}users?page=${currentPage}&count=${usersOnPageCount}`)
    },
    follow: (userId: number) => {
        return instanceAxios.post(`${baseUrl}follow/${userId}`)
    },
    unFollow: (userId: number) => {
        return instanceAxios.delete(`${baseUrl}follow/${userId}`)
    },


});

export default api;