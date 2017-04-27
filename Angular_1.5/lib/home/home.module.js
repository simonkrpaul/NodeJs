import HomeConfig from './home.config';
import HomeController from './home.controller';
import Services from '../common/services';
//import HomeFilter from './home.filter';
require('./home.scss');

let homeModule = angular.module('demo.home', []);

homeModule.config(HomeConfig);
homeModule.controller('HomeController', HomeController);
homeModule.service('Services', Services);
homeModule.filter('testFilter', ()=> {
   return (input, searchTxt)=> { 
   	var vendors =[];
   	angular.copy(input, vendors)
   	if(searchTxt=='')
   		return input;

   	for(var i = 0; vendors[i]; i++)
   	{
   		for(var j=0; vendors[i].vendors[j]; j++)
   		{
   			var vendorName = vendors[i].vendors[j].vendorName.toLowerCase();
   			searchTxt = searchTxt.toLowerCase();
   			if(vendors[i].vendors[j] && vendorName.indexOf(searchTxt)<0)
   				vendors[i].vendors.splice(j,1);   			
   		}
   		if(vendors[i].vendors.length==0)
   			vendors.splice(i,1);
   	}

      return vendors;
   	}
});

export default homeModule = homeModule.name
