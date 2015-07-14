var chp2Module = angular.module('chp2App',[]); 

chp2Module.controller('Ch2Controller',function($scope){
	$scope.welcome = {text: 'Welcome' };
});


chp2Module.controller('StartUpController',function($scope){
	$scope.funding = { startingEstimate: 0, needed : 0};

	$scope.computeNeeded = function() {
		$scope.funding.needed = $scope.funding.startingEstimate*10;
	};

	$scope.$watch('funding.startingEstimate',$scope.computeNeeded);

	$scope.requestFunding = function(){
		window.alert("Sorry, please get more customers first.");
	}

	$scope.reset = function(){
		$scope.funding.startingEstimate=0;
	}
});


chp2Module.controller('StudentListController',function($scope){

	var students=[{name:'Mary Contrary',id:'1'},
					{name:'Jack Sprat',id:'2'},
					{name:'Jill Hill',id:'3'}];

	$scope.students = students;				
	$scope.newStudent={name: '',id:''};
	
	function addStudent()
	{
		var newstudent={name:$scope.newStudent.name,id:$scope.newStudent.id};
		$scope.students.push(newstudent);
	}	

	$scope.addStudent=addStudent;
	

});

chp2Module.controller('DeathrayMenuController',function($scope){
	var menuState={show:false}
	$scope.menuState=menuState;
	$scope.toggleMenu=function(){
		$scope.menuState.show = !$scope.menuState.show;
	}
});

chp2Module.controller('HeaderController',function($scope){
	$scope.isError = false;
	$scope.isWarning = false;
	$scope.showError = function() {
		$scope.messageText = 'This is an error!';
		$scope.isError = true;
		$scope.isWarning = false;
	};
	$scope.showWarning = function() {
		$scope.messageText = 'Just a warning. Please carry on.';
		$scope.isWarning = true;
		$scope.isError = false;
	};

	
	var directory=[{name:'d1',cuisine:'BBQ'},
					  {name:'Green',cuisine:'Salads'},
					  {name:'House of Fine Fish',cuisine:'Seafood'}];
	$scope.directory=directory;
	$scope.selectRestaurant= function(row)
	{
		$scope.selectedRow=row;
	}
					  
});


