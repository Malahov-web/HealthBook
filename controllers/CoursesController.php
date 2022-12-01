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




    // use yii\filters\auth\HttpBasicAuth; 

    
    // FROM https://yiiframework.ru/forum/viewtopic.php?t=47834
    // public function behaviors()
    // {
    //     $behaviors = parent::behaviors();

    //     // add CORS filter
    //     $behaviors['corsFilter'] = [
    //         'class' => \yii\filters\Cors::className(),
    //         'cors' => [
    //             'Origin' => ['*'],
    //             'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    //             'Access-Control-Allow-Credentials' => true,
    //         ],
              
    //     ];
  

    //     unset($behaviors['authenticator']);
    //     $behaviors['authenticator'] = [
    //         'class' =>  HttpBearerAuth::className(),
    //     ];

    //     $behaviors['access'] = [
    //         'class' => AccessControl::className(),
    //         'rules' => [                
    //             [
    //                 'allow' => true,
    //                 'roles' => ['@'],
    //             ],
    //         ],
    //     ];

    //     return $behaviors;
    // }    
    
}
