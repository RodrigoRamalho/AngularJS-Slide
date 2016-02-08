var myApp = angular.module('myApp', []);

var vetor = [
    {nome: 'Zezinho', idade: 18},
    {nome: 'Vinícios', idade: 15},
    {nome: 'Thiago', idade: 25}
];

myApp.controller('mainController', function($scope, $http){
    $scope.pessoas = vetor;

    $scope.add = function(){
        $scope.pessoas.push({nome: $scope.n, idade: $scope.i});
        $scope.n = $scope.i = "";
    };
});