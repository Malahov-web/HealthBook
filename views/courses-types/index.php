<?php

/** @var yii\web\View $this */
/** @var coursesTypes */

use yii\helpers\Html;
use yii\widgets\LinkPager;
?>


<h1>courses-types/index</h1>

<p>
    You may change the content of this page by modifying
    the file <code><?= __FILE__; ?></code>.
</p>





<h1>Courses types</h1>

<?php
// coursesTypes

$model = new \app\models\Brands;

// "name" - это атрибут модели ContactForm
// $model->name = 'example';
// echo '<br>' . $model->name;
?> <pre> <?php   // var_dump($model); ?> </pre> 
?> <pre> <?php   // var_dump($coursesTypes); ?> </pre>  






<table>
<?php /* foreach ($coursesTypes as $coursesType): ?>
    <tr>
        <td>
            <?= Html::encode("{$coursesType->id}") ?>
        </td>
        <td>
            <?= Html::encode("{$coursesType->title}") ?>
        </td>
        <td>
            <?= Html::encode("{$coursesType->description}") ?>
        </td>
    </tr>
<?php endforeach
; */ ?>

</table>

<dl>
<?php foreach ($coursesTypes as $coursesType): ?>       
    <dt>
        <?= Html::encode("{$coursesType->title}") ?>
    </dt>
    <dd>
        <?= Html::encode("{$coursesType->description}") ?>
    </dd>
<?php endforeach; ?>     
</dl>





<? // = LinkPager::widget(['pagination' => $pagination]) ?>
