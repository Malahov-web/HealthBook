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



