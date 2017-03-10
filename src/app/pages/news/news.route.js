"use strict";

import newsTemplate from './news.html';
import newsController from './news.controller';

function routeConfig($stateProvider) {
    'ngInject';
    $stateProvider
        .state('news', {
            url: '/news',
            templateUrl: newsTemplate,
            controller: newsController,
            controllerAs: 'ctrl'
        });
}

export default routeConfig;