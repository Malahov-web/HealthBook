<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "blood_test_research".
 *
 * @property int $id
 * @property string $name
 * @property string $title
 * @property string $unit
 * @property int $normal_values_min
 * @property int|null $normal_values_max
 */
class BloodTestResearch extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'blood_test_research';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'title', 'unit', 'normal_values_min'], 'required'],
            [['normal_values_min', 'normal_values_max'], 'integer'],
            [['name', 'title'], 'string', 'max' => 128],
            [['unit'], 'string', 'max' => 64],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'title' => 'Title',
            'unit' => 'Unit',
            'normal_values_min' => 'Normal Values Min',
            'normal_values_max' => 'Normal Values Max',
        ];
    }
}
