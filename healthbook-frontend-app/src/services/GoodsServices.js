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

    // postNewsItem(item) {
    //     return axiosInstance.post('/news', item)
    // }    ,

    // v default
    // postGoodsItem(item) {
    //     return axiosInstance.post('/goods', item)
    // },

    // 6.2.4
    __v__postGoodsItem(item) {


        console.log('item');
        console.log(item);

        // WARNING: For POST requests, body is set to null by browsers.
        var data = JSON.stringify({
            "title": "Витрум Энерджи таблетки шипучие массой 3,8 г",
            "name": "Vitrum Energy",
            "brand": 2
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "http://healthbook.loc/goods");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

        xhr.send(data);
        // return xhr.send(data);
    },

    // 6.2.5.1, 2
    __v_2__postGoodsItem(item) {

        item =
        {
            "title": "Витрум Энерджи таблетки шипучие массой 3,8 г",
            "name": "Vitrum Energy",
            "brand": 2
        };

        console.log('item');
        console.log(item);

        // return axiosInstance.post('/goods', item)
        return axiosInstance.post('/goods', {
            "title": "Витрум Энерджи таблетки шипучие",
            "name": "Vitrum Energy 20tabs",
            "brand": 3
        })
    },

    // 6.2.5. ?
    __v_3__postGoodsItem(item) {


        console.log('item');
        console.log(item);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "title": "Витрум Энерджи таблетки шипучие массой 3,8 г",
            "name": "Vitrum Energy",
            "brand": 2
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        // 6.2.5.1
        // fetch("http://healthbook.loc/goods", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error::', error));

        // 6.2.5.2        
        return fetch("http://healthbook.loc/goods", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error::', error));

        // 6.2.5.3
        // return fetch("http://healthbook.loc/goods", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error::', error));

    },

    // 4.2.6 Вручную написать POST-запрос по док-и axios
    _v__x_2_6__postGoodsItem(item) {

        console.log('item');
        console.log(item);


        // axios.post('/goods', {
        axiosInstance.post('/goods', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log('postGoodsItem  response: ');
                console.log(response);
            })
            .catch(function (error) {
                console.log('postGoodsItem  error: ');
                console.log(error);
            });


        // return axiosInstance.post('/goods', {
        //     // пустые параметры
        // })

    },

    // 4.2.7  Вручную написать POST-запрос на JS с fetch 
    // _v__x_2_7__postGoodsItem(item) {

    //     console.log('item');
    //     console.log(item);


    //     let user = {
    //         name: 'John',
    //         surname: 'Smith'
    //     };

    //     // let response = await fetch('/article/fetch/post/user', {
    //     let response = await fetch('http://healthbook.loc/goods', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify(user)
    //     });

    //     let result = await response.json();
    //     alert(result.message);
    // },


    // v default
    // postGoodsItem(item) {
    //     // return axiosInstance.post('/goods', item)
    //     return axiosInstance.post('/goods', JSON.stringify(item))
    // },

    _v__x_2_7__postGoodsItem(item) {

        console.log('item');
        console.log(item);

        // 4.2.7.3
        let url = 'http://healthbook.loc/goods';
        let options = {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json;charset=utf-8'
            // },
            // body: JSON.stringify(item)
            // body: item
            // },
            // body: {
            //     "title": "Мультивитамины от А до Zn шипучие таблетки Эвалар №15 ",
            //     "name": "Эвалар Мультивитамины от А до Zn",
            //     "brand": 4
            // }
            body: JSON.stringify(
                {
                    "title": "Мультивитамины от А до Zn шипучие таблетки Эвалар №15 ",
                    "name": "Эвалар Мультивитамины от А до Zn",
                    "brand": 4
                }
            ),
            // headers: {
            //     'Content-Type': 'application/json;charset=utf-8'
            // },
        };

        fetch(url, options)
            .then(response => response.json())
            .then(result => console.log(result));
    },


    _v__x_2_7_4__postGoodsItem(item) {
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        //     "title": "Мультивитамины от А до Zn шипучие таблетки Эвалар №15 ",
        //     "name": "Эвалар Мультивитамины от А до Zn",
        //     "brand": 3
        // });

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };

        // fetch("http://healthbook.loc/goods", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
        ////
        ////
        ////
        ////
        ////
        console.log('item');
        console.log(item);

        var raw = JSON.stringify({
            "title": "Мультивитамины от А до Zn шипучие таблетки Эвалар №15 ",
            "name": "Эвалар Мультивитамины от А до Zn",
            "brand": 3
        });

        // 4.2.7.3
        let url = 'http://healthbook.loc/goods';
        let options = {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json;charset=utf-8'
            // },
            // body: JSON.stringify(item)
            // body: item
            // },
            // body: {
            //     "title": "Мультивитамины от А до Zn шипучие таблетки Эвалар №15 ",
            //     "name": "Эвалар Мультивитамины от А до Zn",
            //     "brand": 4
            // }
            // body: JSON.stringify(
            //     {
            //         "title": "Мультивитамины от А до Zn шипучие таблетки Эвалар №15 ",
            //         "name": "Эвалар Мультивитамины от А до Zn",
            //         "brand": 4
            //     }
            // ),
            // headers: {
            //     'Content-Type': 'application/json;charset=utf-8'
            // },

            body: raw,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(result => console.log(result));
    },

    // 4.2.8
    postGoodsItem(item) {

        console.log('item');
        console.log(item);


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "title": "Мультивитамины от А до Zn шипучие таблетки Эвалар №15 ",
            "name": "Эвалар Мультивитамины от А до Zn",
            "brand": 3
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://healthbook.loc/goods", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    },




    getBrands() {
        return axiosInstance.get('/brands');
    },


    getAlert() {
        alert('getAlert!');
    },


    // createObjectFromTable(elID) { // 1.v.1
    createObjectFromTable(tableEl) { // 1.v.2
        // console.log('createObjectFromTable() - elID:');
        // console.log(elID); // +


        // 1.v.1 Получить элемент table
        // const tableOuterEl = document.querySelector(elID);
        // const tableEl = tableOuterEl.querySelector("table");
        // console.log('Table El');
        // console.log(tableEl); // +
        // debugger
        // [Vue warn]: Error in v-on handler: "TypeError: can't access property "querySelector", tableOuterEl is null"
        // TypeError: can't access property "querySelector", tableOuterEl is null

        // 1.v.2
        // ?

        console.log('createObjectFromTable() - Table El:');

        console.log(tableEl); // +        
        // 2. Пройтись циклом по строкам
        // Получаем списоk всех строк из table.
        const rows = tableEl.rows
        //   
        // let compositionArr = [];
        let compositionObj = {};

        const rowStartIndex = 2; // TODO: as input parameter
        for (let i = rowStartIndex; i < rows.length; i++) {  // i = 1, а не 0, потому что мы пропускам первую строку с th
            const rowEl = rows[i];

            // let vitaminObj = makeVitaminObjFromRow(rowEl); // +
            let vitaminObj = this.makeVitaminObjFromRow(rowEl); // +
            // compositionArr
            // compositionArr.push(vitaminObj);
            // compositionObj

            // if (vitaminObj['name']) {
            // if (vitaminObj.hasOwnProperty('name')) {
            // if (vitaminObj && vitaminObj.hasOwnProperty('name')) { // ES Lint В Vue ругается
            if (vitaminObj &&
                Object.prototype.hasOwnProperty.call(vitaminObj, "name")
            ) {
                compositionObj[vitaminObj['name']] = vitaminObj; // +
            }

            //
            // console.log('what is rowEl?');
            // console.log(rowEl); // +

        }

        // return compositionArr
        return compositionObj
    },


    makeVitaminObjFromRow(rowEl) {

        let obj = {}

        //  v.1
        // obj.name = rowEl.cells[0].innerText;
        // obj.value = rowEl.cells[1].innerText;
        // obj.shareOfDailyIntake = rowEl.cells[2].innerText;

        // v.2
        const cellsInRowNumber = 3; // TODO: as input parameter
        if (rowEl.cells.length < cellsInRowNumber) {
            return;
        }

        if (rowEl.cells[0]) {
            obj.name = rowEl.cells[0].innerText;
        }
        if (rowEl.cells[1]) {
            obj.value = rowEl.cells[1].innerText;
        }
        if (rowEl.cells[2]) {
            obj.shareOfDailyIntake = rowEl.cells[2].innerText;
        }

        return obj;
    }

}



