<?php
use yii\helpers\Html;

$this->title = 'Вход выполнен';
$this->params['breadcrumbs'][] = $this->title;
?>

<!-- <p>Вы ввели следующую информацию:</p>

<ul>
    <li><label>Name</label>:  <?= Html::encode($model->name) ?></li>
    <li><label>Email</label>: <?= Html::encode($model->email) ?></li>
</ul> -->


<div class="site-about">



    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        Вы ввели следующую информацию:
    </p>

    <ul>
        <li>
            <label>Name</label>:  <?= Html::encode($model->name) ?>
        </li>

        <li>
            <label>Email</label>: <?= Html::encode($model->email) ?>
        </li>
    </ul>

    <code><?= __FILE__ ?></code>
</div>

