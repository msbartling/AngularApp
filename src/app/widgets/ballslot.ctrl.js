(function(){
    'use strict';

    angular
        .module(widget.ballslot)
        .controller('Ballslot', Ballslot);

    function Ballslot() {
        var vm = this;

        vm.numbers = [];
    };
})();