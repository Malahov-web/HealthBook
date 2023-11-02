<?php

namespace app\models;

use Yii;

    // `id` INT UNSIGNED NOT NULL auto_increment ,    
	// `title` CHAR(128) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	// `name` CHAR(128) NULL DEFAULT NULL ,
	// `type` INT NULL DEFAULT NULL ,
	// `brand` INT NULL,
	// `manufacturer` INT NULL,
	// `description` TEXT NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	// `composition` JSON NULL DEFAULT NULL,

    
/**
 * This is the model class for table "goods".
 


 * @property int $id
 * @property string $title
 * @property string $name
 * @property int|null $type

 * @property int $brand * 
 * @property int $manufacturer
 * 
 * @property string $description
 * @property array  $composition
 * @property int  $release_form
 */
class Goods extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'goods';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'name',   'brand'], 'required'], // Обязательные            
            [['type', 'brand', 'manufacturer'], 'integer'],            
            // [['date_start', 'date_finish'], 'safe'],
            // [['dosage_per_tablet'], 'number'],
            
            [['title', 'name', 'description'], 'string', 'max' => 128],
            
            [['release_form'], 'integer'],
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
            'name' => 'Name',
            'type' => 'Type',
            'brand' => 'Brand',
            'manufacturer' => 'Manufacturer',
            'description' => 'Composition',

        ];
    }
}


// `Id` Int Unsigned Not Null Auto_Increment ,    
// `Title` Char(128) Null Default Null Collate 'Utf8_General_Ci',
// `Name` Char(128) Null Default Null ,
// `Type` Int Null Default Null ,
// `Brand` Int Null,
// `Manufacturer` Int Null,
// `Description` Text Null Default Null Collate 'Utf8_General_Ci',
// `Composition` Json Null Default Null,