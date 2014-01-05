'use strict';

projectsApp.controller('ProjectChartController',
    function ProjectChartController($scope, $location) {

        $scope.chartOptions = {

            /* hard coding the data source at the moment
            *    -- In real time scenario we need to use inject the ProjectData service
            *       to this ProjectChartController and use the method getAllProjects() and
            *       transform the PROMISE object to PROJECTS data array.*/

                   dataSource : [{
                    "id":"1abc3",
                    "name":"AngularJS",
                    "description":"HTML enhanced for web apps!",
                    "site":"http://angularjs.org/",
                    "author":"Google Inc.",
                    "creationDate":"01/03/2001","size":"1"},
                {
                    "name":"Cappucino",
                    "site":"http://cappuccino.org/",
                    "description":"Objective-J.",
                    "author":"Cappuccino Core Team",
                    "creationDate":"12/01/2014",
                    "size":"2",
                    "id":"lec5m"},
                {
                    "name":"BackboneJS",
                    "description":"A JavaScript library with MVP.",
                    "author":"Jeremy Ashkenas",
                    "creationDate":"10/10/2013",
                    "size":"5","site":"http://backbonejs.org/",
                    "id":"u54f1"},
                {
                    "name":"Ember",
                    "site":"http://emberjs.com/",
                    "description":"Ambitious web apps.",
                    "author":"Paul Cowan",
                    "creationDate":"01/01/2014",
                    "size":"1",
                    "id":"w3nwu"}],
            title: "Javascript Libraries",
            commonSeriesSettings: {
                argumentField: "creationDate"
            },
            series: [
                { valueField: "name", name: "javascript Library" }
            ],
            argumentAxis:{
                grid:{
                    visible: true
                }
            },
            tooltip:{
                enabled: true
            },
            legend: {
                verticalAlignment: "bottom",
                horizontalAlignment: "center"
            },
            commonPaneSettings: {
                border:{
                    visible: true,
                    right: true
                }
            }
        };

        $scope.backToProjects = function(){
            $location.url('/projects');
        };
    }
);

