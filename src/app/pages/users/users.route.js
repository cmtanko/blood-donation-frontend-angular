"use strict";

import usersTemplate from './users.html';
import usersController from './users.controller';

function routeConfig($stateProvider) {
    'ngInject';
    $stateProvider
        .state('users', {
            url: '/users',
            templateUrl: usersTemplate,
            controller: usersController,
            controllerAs: 'ctrl'
        });
}

export default routeConfig;