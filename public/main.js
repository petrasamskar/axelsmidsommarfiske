var app = angular.module('midsummerFishing', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'main.html',
            controller: 'mainController'
        })
        .state('rules', {
            url: '/rules',
            templateUrl: 'rules.html',
            controller: 'rulesController'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'adscores.html',
            controller: 'adminController'
        })
        .state('images', {
            url: '/images',
            templateUrl: 'images.html',
            controller: 'imagesController'
        })
        .state('statistics', {
            url: '/statistics',
            templateUrl: 'statistics.html',
            controller: 'statisticsController'
        })
});