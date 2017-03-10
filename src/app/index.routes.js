'use strict';


import asyncTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/async-page-example/async.html';


function routeConfig($locationProvider, $urlRouterProvider, $stateProvider, resolverProvider) {
  'ngInject';


  $stateProvider
    .state('async', {
      url: '/async',
      templateUrl: asyncTemplate,
      controller: 'asyncController',
      resolve: {
        asyncPreloading: resolverProvider.asyncPagePrealoading
      }
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
  .config(routeConfig);

