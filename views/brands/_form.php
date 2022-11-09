<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Brands $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="brands-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'description_short')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'logo_url')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'website_link')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'country')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
