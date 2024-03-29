<?php

$params = require __DIR__ . '/params.php';
$db = require __DIR__ . '/db.php';

$config   = [
    'id' => 'basic',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'components' => [
        // 'request' => [
        //     // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
        //     'cookieValidationKey' => 'arJpdfMzj1hlTFsPXIE1_lkDvUWCJ8YN',

        //     'parsers' => [
        //         'application/json' => 'yii\web\JsonParser',
        //     ]

        // ],

        // URL Manager for REST API
        'request' => [
            'cookieValidationKey' => 'arJpdfMzj1hlTFsPXIE1_lkDvUWCJ8YN',
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ]
        ],    
        
 
        
        

        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure transport
            // for the mailer to send real emails.
            'useFileTransport' => true,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => $db,

        // URL Manager
        // URL Manager for обыные страницы сайта
        // 'urlManager' => [
        //     'enablePrettyUrl' => true,
        //     'showScriptName' => false,
        //     'rules' => [
        //     ],
        // ],
        

        // URL Manager for REST API
        'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [
                // ['class' => 'yii\rest\UrlRule', 'controller' => 'user'],
                // ['class' => 'yii\rest\UrlRule', 'controller' => 'courses-types'],
                // ['class' => 'yii\rest\UrlRule', 'controller' => 'courses'],
                [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => [ 
                        'courses', 
                        'courses-types', 
                        'blood-test-research',
                        'goods',
                        'brands'
                    ]
                ],
            ],
        ]

    ],
    'params' => $params,
    // 'params' => [
    //     'thumbnail.size' => [128, 128], 
    // ],
    'language' => 'ru-RU', // <- здесь!
    // 'on beforeRequest' => function ($event) {
    //     // ...
    //     echo ('Hi this is beforeRequest event!');
    // }  

    // 'response' => [
    //     // ...
    //     'formatters' => [
    //         \yii\web\Response::FORMAT_JSON => [
    //             'class' => 'yii\web\JsonResponseFormatter',
    //             'prettyPrint' => YII_DEBUG, // используем "pretty" в режиме отладки
    //             'encodeOptions' => JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE,
    //             // ...
    //         ],
    //     ],
    // ],    
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];
}

return $config;
