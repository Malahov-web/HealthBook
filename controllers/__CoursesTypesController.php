<?php
// CoursesTypesController  CoursesTypes  Controller
namespace app\controllers;

use app\models\CoursesTypes;

/**
 * CoursesTypesController implements the CRUD actions for Brands model.
 */

// class CoursesTypesController extends Controller
// {
    // /**
    //  * @inheritDoc
    //  */

    //  public function behaviors(Type $var = null)
    //  {
    //     return array_merge(
    //         parent::behaviors(),
    //         [
    //             'verbs' => [
    //                 'class' => VerbFilter::className(),
    //                 'actions' => [
    //                     'delete' => ['POST'],
    //                 ],
    //             ],
    //         ]
    //     );
    // }

    // /**
    //  * Lists all CoursesTypes models.
    //  *
    //  * @return string
    //  */
    // public function actionIndex()
    // {
    //     $searchModel = new CoursesTypesSearch();
    //     $dataProvider = $searchModel->search($this->request->queryParams);

    //     return $this->render('index', [
    //         'searchModel' => $searchModel,
    //         'dataProvider' => $dataProvider,
    //     ]);
    // }    

    // /**
    //  * Displays a single Brands model.
    //  * @param int $id ID
    //  * @return string
    //  * @throws NotFoundHttpException if the model cannot be found
    //  */
    // public function actionView($id)
    // {
    //     return $this->render('view', [
    //         'model' => $this->findModel($id),
    //     ]);
    // }
    
// }



class CoursesTypesController extends \yii\web\Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }

}


