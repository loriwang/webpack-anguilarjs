function routerConfig($locationProvider,$stateProvider, $urlRouterProvider) {
  'ngInject'
  $locationProvider.hashPrefix("");
  $stateProvider
    .state('main',{
      name: 'main',
      url: '/main',
      abstract:true,
      template:require("./src/angularJs/main/app/app.html"),
      redirectTo: '/main/home'
    })
    .state('main.home',{
      name:'main.home',
      url:'/home',
      template:require('./src/angularJs/main/home/home.html'),
      controller:'homeController',
      controllerAs:'home'
    })
    .state('login',{
      name: 'login',
      url: '/login',
      template:require('./src/angularJs/login/login.html'),
      controller:'loginController',
      controllerAs:'login'
    });
  $urlRouterProvider.otherwise('/main/home');
}
export default routerConfig