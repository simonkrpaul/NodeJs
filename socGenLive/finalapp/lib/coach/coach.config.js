class CoachConfig {

    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('public.coach', {
            url: "/coach/:coachId",
            views: {
                'content@': {
                    templateUrl: require("./coach.html"),
                    controller: "CoachController as coach"
                }
            }
        });
        //$urlRouterProvider.otherwise("/public/coach");
    }
}

export default CoachConfig.initRoute;
