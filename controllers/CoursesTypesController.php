<?php
// CoursesTypesController  CoursesTypes  Controller
namespace app\controllers;

use app\models\CoursesTypes; 
// ==


/**
 * BrandsController implements the CRUD actions for Brands model.
 */
class CoursesTypesController extends \yii\web\Controller
{

    public function actionIndex()
    {
        // v1
        // return $this->render('index');

        // v2
        // $coursesTypes = new CoursesTypes();
        // return $this->render('index', ['coursesTypes' => $coursesTypes ]);

        // v3
        // $query = CoursesTypes::find();
        // $query = CoursesTypes::find()->orderBy('name')->all(); // 
        // $query = CoursesTypes::find()->orderBy('title')->all(); // +
        $query = CoursesTypes::find()->all();  // +
        // $query = CoursesTypes::find();  // -

        return $this->render('index', 
            [ 'coursesTypes' => $query ]
        );

    }

}
