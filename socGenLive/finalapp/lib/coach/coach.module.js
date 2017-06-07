import CoachConfig from './coach.config';
import CoachController from './coach.controller';
import Services from '../common/services';
require('./coach.scss');

let coachModule = angular.module('demo.coach', []);

coachModule.config(CoachConfig);
coachModule.service('Services', Services);
coachModule.controller('CoachController', CoachController);
coachModule.filter('rupeeformat',function(){
	return function(inp, symbol){
		if(symbol.length>0)
			return symbol+' '+ inp;
		return '₹ '+inp;
	}
})
export default coachModule = coachModule.name
