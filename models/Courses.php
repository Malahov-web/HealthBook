<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "courses".
 *
 * @property int $id
 * @property string $title
 * @property string $product_name
 * @property string $medicine_name
 * @property int|null $type_id
 * @property string $date_start
 * @property string $date_finish
 * @property string $dosage
 * @property float $dosage_per_tablet
 * @property int|null $user_id
 */
class Courses extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'courses';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'product_name', 'medicine_name', 'date_finish', 'dosage'], 'required'],
            [['type_id', 'user_id'], 'integer'],
            [['date_start', 'date_finish'], 'safe'],
            [['dosage_per_tablet'], 'number'],
            [['title', 'product_name', 'medicine_name'], 'string', 'max' => 128],
            [['dosage'], 'string', 'max' => 64],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'product_name' => 'Product Name',
            'medicine_name' => 'Medicine Name',
            'type_id' => 'Type ID',
            'date_start' => 'Date Start',
            'date_finish' => 'Date Finish',
            'dosage' => 'Dosage',
            'dosage_per_tablet' => 'Dosage Per Tablet',
            'user_id' => 'User ID',
        ];
    }
}
