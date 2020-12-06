
angular.module('configApp', [])


.config(function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
})


.config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
	  $routeProvider.when("/", {
		templateUrl : PluginHelper.getPluginFileUrl('dimplugin', 'ui/templates/index.tpl.html'),
		  controller : 'identityiqpluginController',
	  })
	}]);


