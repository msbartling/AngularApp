(function(){
    'use strict';

    angular
        .module('widget.ballslot')
        .controller('Ballslot', Ballslot);

    function Ballslot() {
        var vm = this;

        vm.locked = true;

        vm.numbers = [];

        vm.setlock = function () {
            vm.locked = !vm.locked;
        };

    };
})();