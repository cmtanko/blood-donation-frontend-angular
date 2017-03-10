'use strict';

import components from './index.components';
import config from './index.config';
import run from './index.run';

import uiRouter from 'angular-ui-router';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import mainModule from './pages/main/main.module';
import usersModule from './pages/users/users.module';
import eventsModule from './pages/events/events.module';
import newsModule from './pages/news/news.module';
import settingsModule from './pages/settings/settings.module';




const App = angular.module(
  "Blood-Donation-Frontend-Angular", [
    // plugins
    uiRouter,
    "ngAnimate", 
	"ngCookies", 
	"ngTouch", 
	"ngSanitize", 
	"ngMessages", 
	"ngAria", 
	"ngResource", 
	"oc.lazyLoad",

    // core
    coreModule.name,

    // components
    indexComponents.name,

    // routes
    indexRoutes.name,

    // pages
    mainModule.name,
    usersModule.name,
    eventsModule.name,
    newsModule.name,
    settingsModule.name
  ]
);

App
  .config(config)
  .run(run);



export default App;
