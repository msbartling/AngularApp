(function(){
    'use strict';

    angular
        .module('app.lotto')
        .controller('Lotto', Lotto);

    Lotto.$inject = ['SlotManager'];

    function Lotto(SlotManager) {
        var vm = this;

        vm.svc = SlotManager;
        vm.picks = [];
        vm.numbers = [];
        vm.iter = 0;
        //vm.ind = 0;

        vm.select = function(num){
            window.alert(num);
          vm.svc.update(num);
        }

        init();

        function init(){
            var count = 1
            for (var i=0; i<=7; i++) {
                var rows =[];
                for (var j=0; j<7; j++) {
                    rows.push(count);
                    console.log(count);
                    count++;
                    if (count == 54){
                        break;
                    }
                }
                vm.numbers.push(rows);
            }
        };
    };
})();