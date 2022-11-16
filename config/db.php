<?php

return [
    // 'class' => 'yii\db\Connection',
    // 'dsn' => 'mysql:host=localhost;dbname=yii2basic',
    // 'username' => 'root',
    // 'password' => '',
    // 'charset' => 'utf8',

    // Schema cache options (for production environment)
    //'enableSchemaCache' => true,
    //'schemaCacheDuration' => 60,
    //'schemaCache' => 'cache',



    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=healthbook_db',
    'username' => 'root',
    'password' => '',
    'charset' => 'utf8',    
];



// INSERT INTO `courses_types` (`title`, `description`)
// VALUES (
//   'Vitrum',
//   ''
// );

// INSERT INTO `courses_types` (`title`, `description`)
// VALUES (
//   'Витамины',
//   'Витамины – органические вещества, необходимые для нормального функционирования организма. Витамины не вырабатываются в организме человека, либо вырабатываются, но лишь в малом количестве. Они выполняют функцию регуляторов обмена веществ, потому их присутствие в нашем рационе просто необходимо. Дефицит витаминов или их несбалансированное потребление негативно сказывается на здоровье и работоспособности, ровно как и их потребление выше рекомендуемых норм.' 
// );

// INSERT INTO `courses_types` (`title`, `description`)
// VALUES (
//   'Минералы',
//   'Человеческий организм может синтезировать некоторые витамины, но не может произвести ни одного минерала. А минералы являются жизненно необходимыми компонентами тканей организма - биологическими активаторами, незаменимыми для функций организма. Чаще всего минералы усваиваются и присутствуют в организме в виде солей. Минералы делятся на две группы – макроэлементы и микроэлементы. Потребность человека в макроэлементах исчисляется в граммах, микроэлементов – в миллиграммах. Введение дополнительного количества минералов в рацион спортсмена рекомендуется в период тяжелых нагрузок, при смене часовых поясов, тренировках в горах, воздействии других неблагоприятных факторов. Далее приведем примеры некоторых минералов и их положительного действия на организм.' 
// );

// INSERT INTO `courses_types` (`title`, `description`)
// VALUES (
//   'Нутриенты',
//   'Питательные вещества, которые обычно из пищи поступают в количествах недостаточных для нормального функционирования организма. Например рыбий жир, аминокислоты.' 
// );

// !WRONG
// INSERT INTO `courses_types` (`title`, `description`)
// VALUES ( (
//         'Минералы',
//         'Человеческий организм может синтезировать некоторые витамины, но не может произвести ни одного минерала. А минералы являются жизненно необходимыми компонентами тканей организма - биологическими активаторами, незаменимыми для функций организма. Чаще всего минералы усваиваются и присутствуют в организме в виде солей. Минералы делятся на две группы – макроэлементы и микроэлементы. Потребность человека в макроэлементах исчисляется в граммах, микроэлементов – в миллиграммах. Введение дополнительного количества минералов в рацион спортсмена рекомендуется в период тяжелых нагрузок, при смене часовых поясов, тренировках в горах, воздействии других неблагоприятных факторов. Далее приведем примеры некоторых минералов и их положительного действия на организм.  '
//     ),
//     (
//         'Нутриенты',
//         'Питательные вещества, которые обычно из пищи поступают в количествах недостаточных для нормального функционирования организма. Например рыбий жир, аминокислоты. '
//     )
// );


// TEMPLATE
// INSERT INTO `users` (`title`, `description`)
// VALUES (
//   'Витамины',
//   'Витамины ' 
// );

// INSERT INTO `brands` (`title`, `country`, `description_short`, `logo_url`, `website_link` )
// VALUES (
//   'Витамины',
//   'asd', 
//   'asd', 
//   'asd', 
//   'asd', 
// );


// INSERT INTO `brands` (`title`, `country`, `description_short`, `logo_url`, `website_link` )
// VALUES (
//   'Vitrum',
//   'Germany', 
//   'Витрум® — это широкая линейка продуктов, представленная в категории витамины и минералы, каждый из продуктов содержит сбалансированную комбинацию витаминов и минералов, или отдельно витамины/минералы, в дозировках [1] с учетом потребностей различных групп и возрастов.', 
//   'asd', 
//   'https://vitrum.ru/'
// );


// INSERT INTO `brands` (`title`, `description_short`, `logo_url`, `website_link`, `country`)
// VALUES (
//   'Liksivum',
//   'Russia', 
//   'asd', 
//   'asd', 
//   'asd', 
// );

// INSERT INTO `brands` (`title`, `country`, `description_short`, `logo_url`, `website_link` )
// VALUES (
//   'Детримакс',
//   'Poland', 
//   'Витамин D для всей семьи.', 
//   'asd', 
//   'https://detrimax.ru/', 
// );



// TEMPLATE
// INSERT INTO `brands` (`title`, `product_name`, `medicine_name`, `type_id`, `date_start`, `date_finish`, `dosage`, `dosage_per_tablet`, `user_id` )
// VALUES (
//   'Vitrum',
//   'asdf', 
//   'asdf', 
//   'asdf', 
//   'asdf', 
//   'asdf', 
//   'asdf', 
//   'asdf', 
//   'asdf', 
//   'asdf', 
//   'asdf', 

// );

// INSERT INTO `courses` (`title`, `product_name`, `medicine_name`, `type_id`,
//  `date_start`, `date_finish`, `dosage`, `dosage_per_tablet`, `user_id` )
// VALUES (
//   'D vitamine',
//   'Detrimax 1000', 
//   'D3', 
//     1, 
//   '2022-11-07 23:51:15', 
//   '2022-11-07 23:51:10', 
//   1, 
//   '1000me', 
//   1

// );

// INSERT INTO `courses` (`title`, `product_name`, `medicine_name`, `type_id`, `date_start`, `date_finish`, `dosage`, `dosage_per_tablet`, `user_id` )
// VALUES (
//   'C vitamine',
//   'C vitamine', 
//   'C', 
//     1, 
//     '2022-11-07 23:51:15', 
//     '2022-11-07 23:51:10', 
//   1, 
//   0.900, 
//   1

// );

// INSERT INTO `courses` (`title`, `product_name`, `medicine_name`, `type_id`,
//  `date_start`, `date_finish`, `dosage`, `dosage_per_tablet`, `user_id` )
// VALUES (
//   'Fish fat',
//   'Omega 3', 
//   'Fish fat', 
//   3, 
//   '2022-11-07 23:51:15', 
//   '2022-11-07 23:51:10', 
//   1, 
//   1.375, 
//   1

// );


// INSERT INTO `blood_count_groups` (`title`, `description`)
// VALUES (
//   'Общеклинические Исследования Крови',
//   ' ' 
// );


// INSERT INTO `blood_count_groups` (`title`, `description`)
// VALUES (
//   'Биохимические Исследования Крови',
//   ' ' 
// );


// INSERT INTO `blood_count_groups` (`title`, `description`)
// VALUES (
//   'Витамины',
//   ' ' 
// );


// INSERT INTO `blood_count_groups` (`title`, `description`)
// VALUES (
//   'Гормональные Исследования Крови',
//   ' ' 
// );














// TEMPALTE  blood_test_research
// INSERT INTO `blood_test_research` ( `name`, `title`, `unit`, `normal_values_min`, `normal_values_max` )
// VALUES (
//   'Витамины',
//   'asd', 
//   'asd', 
//   1234, 
//   7890, 
// );



// INSERT INTO `blood_test_research` ( `name`, `title`, `unit`, `normal_values_min`, `normal_values_max` )
// VALUES (
//   'hemoglobin',
//   'Гемоглобин', 
//   'г/л', 
//   132, 
//   173, 
// );


// INSERT INTO `blood_test_research` ( `name`, `title`, `unit`, `normal_values_min`, `normal_values_max` )
// VALUES (
//   'erythrocytes',
//   'Эритроциты', 
//   'x10*12/л', 
//   4.3, 
//   5.7, 
// );


// INSERT INTO `blood_test_research` ( `name`, `title`, `unit`, `normal_values_min`, `normal_values_max` )
// VALUES (
//   'hematocrit',
//   'Гематокрит', 
//   '%', 
//   39, 
//   49, 
// );


// INSERT INTO `blood_test_research` ( `name`, `title`, `unit`, `normal_values_min`, `normal_values_max` )
// VALUES (
//   'MCV',
//   'Средний объем эритроцитов (MCV)', 
//   'фл', 
//   80, 
//   100, 
// );


// INSERT INTO `blood_test_research` ( `name`, `title`, `unit`, `normal_values_min`, `normal_values_max` )
// VALUES (
//   'МСН',
//   'Среднее содержание Hb в эритроците (МСН)', 
//   'пг', 
//   27, 
//   34, 
// );


// INSERT INTO `blood_test_research` ( `name`, `title`, `unit`, `normal_values_min`, `normal_values_max` )
// VALUES (
//   'MCHC',
//   'Средняя концентрация Hb в эритроцитах (МСНС)', 
//   'г/л', 
//   300, 
//   380, 
// );


// INSERT INTO `blood_test_research` ( `name`, `title`, `unit`, `normal_values_min`, `normal_values_max` )
// VALUES (
//   'color_indicator',
//   'Цветовой показатель', 
//   '', 
//   0.85, 
//   1.00, 
// );


// INSERT INTO `blood_test_research` ( `name`, `title`, `unit`, `normal_values_min`, `normal_values_max` )
// VALUES (
//   'platelets',
//   'Тромбоциты', 
//   'x10*9/л', 
//   180, 
//   320, 
// );


// INSERT INTO `blood_test_research` ( `name`, `title`, `unit`, `normal_values_min`, `normal_values_max` )
// VALUES (
//   'leukocytes',
//   'Лейкоциты', 
//   'x10*9/л', 
//   4.5, 
//   11.3, 
// );


// INSERT INTO `blood_test_research` ( `name`, `title`, `unit`, `normal_values_min`, `normal_values_max` )
// VALUES (
//   'granulocytes_immature',
//   'Незрелые гранулоциты', 
//   '10*9/л', 
//   0, 
//   0.09, 
// );


// INSERT INTO `blood_test_research` ( `name`, `title`, `unit`, `normal_values_min`, `normal_values_max` )
// VALUES (
//   'neutrophils',
//   'Нейтрофилы сегментоядерные', 
//   'x10*9/л', 
//   1.60, 
//   7.90, 
// );

