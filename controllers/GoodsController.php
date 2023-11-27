<?php

// // GoodsController  Goods  Controller

// v.2  for JSON API

namespace app\controllers;

// use yii\rest\ActiveController;

class GoodsController extends \yii\rest\ActiveController
{

    public $modelClass = 'app\models\Goods';


    public function actionView($id)
    {
        # code...
        // $query = GoodsTypes::find()->all();  // +
        
        $model = GoodsTypes::findOne($id);  // +

        return $model;
    }


    // public function behaviors()
    // {
    //     $behaviors = parent::behaviors();
        

    //     $behaviors['corsFilter'] = [
    //         'class' => \yii\filters\Cors::class,
    //         'cors' => [
    //             'Origin' => ['*'],
    //             'Access-Control-Allow-Origin' => ['*'],
    //             'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    //             'Access-Control-Allow-Credentials' => null,
    //             'Access-Control-Allow-Headers' => [
    //                 'Access-Control-Allow-Headers',
    //                 'Origin',
    //                 'Accept',
    //                 'X-Requested-With',
    //                 'Content-Type',
    //                 'Access-Control-Request-Method',
    //                 'Access-Control-Request-Headers',
    //                 'Authorization',
    //                 'Refresh-Token',
    //             ],
    //         ],

    //     ];
    //     return $behaviors;
    // }

    // public function actions()
    // {
    //     return [
    //         'options' => [
    //             'class' => 'yii\rest\OptionsAction',
    //         ],
    //     ];
    // }



}



// v.2 

// v.1 - из поста 1
// https://yiiframework.ru/forum/viewtopic.php?p=262313&sid=4b8485d1b00f73f5e7b04783cafc0286#p262313


// public function behaviors()
// {
//     $behaviors = parent::behaviors();
    
// ...

//     $behaviors['corsFilter'] = [
//         'class' => \yii\filters\Cors::class,
//         'cors' => [
//             'Origin' => ['*'],
//             'Access-Control-Allow-Origin' => ['*'],
//             'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
//             'Access-Control-Allow-Credentials' => null,
//             'Access-Control-Allow-Headers' => [
//                 'Access-Control-Allow-Headers',
//                 'Origin',
//                 'Accept',
//                 'X-Requested-With',
//                 'Content-Type',
//                 'Access-Control-Request-Method',
//                 'Access-Control-Request-Headers',
//                 'Authorization',
//                 'Refresh-Token',
//             ],
//         ],

//     ];
//     return $behaviors;
// }

// public function actions()
// {
//     return [
//         'options' => [
//             'class' => 'yii\rest\OptionsAction',
//         ],
//     ];
// }