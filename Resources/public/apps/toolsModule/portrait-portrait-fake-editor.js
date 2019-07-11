angular.module('toolsModule').directive('portraitPortraitFakeEditor', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      slide:'=',
      close: '&'
    },
    templateUrl: '/bundles/bibsdbportraitportrait/apps/toolsModule/portrait-portrait-fake-editor.html'
  };
});