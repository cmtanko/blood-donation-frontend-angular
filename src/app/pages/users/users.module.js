"use strict";

import route from './users.route';

const usersPageModule = angular.module('users-module', ['ui.router']);

usersPageModule.config(route);

export default usersPageModule;