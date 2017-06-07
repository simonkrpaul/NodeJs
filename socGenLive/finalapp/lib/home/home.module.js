import HomeConfig from './home.config';
import HomeController from './home.controller';
import Services from '../common/services';
require('./home.scss');

let homeModule = angular.module('demo.home', []);

homeModule.config(HomeConfig);
homeModule.service('Services', Services);
homeModule.controller('HomeController', HomeController);
homeModule.filter('namefilter', function(){
	return function(coaches, searchInp)
	{
		var searchedCoaches = [];
		for(var i = 0; coaches[i]; i++)
		{
			if((coaches[i].name).indexOf(searchInp)>=0)
				searchedCoaches.push(coaches[i]);
		}
		return searchedCoaches;
	}
})
export default homeModule = homeModule.name
