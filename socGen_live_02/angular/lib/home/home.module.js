import HomeConfig from './home.config';
import HomeController from './home.controller';
import Services from '../common/services';
require('./home.scss');

let homeModule = angular.module('demo.home', []);

homeModule.config(HomeConfig);
homeModule.controller('HomeController', HomeController);
homeModule.service('Services', Services);

export default homeModule = homeModule.name
