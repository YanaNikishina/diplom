import axios from 'axios';

const HOST_API = 'https://poks42.ml/api';
export function getAccessToken(){
    return localStorage.getItem("access_token")
}

export function isLogin(){
    return !!getAccessToken()
}

export const axiosInstance = axios.create({
    baseURL: HOST_API
});
  
axiosInstance.interceptors.request.use(config => {
    config.headers['Authorization'] = `Bearer ${getAccessToken()}`;
    return config;
});

export function getStudentGroups(){
    return axiosInstance.get(`/user/registration`)
        .then(res => res.data.groups);
}
export function getViews(){
    return axiosInstance.get(`/student/quiz/view`)
        .then(res => res.data.views);
}
export function getThemes(){
    return axiosInstance.get(`/student/quiz/3/themes`)
        .then(res => res.data.themes);
}
export function getDipRucs(){
    return axiosInstance.get(`/student/quiz/dipruc`)
        .then(res => res.data.dipruc);
}

export function getProfile(){
    return axiosInstance.get(`/student/profile`)
        .then(res => res.data.stud);
}

export function registration(data){
    return axiosInstance.post(`/user/registration`, data)
        .then(res => res.data.message)        
}

export function login(data){
    return axiosInstance.post(`/user/login`, data)
        .then(res => {
            localStorage.setItem( "access_token",res.data.access_token) 
        })     
}
export function forgotpass(data){
    return axiosInstance.post(`/user/reset`, data)
        .then(res => res.data.message)        
}

export function order(data){
    return axiosInstance.post(`/customer/order`, data)
        .then(res => res.data.message)        
}

export function submitKviz(data){
    return axiosInstance.post(`/student/quiz/end`, data)
        .then(res => res.data.message)        
}