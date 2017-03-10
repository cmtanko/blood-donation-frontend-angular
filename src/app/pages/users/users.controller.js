'use strict';

import  _ from 'lodash/core';
import moment from 'moment';
import angularLogo from '_images/angular.png';

function UsersController($log) {
  'ngInject';

  $log.debug('Hello from users controller!');


	this.lodash_version = _.VERSION;



	this.moment_version = moment.version;


    this.angularLogo = angularLogo;

}

export default UsersController;
