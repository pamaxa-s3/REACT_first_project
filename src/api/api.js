import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '81dce162-1f88-40a4-a4e8-e600445fd8ef'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});


export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    delFollower(u) {
        return instance.delete(`follow/${u.id}`)
    },
    postFollower(u) {
        return instance.post(`follow/${u.id}`)
    },
}