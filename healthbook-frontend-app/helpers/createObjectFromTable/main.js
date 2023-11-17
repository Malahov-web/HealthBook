// createObjectFromTable - сделать объект витамина из таблицы html

/*
Дано: Таблица в виде html элемента DOM


Что нужно: 
Получить объект характеристик витамина.

Сделать объект вида:
{
    "component": {
        "name": "component Name",
        "value": "component Quantity",
        "shareOfDailyIntake": "% component Quantity",
    }

}


Решение:
Получить элемент table
Пройтись по строкам циклом
    К каждой строке применить ф-ю сделатьОбъектИзСтроки




Вывод:
*/

// Формат сайт eapteka.ru
// Vitrum Energy


function createObjectFromTable(elID) {

    // 1. Получить элемент table
    const tableOuterEl = document.querySelector(elID);
    const tableEl = tableOuterEl.querySelector("table");
    // Выбираем первый body из таблицы: HTMLCollection [tbody].
    // const firstTableBodyEl = tableEl.tableBodies[0];
    // console.log('Table El');
    // console.log(tableEl); // +
    // const firstTableBodyEl = tableEl.tBodies[0];
    debugger

    // 2. Пройтись циклом по строкам
    // Получаем списоk всех строк из table.
    const rows = tableEl.rows
    //   
    // let compositionArr = [];
    let compositionObj = {};

    for (let i = 1; i < rows.length; i++) {  // i = 1, а не 0, потому что мы пропускам первую строку с th
        const rowEl = rows[i];

        let vitaminObj = makeVitaminObjFromRow(rowEl);
        // compositionArr
        // compositionArr.push(vitaminObj);
        // compositionObj
        compositionObj[vitaminObj['name']] = vitaminObj;
        //
        console.log('what is rowEl?');
        console.log(rowEl);

    }

    // return compositionArr
    return compositionObj
}


function makeVitaminObjFromRow(rowEl) {

    let obj = {}

    obj.name = rowEl.cells[0].innerText;
    obj.value = rowEl.cells[1].innerText;
    obj.shareOfDailyIntake = rowEl.cells[2].innerText;

    return obj;
}


console.log(createObjectFromTable("#composition-table-outer"));


/* createArrayFromStrings */

function makeVitamineObjectFromTableString(text) {
    // 1. Split by strings
    let stringsArr = splitTextByStrings(text);

    // 1. Разделить на массив по строам
    // let stringsArr = splitTextByStrings(text);

    // 2. Make Object from each string
    let vitamineObject = makeVitamineObjectFromStringsArray(stringsArr);

    return vitamineObject;
}

function makeVitamineObjectFromStringsArray(stringsArr) {
    let obj = {};

    for (let i = 0; i < stringsArr.length; i++) {
        const element = stringsArr[i];

        let itemObj = {};
        itemObj = stringToObj(stringsArr[i]);

        // v.2 add to obj
        let name = itemObj["name"];
        obj[name] = itemObj;
    }

    debugger;
    return obj;
}

function stringToObj(str) {
    let arr = str.split("\t");

    let obj = {};
    obj["name"] = arr[0];
    obj["value"] = arr[1];
    // obj['share_of_daily_intake'] = arr[0];
    obj["shareOfDailyIntake"] = arr[2];

    // debugger
    // return str;
    return obj;
}

function splitTextByStrings(text) {
    let arr = text.split("\n");

    return arr;
}

// console.log(makeVitamineObjectFromTableString(text));


debugger;
