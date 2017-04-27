class HomeController {

    /**
     * Constructor class HomeController
     *
     * @param {object} $scope
     */
    constructor($scope, $q, Services) {
        'ngInject';

        var vm = this;
        //vm.name = "Akash";
        vm.emp = new Array;
        vm.emp = [
        {name: 'Akash', age: 33, email: 'akash@gmail.com'},
        {name: 'Amit', age: 23, email: 'amit@gmail.com'},
        {name: 'Sanjay', age: 40, email: 'sanjay@gmail.com'},
        {name: 'Rakesh', age: 42, email: 'rakesh@gmail.com'}
        ]
        vm.empDetails = {};
        vm.file = '';
        vm.Services = Services;
        vm.items = mainConfig.listItems;
        var input = vm.items;
        vm.searchTxt = '';
        vm.property = 'itemDesc';
        vm.order = false;
        var vendors = [];
        let promise = $q((resolve, reject) => {
          var x = 10+20+30+40;
          if (x) {
            resolve('Success!');
          } else {
            reject('Oops... something went wrong');
          }
        });
        promise.then(data => {
          console.log(data);
        });
        //console.log("Hey! Am I executed before or after?");
    }
    addEmployee(){
      var vm = this;
      vm.emp.push(vm.empDetails);
    }
    deleteRecord(indx){
      var vm = this;
      console.log(vm.emp);
      vm.emp.splice(indx,1);
      console.log(vm.emp);
    }
    printFile(){
      console.log(this.file);
    }
    loginService(){
        var vm = this;
        var request = vm.Services.loginService('akash.saxena150@gmail.com', 'angeldevil', 'client');
        request.then(function(data){
            console.log(data);
        })
    }
    sortBy(property){
        var vm = this;
        vm.property = property;
        vm.order = !vm.order;
    }
    demonstrateECMA6(){
      // function human(hairColor, eyeColor){
      //   this.hairColor = hairColor;
      //   this.eyeColor = eyeColor;
      // }
      // human.prototype.eating = function(){
      //   console.log("eating");
      //   console.log(this);
      //   console.log("I am eating");
      // }
      // //var athlete = new human;
      // function athlete(){
      //   this.stamina = 80;
      // }
      // athlete.prototype = Object.create(human.prototype);
      // athlete.prototype.eating();
    }
    
}

export default HomeController;
