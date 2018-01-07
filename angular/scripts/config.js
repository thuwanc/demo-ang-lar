/**
 * Created by thuriz on 1/7/2018.
 */
function config($routeProvider,  $stateProvider, $urlRouterProvider, USER_ROLES) {

    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state('login', {
            url: "/login",
            name: 'login',
            templateUrl: "views/login.html",
            controller: LoginController,
            data: {
                pageTitle: 'Log in',
                specialClass: 'gray-bg'
                //authorizedRoles: [USER_ROLES.anonymusUser]}
            }
        })
        .state('subscriptionsRegister', {
            url: "/user/subscriptions/register",
            templateUrl: "views/dashboard.html",
            controller: DashboardController,
            data: {
                pageTitle: 'Dashboard',
                authorizedRoles: [USER_ROLES.consumer]
            }
        })
        /*.state('logout', {
            url: "/logout",
            name: 'logout',
            templateUrl: "views/logout.html",
            controller: logoutController,
            data: {
                pageTitle: 'Log out',
                specialClass: 'gray-bg'
                //authorizedRoles: [USER_ROLES.anonymusUser]}
            }
        })*/;

}

smartApp = angular.module('adminlte');

