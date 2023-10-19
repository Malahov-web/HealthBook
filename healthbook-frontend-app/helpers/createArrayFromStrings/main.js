

// createArrayFromTableStrings

/*
Дано: Таблица в виде Текста, с переносом по строкам


Что нужно: 
Сделать массив, разделив текст по переносам строк.
Из строки сделать объект, в кот-м будет Название и Значение (число)


Решение:
Сначала разделать текст (строку) на массив (по переносу строки).
Потом в каждой строке найти Название и Значение
    поиск по строке до цифры скопировать в название
    от первой цифры Значение
    возможно Значение разбить на Цифровое выражение и Единицу измерения
        что такое Value ?
    


Вывод:
*/


// Формат сайт vitrum.ru
// text = `
// Витамин А 	1,72 (1,55 — 2,58) мг
// Витамин D3 	0,01 (0,009 — 0,015) мг
// Витамин E 	13,5 (12,2 — 20,3) мг
// Витамин C 	60,0 (54 — 90) мг
// Витамин B1 	1,5 (1,35 — 2,25) мг
// Витамин B2 	1,7 (1,53 — 2,55) мг
// Витамин B6 	2,0 (1,8 — 3) мг
// Витамин B12 	6,0 (5,4 — 9) мкг
// Витамин PP (ниацинамид) 	20 (18 — 30) мг
// Витамин K1 	25 (23 — 40) мкг
// Пантотеновая кислота (витамин B5) 	10 (9 — 15) мг
// Фолиевая кислота (витамин B9) 	0,4 (0,36 — 0,6) мг
// Биотин (витамин B7) 	30 (27 — 45) мкг
// `;


// text = `
// Кальций 	162 (145,8 — 202,5) мг
// Магний 	100 (90 — 125) мг
// Цинк 	15 (13,5 — 18,7) мг
// Йод 	150 (135 — 240) мкг
// Фосфор 	125 (112,5 — 156,2) мг
// Железо 	16 (14,4 — 20) мг
// Медь 	2 (1,8 — 2,5) мг
// Марганец 	2,5 (2,25 — 3,12) мг
// Селен 	25 (23 — 40) мкг
// Хром 	25 (23 — 40) мкг
// Молибден 	25 (23 — 40) мкг
// Ванадий 	10 (9 — 16) мкг
// `;


// Формат сайт fitomarket.ru
text = `
Витамин С 	150-255 мг 	250-4251
Витамин Е 	24,0-39,6 мг ТЭ1 	240-3963
Ниацин 	18.0-29.7 мг 	100-1653
Пантотеновая кислота 	10,8-15,0 мг 	200-2503
Витамин В6 	3,0-6,0 мг 	250-3003
Рибофлавин 	3,0-6,0 мг 	250-3753
Тиамин 	2,5-5,0 мг 	250-3573
Витамин А 	800-1320 мкгРЭ2 	100-1653
Фолацин 	450-600 мкг 	225-3003
Биотин 	100-150 мкг 	200-3003
Витамин К1 	20-33 мкг 	17-28
Витамин D 	5,0-8,3 мкг 	100-1663
Витамин В12 	2,5-4,1 мкг 	250-4103
Кальций 	120-198 мг 	12-20
Магний 	45-74,3 мг 	11-19
Цинк 	5,0-8,3 мг 	33-55
Железо 	2.1-3,5 мг 	15-25
Медь 	0,9-1,5 мг 	90-1503
Марганец 	0,9-1,5 мг 	45-75
Йод 	100-165 мкг 	67-1103
Хром 	25,0-41,3 мкг 	50-83
Селен 	10,0-16,5 мкг 	14-24 
`;




function createArrayFromTableStrings(text) {

    // 1. Разделить на массив по строам
    let stringsArr = splitTextByStrings(text);


    // 2.  Из каждой строки выделить Name и Value
    // stringsArr
    let obj = {};
    let arr = [];

    for (let i = 0; i < stringsArr.length; i++) {
        const element = stringsArr[i];

        let itemObj = {};
        itemObj = stringToObj(stringsArr[i]);

        // v.1 push to arr
        arr.push(itemObj)

        // v.2 add to obj
        let name = itemObj['name'];
        obj[name] = itemObj;
    }


    debugger;
}


function _stringToObj(str) {

    // Витамин А 	1,72 (1,55 — 2,58) мг
    // Витамин А \t1,72 (1,55 — 2,58) мг

    // 1. find Number
    // перебираем посимвольно, сравниваем с диапазоном цифр (или с числом от 0-9)?
    let numberIndexStart = 0;

    // // v.1
    // for (let i = 0; i < str.length; i++) {
    //     const element = str[i];

    //     if ((element >= 0) && (element <= 9)) {
    //         // It is number
    //         numberIndexStart = i;
    //     }

    // }
    // debugger

    // v.2
    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        // if ((element >= 0) && (element <= 9)) {


        // if ( alert( "\u00A9" );  ) {
        // if ((element.codePointAt(0) > "\u0030") && (element.codePointAt(0) < "\u0039")) {

        //TEST start

        // console.log('0.codePointAt(0)');
        // console.log('0'.codePointAt(0)); // +

        // console.log('0.codePointAt(0)');
        // console.log('9'.codePointAt(0)); // +        

        // console.log('element.codePointAt(0)');
        // console.log(element.codePointAt(0)); // +

        //TEST end

        if (
            (element.codePointAt(0) >= "0".codePointAt(0))
            &&
            (element.codePointAt(0) <= "9".codePointAt(0))) {

            // It is number
            numberIndexStart = i;

            break; // ! после найденного первого цифры - вышли из цикла)
        }

    }
    // debugger



    // 2. get Name
    // 2.1
    let itemName = str.substring(0, numberIndexStart);
    // 2.2 удалить '\t' console.log(string.replace(subString, '')); // => Это строка.
    itemName = itemName.replace('\t', "").trim();
    debugger




}


function __stringToObj(str) {

    // Витамин А 	1,72 (1,55 — 2,58) мг
    // Витамин А \t1,72 (1,55 — 2,58) мг

    // 1. find Number
    // перебираем посимвольно, сравниваем с диапазоном цифр (или с числом от 0-9)?
    let numberIndexStart = 0;

    // v.2
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        const nextElement = str[i + 1];

        // v.2.1  - условие - если цифра
        // if (
        //     (element.codePointAt(0) >= "0".codePointAt(0))
        //     &&
        //     (element.codePointAt(0) <= "9".codePointAt(0))) {

        //     // It is number
        //     numberIndexStart = i;

        //     break; // ! после найденного первого цифры - вышли из цикла)
        // }

        // v.2.2 - условие - если симовол "\"", а след-й "t"
        if (
            // element == isBackslash && nextElement == "t"
            // (element.codePointAt(0) == "\\".codePointAt(0)) && (nextElement.codePointAt(0) == "t".codePointAt(0))  // -
            // (element.codePointAt(0) == "\\".codePointAt(0))  // -
            // (element.codePointAt(0) == " ".codePointAt(0)) // +-  да, пробел находится
            // (element.codePointAt(0) == "t".codePointAt(0)) // - Ага, вот что это значит - "\t" - это один символ, а не два
            (element.codePointAt(0) == "\t".codePointAt(0)) // - Ага, вот что это значит - "\t" - это один символ, а не два
        ) {
            // It is "\t"
            numberIndexStart = i;

            break; // ! после найденного первого цифры - вышли из цикла)
        }



    }
    // debugger



    let item = {};
    // 2. get Name
    // 2.1
    let itemName = str.substring(0, numberIndexStart);
    // 2.2 удалить '\t' console.log(string.replace(subString, '')); // => Это строка.
    itemName = itemName.replace('\t', "").trim();
    debugger

    item.name = itemName;

    return item;
}


function stringToObj(str) {

    // Витамин А 	1,72 (1,55 — 2,58) мг
    // Витамин А \t1,72 (1,55 — 2,58) мг
    let item = {};


    // 1. find Number
    // перебираем посимвольно, сравниваем с диапазоном цифр (или с числом от 0-9)?
    let numberIndexStart = 0;
    nameEndIndex = findNameEndIndex(str);


    // 2. get Name
    // 2.1
    let itemName = str.substring(0, nameEndIndex);
    // 2.2 удалить '\t' console.log(string.replace(subString, '')); // => Это строка.
    itemName = itemName.replace('\t', "").trim();
    // debugger
    item['name'] = itemName;

    // 3. get Value
    let itemValue = getItemValue(str, nameEndIndex);
    item['value'] = itemValue;

    debugger

    return item;
}


function getItemValue(str, nameEndIndex) {

    // Витамин А 	1,72 (1,55 — 2,58) мг

    // А что такое Value?
    // просто число ? 
    // или числои ед измерения ? 
    // а что делать со скобками ?

    // let numberIndexStart = 0;
    let numberIndexStart = findNumberStartIndex(str, nameEndIndex);

    // let itemValue = str.substring(numberIndexStart, -1);
    let itemValue = str.substring(numberIndexStart);  // С одним аргументом - берет до конца строки


    return itemValue
}

function findNumberStartIndex(str, startIndex) {

    let numberIndexStart = 0;


    // v.2
    // for (let i = 0; i < str.length; i++) {
    for (let i = startIndex; i < str.length; i++) {
        const element = str[i];
        // const nextElement = str[i + 1];

        // v.2.1  - условие - если цифра
        if (
            (element.codePointAt(0) >= "0".codePointAt(0))
            &&
            (element.codePointAt(0) <= "9".codePointAt(0))) {

            // It is number
            numberIndexStart = i;

            break; // ! после найденного первого цифры - вышли из цикла)
        }

    }
    // debugger  


    return numberIndexStart;
}

function findNameEndIndex(str) {

    let numberIndexStart;

    // v.2
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        // const nextElement = str[i + 1];

        // v.2.2 - условие - если симовол "\"", а след-й "t"
        if (
            (element.codePointAt(0) == "\t".codePointAt(0)) // - Ага, вот что это значит - "\t" - это один символ, а не два
        ) {
            // It is "\t"
            numberIndexStart = i;

            break; // ! после найденного первого цифры - вышли из цикла)
        }
    }
    // debugger   

    return numberIndexStart;
}

function splitTextByStrings(text) {

    let arr = text.split('\n');

    return arr;
}



console.log(createArrayFromTableStrings(text));

// console.log(splitTextByStrings(text));



// console.log(copyObjectByCustomProps(coursesArr, customProps));

// let newArray = copyObjectByCustomProps(coursesArr, customProps);




// console.log(isEmpty(schedule));  // true

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule)); // false





debugger