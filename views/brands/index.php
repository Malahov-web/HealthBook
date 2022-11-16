<?php

use app\models\Brands;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\BrandsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Brands';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="brands-index">

    <h1><?= Html::encode($this->title) ?></h1>

<?php
// EXAMPE ::
class  MyClass {
    const CONST_VALUE = 'Значение константы';
}
$classname = 'MyClass'; // это мы присвоили переменной имя класса, чтобы следующие 2 строчки были одинаковы
echo $classname::CONST_VALUE;   // 'Значение константы'
echo MyClass::CONST_VALUE;      // 'Значение константы'


// echo \Yii::$app->componentID;
// formatter
echo '<br>' . Yii::$app->formatter->asDate('2014-01-01', 'long'); 
echo '<br>' . Yii::$app->formatter->asPercent(0.125, 1); // выведет: 12.50%

// session
$session = Yii::$app->session;
// echo $session;
?> <pre> <?php  // var_dump($session); ?> </pre> 


<?php
// $model = new \app\models\ContactForm;
$model = new \app\models\Brands;

// "name" - это атрибут модели ContactForm
// $model->name = 'example';
// echo '<br>' . $model->name;
?> <pre> <?php   var_dump($model); ?> </pre> 


<?php
// Модель является обходимой(traversable) с использованием foreach.
foreach ($model as $name => $value) {
    echo "$name: $value\n";
}

// scenarios
echo '<br>' . $model->scenarios();
?> <pre> <?php   var_dump($model->scenarios()); ?> </pre> <?php

?>




<?php
?>

    <p>
        <?= Html::a('Create Brands', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'title',
            'description_short:ntext',
            'logo_url:url',
            'website_link',
            //'country',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, Brands $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
