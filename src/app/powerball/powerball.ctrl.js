(function(){
    'use strict';

    angular
        .module('app.powerball')
        .controller('Powerball', Powerball);

    function Powerball() {
        var vm = this;

        vm.message = 'This is the Powerball Ticket!';
    };
});