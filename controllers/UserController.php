<?php

namespace app\controllers;

use yii\rest\ActiveController;


class UserController extends ActiveController
{
    public $modelClass = 'app\models\User';
}













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

//         $query = CoursesTypes::find()->all();  // +

//         return $this->render('index', 
//             [ 'coursesTypes' => $query ]
//         );

//     }

// }
