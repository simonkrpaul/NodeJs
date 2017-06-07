import LoginConfig from './login.config';
import LoginController from './login.controller';
import Services from '../common/services';
require('./login.scss');

let loginModule = angular.module('demo.login', []);

loginModule.config(LoginConfig);
loginModule.service('Services', Services);
loginModule.controller('LoginController', LoginController);

export default loginModule = loginModule.name
