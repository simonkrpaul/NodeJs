class HomeController {

    /**
     * Constructor class HomeController
     *
     * @param {object} $scope
     */
    constructor($scope) {
        'ngInject';
        var vm = this;
        vm.perPage = 5;
        vm.page = 1;
        vm.searchNm = "";
        vm.displayedCoaches = [];
        vm.fields = {
            name: {order: true, active: true},
            age: {order: true, active: false},
            avg_rating:{order: true, active: false}
        }
            
        vm.activeField = 'name';
        //vm.order = true;
        vm.coaches = tempData.coaches.ConsultantList[0];
        vm.applyPagination();
        vm.imgBasePath = mainConfig.imgBasePath;
        // for(var i = 0; vm.coaches[i]; i++)
        // {
        //     vm.coaches[i].profile_pic = mainConfig.imgBasePath+vm.coaches[i].profile_pic;
        // }
        
    }
    applyPagination(){
        var vm = this;
        vm.displayedCoaches = [];
        for(var i = (vm.page-1)*vm.perPage; i<vm.page*vm.perPage; i++)
        {
            vm.displayedCoaches.push(vm.coaches[i])
        }
        
    }
    triggerAlert(coach){
        console.log(coach)
    }
    hide(coach){
        let vm = this;
        var indx = vm.coaches.indexOf(coach);
        vm.coaches.splice(indx,1)
    }
    sort(field){
        var vm = this;
        vm.fields[field].order = !vm.fields[field].order;
        var tempOrder = vm.fields[field].order;
        vm.activeField = tempOrder?field:'-'+field;
    }
}

export default HomeController;
