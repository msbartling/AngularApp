(function(){
    'use strict';

    angular
        .module('widget.ballslot')
        .directive('ballSlot', ballSlot);

    function ballSlot(){
    	var directive = {
    		restrict: 'EA',
    		templateUrl: 'app/widgets/ballslot.html'

    	}
    	return directive;

    }
})();