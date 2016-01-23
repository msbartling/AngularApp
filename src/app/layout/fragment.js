(function(){
    angular
        .module('app.layout')
        .controller('Fragment', Fragment);


    function Fragment(){
    	var vm = this;

    	vm.message = 'Hi I Am A Fragment!';
    };

})();