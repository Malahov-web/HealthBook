<?php

// v.1

// // CoursesTypesController  CoursesTypes  Controller
// namespace app\controllers;

// use app\models\CoursesTypes; 
// // ==


// /**
//  * BrandsController implements the CRUD actions for Brands model.
//  */
// class CoursesTypesController extends \yii\web\Controller
// {

//     public function actionIndex()
//     {
//         // v1
//         // return $this->render('index');

//         // v2
//         // $coursesTypes = new CoursesTypes();
//         // return $this->render('index', ['coursesTypes' => $coursesTypes ]);

//         // v3
//         // $query = CoursesTypes::find();
//         // $query = CoursesTypes::find()->orderBy('name')->all(); // 
//         // $query = CoursesTypes::find()->orderBy('title')->all(); // +
//         $query = CoursesTypes::find()->all();  // +
//         // $query = CoursesTypes::find();  // -

//         return $this->render('index', 
//             [ 'coursesTypes' => $query ]
//         );

//     }

// }




// v.2  for JSON API

namespace app\controllers;

use yii\rest\ActiveController;


class CoursesTypesController extends ActiveController
{
    public $modelClass = 'app\models\CoursesTypes';


    // Сериализатор  /  Сериализация данных 
    // public $serializer = [
    //     'class' => 'yii\rest\Serializer',
    //     'collectionEnvelope' => 'items',
    // ];


    public function actions()
    {
        $actions = parent::actions();
    
        // отключить действия "delete" и "create"
        unset($actions['delete'], $actions['create']);
    
        // настроить подготовку провайдера данных с помощью метода "prepareDataProvider()"
        // $actions['index']['prepareDataProvider'] = [$this, 'prepareDataProvider'];
    
        return $actions;
    }    
}

// CREATE TABLE `measurements` (
// 	`id` INT(11) NOT NULL AUTO_INCREMENT,
// 	`title` CHAR(128) NOT NULL COLLATE 'utf8_general_ci',
	
// 	`temperature` INT(11) NOT NULL,	
// 	`pressure` INT(11) NOT NULL,	
// 	`pulse` INT(11) NOT NULL,
	
// 	`blood_count_id` INT(11) NOT NULL,
	
// 	`birthdate` TIMESTAMP NULL DEFAULT NULL,
// 	`date_added` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
        
// 	`description_short` TEXT(65535) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
// 	`logo_url` CHAR(64) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
// 	`website_link` CHAR(64) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
// 	`country` CHAR(64) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
// 	PRIMARY KEY (`id`) USING BTREE
// )
// COLLATE='utf8_general_ci'
// ENGINE=InnoDB
// AUTO_INCREMENT=4
// ;
