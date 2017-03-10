"use strict";

import route from './settings.route';

const settingsPageModule = angular.module('settings-module', ['ui.router']);

settingsPageModule.config(route);

export default settingsPageModule;