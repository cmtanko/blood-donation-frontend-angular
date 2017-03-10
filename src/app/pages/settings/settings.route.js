"use strict";

import settingsTemplate from './settings.html';
import settingsController from './settings.controller';

function routeConfig($stateProvider) {
    'ngInject';
    $stateProvider
        .state('settings', {
            url: '/settings',
            templateUrl: settingsTemplate,
            controller: settingsController,
            controllerAs: 'ctrl'
        });
}

export default routeConfig;