import HomeConfig from './home.config';
import HomeController from './home.controller';
import Services from '../common/services';
require('./home.scss');

let homeModule = angular.module('demo.home', []);

homeModule.config(HomeConfig);
homeModule.service('Services', Services);
homeModule.controller('HomeController', HomeController);

export default homeModule = homeModule.name
