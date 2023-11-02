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


}
