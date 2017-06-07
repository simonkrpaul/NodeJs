class UserimageConfig {

    static initRoute ($stateProvider) {
        'ngInject';
        $stateProvider.state('public.userimage', {
            url: "/userimage",
            //templateUrl: require("./userimage.html"),
            template: '<userimage></userimage>'
        });
    }
}

export default UserimageConfig.initRoute;
