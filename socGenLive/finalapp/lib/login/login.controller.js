class LoginController {

    constructor($scope, Services, $stateParams, $state) {
        'ngInject';
        var vm = this;
        vm.$state = $state;
        vm.Services = Services;
        vm.loginInfo = {email: '', pass: ''};
    }
    submit(){
        var vm = this;
        var response = vm.Services.login(vm.loginInfo.email,vm.loginInfo.pass);
        response.then(function(data){
            if(data.token){
                vm.Services.setData('auth_token', data.token)
                vm.$state.go('public.home')
            }
        })
    }
    error(){
        alert("wrong form")
    }
    

}

export default LoginController;
