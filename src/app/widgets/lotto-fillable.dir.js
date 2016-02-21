(function(){
	'use strict';

	angular
	    .module('widget.fillable')
	    .directive('mdFillable', mdFillable);

	function mdFillable(){

		var directive = {
		    restrict: 'E',
            scope: true,
    		templateUrl: 'app/widgets/lotto-fillable.html'
    	}
    	return directive;
	}
})();