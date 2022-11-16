<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "brands".
 *
 * @property int $id
 * @property string $title
 * @property string|null $description_short
 * @property string|null $logo_url
 * @property string|null $website_link
 * @property string|null $country
 */
class Brands extends \yii\db\ActiveRecord
{

    const SCENARIO_LOGIN = 'login';
    const SCENARIO_REGISTER = 'register';
    
    
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'brands';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title'], 'required'],
            [['description_short'], 'string'],
            [['title'], 'string', 'max' => 128],
            [['logo_url', 'website_link', 'country'], 'string', 'max' => 64],
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
            'description_short' => 'Description Short',
            'logo_url' => 'Logo Url',
            'website_link' => 'Website Link',
            'country' => 'Country',
        ];
    }



    public function scenarios()
    {
        return [
            self::SCENARIO_LOGIN => ['username', 'password'],
            self::SCENARIO_REGISTER => ['username', 'email', 'password'],
        ];
    }    
}
