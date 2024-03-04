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


    // v.1
    copyObjectByCustomProps(arrObjects, customProps) {

        console.log('arrObjects');
        console.log(arrObjects);

        let newArr = [];

        // 1
        for (let i = 0; i < arrObjects.length; i++) {
            const obj = arrObjects[i];
            debugger
            let newObj = {};

            // 2
            for (const key in obj) {
                // if (Object.hasOwnProperty.call(object, key)) {
                //     const element = object[key];
                // }

                // есть ли prop в customProps
                if (!customProps.includes(key)) {
                    continue;
                }

                newObj[key] = obj[key];
            }
            //
            newArr.push(newObj);
        }
        // alert();
        // debugger
        return newArr; // -
        // return [1, 2, 3]; // +

    },

    getAlert() {
        alert('getAlert!');
    },


    // Add
    // v default
    postCoursesItem(item) {

        // item =
        // {
        //     "title": "Витрум Энерджи таблетки шипучие массой 3,8 г",
        //     "name": "Vitrum Energy",
        //     "brand": 2
        // };
        // let itemJson = `{"screen": "50 inch", "resolution": "2048 x 1152 pixels", "ports": {"hdmi": 1, "usb": 3}, "speakers": {"left": "10 watt", "right": "10 watt"}}`;

        // let itemJson = item;
        // let itemJson = JSON.stringify(item)


        console.log('item');
        console.log(item);
        // console.log('itemJson');
        // console.log(itemJson);

        return axiosInstance.post('/courses', item)
        // return axiosInstance.post('/goods', itemJson)
        // return 1;
    },

}



