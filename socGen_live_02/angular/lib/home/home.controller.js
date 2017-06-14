class HomeController {

    /**
     * Constructor class HomeController
     *
     * @param {object} $scope
     */
    constructor($scope) {
        'ngInject';

        var vm = this;
        this.name = "Amit";
        this.name = "A"+ "B";
        this.coaches = tempConfig.coaches.ConsultantList[0];
        
    }
    testFn(){

        return 10;
    }
}

export default HomeController;
