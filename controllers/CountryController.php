<?php

namespace app\controllers;

use Yii;

use yii\web\Controller;
use yii\data\Pagination;
use app\models\Country;


class CountryController  extends Controller
{
    
    // $title = 'asd';

    public function actionIndex ()
    {
        # code...


        // получаем все строки из таблицы "country" и сортируем их по "name"
        // $countries = Country::find()->orderBy('name')->all();  
        
        $query = Country::find();
        

        $pagination = new Pagination([
            'defaultPageSize' => 5,
            'totalCount' => $query->count(),
        ]);        

        $countries = $query->orderBy('name')
            ->offset($pagination->offset)
            ->limit($pagination->limit)
            ->all();       
            
        return $this->render('index', [
            'countries' => $countries,
            'pagination' => $pagination,
        ]);            
    }




    
    public function getCountriesList(Type $var = null)
    {
        # code...
    }

    
}

