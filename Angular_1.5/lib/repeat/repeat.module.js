import RepeatConfig from './repeat.config';
import RepeatController from './repeat.controller';

import './repeat.html';
require('./repeat.scss');

let repeatModule = angular.module('demo.repeat', []);
//console.log(repeatModule);

//baloonsliderModule.controller('BaloonsliderController', BaloonsliderController);
repeatModule.component('repeat', {
	templateUrl: 'lib/repeat/repeat.html',
	controllerAs: 'repeat',
	bindings:{
		val:'='
	},
	controller: RepeatController
});
repeatModule.config(RepeatConfig);
export default repeatModule = repeatModule.name
