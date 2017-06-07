import UserimageConfig from './userimage.config';
import UserimageController from './userimage.controller';

import './userimage.html';
require('./userimage.scss');

let userimageModule = angular.module('demo.userimage', []);

//baloonsliderModule.controller('BaloonsliderController', BaloonsliderController);
userimageModule.component('userimage', {
	templateUrl: 'lib/userimage/userimage.html',
	controllerAs: 'userimage',
	/*bindings:{
		image:'<',
		name: '@',
		email:'@',
		size:'@'
	},*/
	bindings:{
		image: '<',
		name: '@'
	},
	controller: UserimageController
});
userimageModule.config(UserimageConfig);
export default userimageModule = userimageModule.name
