(function(){
    'use strict';

    angular
        .module('widget.fillable')
        .controller('Fillable', Fillable);

    function Fillable(){
    	var vm = this;

    	vm.row = [];

    	vm.setRow = function(num) {
    		vm.row = num;
    	}
    	vm.getRow = function() {
    		return vm.row;
    	}

    }
})();