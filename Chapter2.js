var chp2Module = angular.module('chp2App',[]); 

chp2Module.controller('Ch2Controller',function($scope){
	$scope.welcome = {text: 'Welcome' };
});


chp2Module.controller('StartUpController',function($scope){
	$scope.funding = { startingEstimate: 0, needed : 0};

	$scope.computeNeeded = function() {
		$scope.funding.needed = $scope.funding.startingEstimate*10;
	};
});



<<<<<<< HEAD
=======
myAppModule.controller('Ch2Controller',function($scope)
{
	$scope.welcome={text:'Hello!'};
});
>>>>>>> origin/master
