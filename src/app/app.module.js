(function (){
    angular
        .module('app', [
                'ngRoute',

                'app.layout',
                'app.lotto',
                'app.powerball',

                'widget.ballslot'
        	]);
})();