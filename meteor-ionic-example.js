Projects = new Mongo.Collection("Projects");
Tasks = new Mongo.Collection("Tasks");





if (Meteor.isClient) {
  var app = angular.module('app.example', [
    'angular-meteor',
    'ui.router',
    'ionic',
    'ngCordova.plugins.datePicker']);

  function onReady() {
    angular.bootstrap(document, ['app.example'], {strictDi: true});
  }

  if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
  }
  else {
    angular.element(document).ready(onReady);
  }
  
  
  
  //Display details
  app.factory('EmployeeService', function () {
    
    //var pets = [];

    var employees = [
            {"id": 1, "empid": "AC001", "firstName": "Matthew", "lastName": "Chiang", "department": "Executive", "cellPhone": "909-979-7668", "officePhone": "201", "email": "MChiang@ArtigenCorp.com ", "wechatid": "Artigen-Matt", "skypeid": "Matthew.Artigen", "pic": "1.jpg"},
            {"id": 2, "empid": "AC002", "firstName": "Tony", "lastName": "Tsai", "department": "Marketing & Sales", "cellPhone": "909-720-6668", "officePhone": "202", "email": "TTsai@ArtigenCorp.com", "wechatid": "9097206668", "skypeid": "Tony.Artigen", "pic": "2.jpg"},
            {"id": 3, "empid": "AC003", "firstName": "Teresa", "lastName": "Liu", "department": "Accounting ", "cellPhone": "909-632-8883", "officePhone": "203", "email": "TLiu@ArtigenCorp.com", "wechatid": "Teresa5118", "skypeid": "Teresa.Artigen", "pic": "3.jpg"},
            {"id": 4, "empid": "AC004", "firstName": "Richard", "lastName": "Sheng", "department": "R & D", "cellPhone": "909-967-8881", "officePhone": "204", "email": "RSheng@ArtigenCorp.com", "wechatid": "RSheng456", "skypeid": "Richard.Arigen ", "pic": "4.jpg"},
            {"id": 5, "empid": "AC005", "firstName": "Jason", "lastName": "Liang", "department": "Product Management ", "cellPhone": "909-859-1118", "officePhone": "205", "email": "JLiang@ArtigenCorp.com", "wechatid": "ArtigenApp", "skypeid": "jason.artigen", "pic": "5.jpg"},
            {"id": 6, "empid": "AC006", "firstName": "Jonathan", "lastName": "Long", "department": "Marketing & Sales", "cellPhone": "909-967-8883", "officePhone": "207", "email": "JLong@ArtigenCorp.com", "wechatid": "Jlong@Artigencorp.com", "skypeid": "Jonathan.Artigen", "pic": "6.jpg"},
            {"id": 7, "empid": "AC007", "firstName": "Leon", "lastName": "Chen", "department": "Visualization Team ", "cellPhone": "909-615-8808", "officePhone": "208", "email": "LChen@ArtigenCorp.com", "wechatid": "leonchen899", "skypeid": "Leon.Artigen", "pic": "7.jpg"},
            {"id": 8, "empid": "AC008", "firstName": "Bahram", "lastName": "Khandan", "department": "Infomation & Technology ", "cellPhone": "909-720-8882", "officePhone": "209", "email": "BKhandan@ArtigenCorp.com", "wechatid": "BahramKhandan", "skypeid": "Bahram.Artigen", "pic": "8.jpg"},
            {"id": 9, "empid": "AC009", "firstName": "Huichao", "lastName": "Huang", "department": "Accounting", "cellPhone": "909-228-1029", "officePhone": "206", "email": "GHuang@ArtigenCorp.com ", "wechatid": "gracehhc", "skypeid": "Grace.Artigen", "pic": "9.jpg"},
            {"id": 10, "empid": "AC009", "firstName": "Huichao", "lastName": "Huang", "department": "Accounting", "cellPhone": "909-228-1029", "officePhone": "206", "email": "GHuang@ArtigenCorp.com ", "wechatid": "gracehhc", "skypeid": "Grace.Artigen", "pic": "10.jpg"},       
            {"id": 11, "empid": "AC017", "firstName": "John", "lastName": "Chu", "department": "Infomation & Technology", "cellPhone": "909-655-8808", "officePhone": "218", "email": "JChu@Artigencorp.com", "wechatid": "johnartigen", "skypeid": "johnc.artigen", "pic": "11.jpg"},
            {"id": 12, "empid": "AC030", "firstName": "Namrata", "lastName": "Mehta", "department": "Infomation & Technology", "cellPhone": "213-713-3525", "officePhone": "231", "email": "nmehta@Artigencorp.com", "wechatid": "namrata.artigen", "skypeid": "namrata.artigen", "pic": "12.jpg"},
            {"id": 13, "empid": "AC033", "firstName": "Rahul", "lastName": "Rangali", "department": "Infomation & Technology ", "cellPhone": "949-394-9820", "officePhone": "234", "email": "rrangali@ArtigenCorp.com", "wechatid": " ", "skypeid": "rahul.Artigen", "pic": "13.jpg"},
            {"id": 14, "empid": "AC034", "firstName": "Tadashi", "lastName": "Davis", "department": "Infomation & Technology ", "cellPhone": " ", "officePhone": "235", "email": "tdavis@ArtigenCorp.com", "wechatid": " ", "skypeid": "tadashi.Artigen", "pic": "14.jpg"},
            {"id": 15, "empid": "AC035", "firstName": "Ricardo", "lastName": "Oliveros", "department": "Infomation & Technology ", "cellPhone": " ", "officePhone": "236", "email": "roliveros@ArtigenCorp.com", "wechatid": " ", "skypeid": "Tadashi.Artigen", "pic": "15.jpg"},
            {"id": 16, "empid": "AC038", "firstName": "Amir", "lastName": "Azmat", "department": "Infomation & Technology ", "cellPhone": " ", "officePhone": "209", "email": "aazmat@ArtigenCorp.com", "wechatid": " ", "skypeid": " ", "pic": "16.jpg"},       
        ];


    
    
    return {
      all: function () {
       
        return employees;
      },
      get: function (employeeId) {
         console.log("Inside get function"+employees[employeeId-1]);
        return employees[employeeId-1];
      }
    };

  });

  


  app.config(['$urlRouterProvider', '$stateProvider',
    function($urlRouterProvider, $stateProvider){

    $urlRouterProvider.otherwise("/login");

     $stateProvider
      .state('login', {
        url : '/login',
        templateUrl: 'templates/login.ng.html',
        controller: 'LoginCtrl'
      })
      
      
      $stateProvider
      .state('home', {
        url : '/home',
        templateUrl: 'templates/home.ng.html',
        controller: 'HomeCtrl'
      })
  
      $stateProvider
      .state('signup', {
        url : '/signup',
        templateUrl: 'templates/signup.ng.html',
        controller: 'SignUpCtrl'
      })
      
      
    
      

    $stateProvider
      .state('tabs', {
        url : '/tabs',
        templateUrl: 'index.ng.html',
        controller: 'TodoCtrl'
      });
  }]);


  // subscribe to the two collections we use
  Meteor.subscribe('Projects');
  Meteor.subscribe('Tasks');

  app.controller('TodoCtrl', ['$scope', '$state', '$meteorCollection', '$ionicModal', '$rootScope', '$ionicSideMenuDelegate', '$ionicPopup', '$cordovaDatePicker',
    function ($scope, $state, $meteorCollection, $ionicModal, $rootScope, $ionicSideMenuDelegate, $ionicPopup, $cordovaDatePicker) {

      $scope.Projects = $scope.$meteorCollection(Projects);
      $scope.Tasks = $scope.$meteorCollection(Tasks);

      // A utility function for creating a new project
      // with the given projectTitle
      var createProject = function (projectTitle) {
        var newProject = {
          title: projectTitle,
          active: false
        };
        $scope.Projects.save(newProject).then(function(res) {
          if (res) {
            $scope.selectProject(newProject, $scope.Projects.length - 1);
          }
        });
      };
      
      
      //Logout
      $scope.doLogoutAction = function() {
         
          Meteor.logout(function(error){
              if(error){
                alert("Unable to logout user");
              }
          })
          
          setTimeout(function() {
            $state.go('login');
          }, 1000);
        };
      

      // Called to create a new project
      $scope.newProject = function () {
        $ionicPopup.prompt({
          title: 'New Project',
          subTitle: 'Name:'
        }).then(function(res) {
          if (res) {
            createProject(res);
          }
        });
      };

      // Grab the last active, or the first project
      $scope.activeProject = function () {
        var activeProject = $scope.Projects[0];
        angular.forEach($scope.Projects, function (v, k) {
          if (v.active) {
            activeProject = v;
          }
        });
        return activeProject;
      };

      // Called to select the given project
      $scope.selectProject = function (project, index) {
        var selectedProject = $scope.Projects[index];
        angular.forEach($scope.Projects, function (v, k) {
          v.active = false;
        });
        selectedProject.active = true;
        $ionicSideMenuDelegate.toggleLeft();
      };

      // Create our modal
      $ionicModal.fromTemplateUrl('new-task.ng.html', function (modal) {
        $scope.taskModal = modal;
      }, {
        scope: $scope,
        animation: 'slide-in-up'
      });

      //Cleanup the modal when we are done with it!
      $scope.$on('$destroy', function() {
        $scope.taskModal.remove();
      });

      $scope.createTask = function (task) {
        var activeProject = $scope.activeProject();
        if (!activeProject || !task.title) {
          return;
        }

        $scope.Tasks.save({
          project: activeProject._id,
          title: task.title,
          description: task.description
        });

        $scope.taskModal.hide();

        task.title = "";
      };

      $scope.deleteTask = function (task) {
        $scope.Tasks.delete(task);
      };

      $scope.newTask = function () {
        $scope.task = {};
        $scope.taskModal.show();
      };

      $scope.closeNewTask = function () {
        $scope.taskModal.hide();
      };

      $scope.toggleProjects = function () {
        $ionicSideMenuDelegate.toggleLeft();
      };

      $scope.pickDate = function(task) {
        var options = {date: new Date(), mode: 'date'};
        //var options = {date: new Date(), mode: 'time'}; for time
        $cordovaDatePicker.show(options).then(function(date){
          task.date = date;
        });
      }
    }

    
  ]);
  
  
  //Login controller
  app.controller('LoginCtrl', ['$scope', '$state', '$meteorCollection', '$ionicModal', '$rootScope', '$ionicSideMenuDelegate', '$ionicPopup', '$cordovaDatePicker',
    function ($scope, $state, $meteorCollection, $ionicModal, $rootScope, $ionicSideMenuDelegate, $ionicPopup, $cordovaDatePicker) {

        $scope.doLoginAction = function(login) {
          
          
          
          Meteor.loginWithPassword(
            login.username,
            login.password,
            
            function(error) {
              if (error) {
                alert("Unable to login")
              }
            }
          );
          
          
          
          setTimeout(function() {
            $state.go('tabs');
          }, 1000);
        }
        
        $scope.doCreateAccountAction = function() {
          //alert("in doCreateAccountAction");
          setTimeout(function() {
            $state.go('signup');
          }, 1000);
        }
    }
    
  ])
  
  
  //Home page controller
  app.controller('HomeCtrl', ['$scope', '$state', '$meteorCollection', '$ionicModal', '$rootScope', '$ionicSideMenuDelegate', '$ionicPopup', '$cordovaDatePicker',
    function ($scope, $state, $meteorCollection, $ionicModal, $rootScope, $ionicSideMenuDelegate, $ionicPopup, $cordovaDatePicker) {

        $scope.doLogoutAction = function() {
          
          Meteor.logout(function(error){
              if(error){
                alert("Unable to logout user");
              }
          })
          
          setTimeout(function() {
            $state.go('login');
          }, 1000);
        }
        
        /*$scope.$on('$ionicView.afterLeave', function(){
            $ionicHistory.clearCache();
          });
          $scope.$on('$ionicView.beforeEnter', function(){
            //$ionicHistory.clearCache();
          });
          $scope.$on('$ionicView.beforeLeave', function(){
            $ionicHistory.clearCache();
          });
          $scope.$on('$ionicView.afterEnter', function(){
            $ionicHistory.clearCache();
          });*/

          $scope.employees = EmployeeService.all();
        
        /*$scope.toggleLeftSideMenu = function() {
          $ionicSideMenuDelegate.toggleLeft();
        };*/
  
    }
    
  ]);
  
  //Sign up controller
  app.controller('SignUpCtrl', ['$scope', '$state', '$meteorCollection', '$ionicModal', '$rootScope', '$ionicSideMenuDelegate', '$ionicPopup', '$cordovaDatePicker',
    function ($scope, $state, $meteorCollection, $ionicModal, $rootScope, $ionicSideMenuDelegate, $ionicPopup, $cordovaDatePicker) {

        $scope.doCreateAccountAction = function(signup) {
          console.log(signup.username);
         Accounts.createUser({
            username: signup.username,
            email: signup.email,
            password: signup.password,
            profile: {
              createdOn: new Date()
            }
          }, function(error) {
            if (error) {
              alert("Unable to register"+error);
              return false;
            }
          });/*.then(function(_response) {gotoLoginScreen
            console.log('doCreateAccountAction success');
            alert("user created: " + credentials.username );
            $state.go('home');
          }, function(_error) {
            console.log('Login error - ', _error);
            alert("Error: " + _error.reason);
          });*/
          setTimeout(function() {
            $state.go('tabs');
          }, 1000);
        }
        
        
        $scope.gotoLoginScreen = function() {
          
          setTimeout(function() {
            $state.go('login');
          }, 1000);
        }

  
    }
    
  ]);
  
  
}

if (Meteor.isServer) {

  Meteor.publish('Projects', function () {
    return Projects.find({});
  });

  Meteor.publish('Tasks', function () {
    return Tasks.find({});
  });

  Projects.allow({
    insert: function () {
      return true;
    },
    update: function () {
      return true;
    },
    remove: function () {
      return true;
    }
  });

  Tasks.allow({
    insert: function () {
      return true;
    },
    update: function () {
      return true;
    },
    remove: function () {
      return true;
    }
  });

}