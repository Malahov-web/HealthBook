import axios from 'axios';


const axiosInstance = axios.create({
    // baseURL: 'http://localhost:3000',
    // baseURL: 'http://healthbook.loc',
    // test
    // baseURL: 'https://httpbin.org/get', // +
    // baseURL: 'http://healthbook.loc/courses-types', // Updt: +.  - "ERR_NETWORK"
    baseURL: 'http://healthbook.loc', // -
    // baseURL: 'healthbook.loc', //  ? "Request failed with status code 404"
    // baseURL: 'healthbook.loc/courses-types', // - "ERR_BAD_REQUEST"  404
    // baseURL: 'https://jsonplaceholder.typicode.com/todos/1', // +
    // baseURL: 'asjkdjkasd.comasd', // "ERR_BAD_REQUEST",  Failed to load resource: the server responded with a status of 404 (Not Found)
    timeout: 500,
    // withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getCoursesTypes() {
        // return apiClient.get('/events')
        // return axiosInstance.get('/courses-types');
        // test
        // return axiosInstance.get('');

        return axiosInstance.get('/courses-types');
    },

    getCourses() {
        return axiosInstance.get('/courses');
    },
}

