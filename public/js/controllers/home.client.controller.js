'use strict';

angular.module('mean').controller('HomeController', ['$scope', 'Authentication', '$state', '$http',
  function ($scope, Authentication, $state, $http) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    var results;
    // If auth not set goto login
    //if(!Authentication.user) {
    //  $state.go('sign-in');
    //}

/*    $scope.studies = [
      { name: 'Study 1' }, 
      { name: 'Study 2' },
      { name: 'Study 3' }
    ];
  */  

    
    $http.post('/study/getStudy')
    .success(function(data) {
      //$scope.studies = data;
//      var json = mapDOM(data, true);
      $scope.studies = data;
      console.log(data);
//      console.log('the above is the json result');
      //console.log(data);
    })
    .error(function(err) {
      console.log('GetStudy Error : ' + err);
    });
/*
    function mapDOM(element, json) {
    var treeObject = {};
    // If string convert to document Node
    if (typeof element === "string") {
        if (window.DOMParser) {
              var parser = new DOMParser();
              var docNode = parser.parseFromString(element,"text/xml");
        } else { // Microsoft strikes again
              docNode = new ActiveXObject("Microsoft.XMLDOM");
              docNode.async = false;
              docNode.loadXML(element); 
        } 
        element = docNode.firstChild;
    }
    //Recursively loop through DOM elements and assign properties to object
    function treeHTML(element, object) {
        object.type = element.nodeName;
        var nodeList = element.childNodes;
        if (nodeList != null) {
            if (nodeList.length) {
                object.content = [];
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].nodeType === 3) {
                        object.content.push(nodeList[i].nodeValue);
                    } else {
                        object.content.push({});
                        treeHTML(nodeList[i], object.content[object.content.length -1]);
                    }
                }
            }
        }
        if (element.attributes != null) {
            if (element.attributes.length) {
                object.attributes = {};
                for (i = 0; i < element.attributes.length; i++) {
                    object.attributes[element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                }
            }
        }
    }
    treeHTML(element, treeObject);
*/
    //console.log((json) ? JSON.stringify(treeObject) : treeObject);
//}



}]); // end search
    

//app/routes
//  study.js

//app/controller
//  study.js


        //var results;

        // populate results
        