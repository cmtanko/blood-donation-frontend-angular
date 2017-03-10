'use strict';

import  _ from 'lodash/core';
import moment from 'moment';
import angularLogo from '_images/angular.png';

function EventsController($log) {
  'ngInject';

  $log.debug('Hello from events controller!');


	this.lodash_version = _.VERSION;



	this.moment_version = moment.version;


    this.angularLogo = angularLogo;

}

export default EventsController;
