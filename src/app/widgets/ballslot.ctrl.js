(function(){
    'use strict';

    angular
        .module('widget.ballslot')
        .controller('Ballslot', Ballslot);

    Ballslot.$inject = ['SlotManager'];

    function Ballslot(SlotManager) {
        var vm = this;
        vm.svc = SlotManager;
        vm.locked = false;
        vm.numbers = [];
        vm.ind = 0;

        vm.setInd = function() {
            vm.ind = vm.svc.inc;
            vm.svc.increment();
        };

        vm.setlock = function () {
            vm.locked = !vm.locked;
            vm.svc.locked[vm.ind] = vm.locked;
        };
    };
})();