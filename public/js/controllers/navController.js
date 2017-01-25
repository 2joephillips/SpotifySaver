(function () {
    'use strict';

    angular.module('spotifySaver')
        .controller('navController', navController)

    navController.$inject = ['$location']

    function navController($location) {
        var vm = this;
        vm.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };
    }
})()