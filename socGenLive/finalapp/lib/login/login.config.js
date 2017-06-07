class LoginConfig {

    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('public.login', {
            url: "/login/:loginId",
            views: {
                'content@': {
                    templateUrl: require("./login.html"),
                    controller: "LoginController as login"
                }
            }
        });
        //$urlRouterProvider.otherwise("/public/coach");
    }
}

export default LoginConfig.initRoute;
