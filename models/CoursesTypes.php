<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "courses_types".
 *
 * @property int $id
 * @property string $title
 * @property string $description
 */
class CoursesTypes extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'courses_types';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'description'], 'required'],
            [['description'], 'string'],
            [['title'], 'string', 'max' => 128],
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
            'description' => 'Description',
        ];
    }

    // public function fields()
    // {
    //     # code...
    //     return [
    //         // 'id',
    //         'title',
    //         'description',
    //     ];
    // }

    public function fields()
    {
        # code...
        $fields = parent::fields();
        unset($fields['description']);
        
        return $fields;
    }    
}
