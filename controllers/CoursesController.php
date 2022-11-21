<?php

// // CoursesController  Courses  Controller

// v.2  for JSON API

namespace app\controllers;

// use yii\rest\ActiveController;

class CoursesController extends \yii\rest\ActiveController
{

    public $modelClass = 'app\models\Courses';



    

    // public function actionView($id)
    // {
    //     $model = Post::findOne($id);
    //     if ($model === null) {
    //         throw new NotFoundHttpException;
    //     }

    //     return $this->render('view', [
    //         'model' => $model,
    //     ]);
    // }




    public function actionView($id)
    {
        # code...
        // $query = CoursesTypes::find()->all();  // +
        
        $model = CoursesTypes::findOne($id);  // +

        return $model;
    }
    
}
