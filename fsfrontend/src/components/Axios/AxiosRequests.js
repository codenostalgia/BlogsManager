import axios from "axios";

axios.defaults.baseURL="http://localhost:8080"
axios.defaults.headers = {"Access-Control-Allow-Origin": "*"}

function verifyLogin(user){
    return axios({
        method: 'post',
        url: '/login',
        data: user
    })
}

function signup(user){
    return axios({
        method: 'post',
        url: '/signup',
        data: user
    })
}

function addBlog(blog){
    return axios({
        method: 'post',
        url: '/blogs/add',
        data: blog
    })
}

function getAllBlogs(){
    return axios({
        method: 'get',
        url: '/blogs'
    })
}

function approveBlog(blog){
    return axios({
        method: 'post',
        url: '/blogs/approve',
        data:blog
    })
}


function getAuthors(){
    return axios({
        method: 'get',
        url: '/blogs/users'
    })
}


function updateBlog(blog){
    return axios({
        method: 'put',
        url: '/blogs/update',
        data:blog
    })
}


function deleteBlog(blog){
    return axios({
        method: 'delete',
        url: '/blogs/delete',
        data:blog
    })
}

export {verifyLogin,signup,addBlog,getAllBlogs,approveBlog,getAuthors,updateBlog,deleteBlog}