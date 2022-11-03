<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;

$this->title = 'Вход';
$this->params['breadcrumbs'][] = $this->title;
?>


<div class="site-about">



    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        Заполните форму ниже:
    </p>

    <?php $form = ActiveForm::begin(); ?>

        <?// = $form->field($model, 'name') ?>
        <?= $form->field($model, 'name')->label('Ваше имя') ?>

        <?= $form->field($model, 'email') ?>

        <div class="form-group">
            <?= Html::submitButton('Отправить', ['class' => 'btn btn-primary']) ?>
        </div>

    <?php ActiveForm::end(); ?>
</div>
