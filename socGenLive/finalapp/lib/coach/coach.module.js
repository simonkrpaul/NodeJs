import CoachConfig from './coach.config';
import CoachController from './coach.controller';
import Services from '../common/services';
require('./coach.scss');

let coachModule = angular.module('demo.coach', []);

coachModule.config(CoachConfig);
coachModule.service('Services', Services);
coachModule.controller('CoachController', CoachController);

export default coachModule = coachModule.name
