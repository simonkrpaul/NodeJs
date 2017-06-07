class CoachController {

    constructor($scope, Services) {
        'ngInject';
        var vm = this;
        vm.arr = [4,5,4,6,4];
        vm.coachDetails = tempData.coachDetails.trainer_details[0];
    }
}

export default CoachController;
