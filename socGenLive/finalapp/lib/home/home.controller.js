class HomeController {

    /**
     * Constructor class HomeController
     *
     * @param {object} $scope
     */
    constructor($scope, Services, $state) {
        'ngInject';
        var vm = this;
        vm.Services = Services;
        vm.perPage = 5;
        vm.state = $state;
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
        vm.coaches =[];
        vm.imgBasePath = mainConfig.imgBasePath;
        vm.getCoaches();
        // for(var i = 0; vm.coaches[i]; i++)
        // {
        //     vm.coaches[i].profile_pic = mainConfig.imgBasePath+vm.coaches[i].profile_pic;
        // }
        
    }
    redirect(coach){
        var vm = this;
        console.log(coach.user_id);
        vm.state.go('public.coach', {'coachId':coach.user_id});
    }
    getCoaches(){
        var vm = this;
        var response = vm.Services.fetchCoaches(0);
        response.then(function(data){
            //console.log(data);
            vm.coaches = data.ConsultantList[0];
            vm.applyPagination();
        })
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
