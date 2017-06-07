class CoachController {

    constructor($scope, Services, $stateParams) {
        'ngInject';
        var vm = this;
        vm.Services = Services;
        vm.arr = [4,5,4,6,4];
        vm.coachDetails = {};
        vm.coachId = $stateParams.coachId;
        console.log(vm.coachId);
        vm.getCoachDetails(vm.coachId);
        vm.coachPackages = [];
    }
    getCoachDetails(coachId){
        var vm = this;
        var response = vm.Services.fetchCoachDetails(coachId);
        response.then(function(data){
            //console.log(data);
            vm.coachDetails = data.trainer_details[0];
            vm.coachPackages = vm.coachDetails.PackageArr;
            console.log(vm.coachDetails);
        })
    }
    

}

export default CoachController;
