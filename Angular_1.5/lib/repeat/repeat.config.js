class RepeatConfig {

    static initRoute ($stateProvider) {
        'ngInject';
        $stateProvider.state('public.repeat', {
            url: "/repeat",
            //templateUrl: require("./userimage.html"),
            template: '<repeat></repeat>'
        });
    }
}

export default RepeatConfig.initRoute;
