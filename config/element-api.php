<?php

use craft\elements\Entry;
use craft\helpers\UrlHelper;

return [
    'endpoints' => [
        'v1/events/current' => function() {
            return [
                'elementType' => Entry::class,
                'criteria' => ['section' => 'live'],
                'transformer' => function(Entry $entry) {
                    return [
                        'title' => $entry->title,
                        'description' => $entry->description,
                        'next_timestamp' => $entry->next_timestamp
                    ];
                },
            ];
        },
    ]
];