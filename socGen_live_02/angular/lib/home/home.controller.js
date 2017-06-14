class HomeController {

    /**
     * Constructor class HomeController
     *
     * @param {object} $scope
     */
    constructor($scope, services) {
        'ngInject';

        var vm = this;
        this.Services = Services;
        this.name = "Amit";
        this.name = "A"+ "B";
        this.coaches = tempConfig.coaches.ConsultantList[0];
        this.getCoaches();
        
    }
    getCoaches(){
        var request = this.Services.fetchCoaches();
        request.then(function(data){
            console.log(data);
        })
    }
}

export default HomeController;
