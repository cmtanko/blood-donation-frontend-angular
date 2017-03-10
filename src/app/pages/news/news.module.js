"use strict";

import route from './news.route';

const newsPageModule = angular.module('news-module', ['ui.router']);

newsPageModule.config(route);

export default newsPageModule;