requirejs.config({
    baseUrl: './js',
    paths: {
        'jquery': './vendor/jquery',
        'json2':'./vendor/json2',
        'underscore':'./vendor/underscore',
        'backbone':'./vendor/backbone',
        'bootstrap':'./vendor/bootstrap/js/bootstrap'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery','json2'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

requirejs(["jquery","underscore","backbone","./js/View.Contacts.js"], function($,_,Backbone) {

    Backbone.history.start();
});