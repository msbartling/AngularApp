(function(){
    'use strict';

    angular
        .module('svc.manager')
        .service('SlotManager', SlotManager);

        function SlotManager(){
        	var vm = this;
        	vm.lockedSlots = [];
        	vm.numsPicked = [1, 2, 3, 4, 5, 6];
            vm.locked = [false, false, false, false, false, false];
            vm.inc = 0;
            vm.lastUsed = 0;
            vm.allLocked = 0;

            vm.increment = function() {
                vm.inc = vm.inc + 1;
            };
        	
            vm.update = function(num) {

                for (var i = 0; i<vm.numsPicked.length-1; i++) {
                    window.alert(vm.locked);
                    if (num == vm.numsPicked[i]){
                        return -1;
                    }
                }

                while (vm.locked[vm.lastUsed] == true) {
                    if (vm.allLocked == vm.numsPicked.length-1){
                        vm.allLocked = 0;
                        return;
                    }
                    if(vm.lastUsed == vm.numsPicked.length-1) {
                        vm.lastUsed = 0;
                    } else {
                        vm.lastUsed += 1;
                    }
                    vm.allLocked += 1;                       
                }

                vm.numsPicked[vm.lastUsed] = num;
                if(vm.lastUsed == vm.numsPicked.length-1) {
                    vm.lastUsed = 0;
                } else {
                    vm.lastUsed += 1;
                }
            };
        }
})();