(function(){
    'use strict';

    angular
        .module('app.lotto')
        .controller('Lotto', Lotto);

    function Lotto() {
        var vm = this;

        vm.message = 'This is the Lotto Ticket!';
    };
})();