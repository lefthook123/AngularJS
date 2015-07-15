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

chp2Module.controller('CartController',function($scope){
	$scope.items=[{title:'Paint pots',quantity:8,price:3.95},
				  {title:'Polka dots',quantity:17,price:12.95},
				  {title:'Pebbles', quantity: 5, price: 6.95}];

	$scope.bill={};
	$scope.totalCart = function(){
		//debugger;
		var total=0;
		for(var i =0, len=$scope.items.length;i<len;i++){
			total = total + $scope.items[i].price*$scope.items[i].quantity;
		}
		return total;
	}

	$scope.subtotal = function(){
		return $scope.totalCart()-$scope.bill.discount;
	}

	function calculateDiscount(newValue,oldValue,scope)
	{
		$scope.bill.discount = newValue > 100? 10:0;
	}

	$scope.$watch($scope.totalCart,calculateDiscount);

});
