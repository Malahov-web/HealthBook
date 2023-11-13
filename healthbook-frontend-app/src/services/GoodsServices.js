import axios from 'axios';


const axiosInstance = axios.create({

    baseURL: 'http://healthbook.loc', // -

    timeout: 500,
    // withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {


    getGoods() {
        return axiosInstance.get('/goods');
    },


    getBrands() {
        return axiosInstance.get('/brands');
    },


    getAlert() {
        alert('getAlert!');
    }

}



