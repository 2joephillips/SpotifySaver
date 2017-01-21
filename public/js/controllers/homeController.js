(function() {
    'use strict';

    angular.module('spotifySaver')
        .controller('homeController', homeController)

    homeController.$inject = ['Songs']

    function homeController(Songs) {
        var vm = this;
        vm.songs; 
        Songs.get().then(function(response){
            vm.songs = response.data.values;
        })
    }
})()