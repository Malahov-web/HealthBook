

// makeObjectFromString
// vitamineObject
// specsObject
// makeVitamineObjectFromTableString - сделать объект витамина из табличной строки?

/*
Дано: Таблица в виде Текста, с переносом по строкам


Что нужно: 
Получить объект характеристик витамина.

Сделать массив/объект, разделив текст по переносам строк.
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




// Формат сайт eapteka.ru
// Vitrum Energy
// text = `
// Витамин, А 	0,8 мг 	100
// Витамин С 	80 мг 	133**
// Витамин B1 	1,1 мг 	79
// Витамин B2 	1,4 мг 	88
// Витамин B3 (PP) 	16 мг 	89
// Витамин В5 	6 мг 	100
// Витамин B6 	1,4 мг 	70
// Витамин В12 	2,5 мкг 	250**
// Витамин D3 (200 МЕ) 	5 мкг 	100
// Витамин E 	12 мг 	120**
// Витамин К1 	75 мкг 	63*
// Биотин 	50 мкг 	100
// Фолиевая кислота 	200 мкг 	100
// Цинк 	10 мг 	67
// Магний 	100 мг 	25
// Марганец 	2 мг 	100*
// Медь 	1 мг 	100*
// Селен 	55 мкг 	79
// Йод (экстракт Fucus vesiculosus (150 мг), содержащий 0,1% йода) 	150 мкг 	100
// Железо 	14 мг 	100
// Кальций 	120 мг 	12
// Коэнзим Q10 	10 мг 	33* 
// `;


// от A до Цинка

// Vitrum Plus
text = `
Витамин А 	1,72 (1,55-2,58) 	215(194 — 323)1,*
Витамин D3 	0,01 (0,009-0,015) 	200 (180-300)1,*
Витамин Е, ТЭ 	13,5 (12,2 — 20,3) 	135(122 — 203) 1,*
Витамин С 	60,0 (54-90) 	100 (90-150) 1,*
Витамин В1 	1,5 (1,35-2,25) 	107 (96-161)1,*
Витамин В2 	1,7 (1,53-2,55) 	106 (96-159) 1,*
Витамин В6 	2,0 (1,8-3) 	100 (90-150)1,*
Витамин В12, мкг 	6,0 (5,4-9) 	600 (540-900)1,*
Витамин РР (ниацинамид) 	20 (18-30) 	111 (100-167)1,*
Витамин К1, мкг 	25 (23-40) 	21 (19-33)2
Пантотеновая кислота 	10 (9-15) 	167 (150-250)1,*
Фолиевая кислота 	0,4 (0,36-0,6) 	200 (180-300)1,*
Биотин, мкг 	30 (27-45) 	60 (54-90)1
Кальций 	162 (145,8-202,5) 	16 (15-20)1
Магний 	100 (90-125) 	25 (23-31)1
Цинк 	15 (13,5-18,7) 	100 (90-125)1,*
Йод, мкг 	150 (135-240) 	100 (90-160) 1,*
Фосфор 	125 (112,5-156,2) 	16 (14-20)1
Железо 	16 (14,4-20) 	114 (103-143)1,*
Медь 	2 (1,8-2,5) 	200 (180-250)2,*
Марганец 	2,5 (2,25-3,12) 	125 (113-156)2,*
Селен, мкг 	25 (23-40) 	36 (33-57) 1
Хром, мкг 	25 (23-40) 	50 (46-80)2
Молибден, мкг 	25 (23-40) 	36 (33-57)2
Ванадий, мкг 	10 (9-16) 	67 (60-107)2
`;






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

    let obj = {}

    for (let i = 0; i < stringsArr.length; i++) {
        const element = stringsArr[i];

        let itemObj = {};
        itemObj = stringToObj(stringsArr[i]);

        // v.2 add to obj
        let name = itemObj['name'];
        obj[name] = itemObj;
    }


    debugger;
    return obj;
}

function stringToObj(str) {

    let arr = str.split('\t');

    let obj = {};
    obj['name'] = arr[0];
    obj['value'] = arr[1];
    // obj['share_of_daily_intake'] = arr[0];
    obj['shareOfDailyIntake'] = arr[2];


    // debugger
    // return str;
    return obj;
}

function splitTextByStrings(text) {

    let arr = text.split('\n');

    return arr;
}




console.log(makeVitamineObjectFromTableString(text));

// console.log(splitTextByStrings(text));






debugger