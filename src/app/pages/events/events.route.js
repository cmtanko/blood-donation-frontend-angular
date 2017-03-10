"use strict";

import eventsTemplate from './events.html';
import eventsController from './events.controller';

function routeConfig($stateProvider) {
    'ngInject';
    $stateProvider
        .state('events', {
            url: '/events',
            templateUrl: eventsTemplate,
            controller: eventsController,
            controllerAs: 'ctrl'
        });
}

export default routeConfig;