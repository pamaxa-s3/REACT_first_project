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
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    }
}

export const headerApi = {
    authMe() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status: status});
    }
}