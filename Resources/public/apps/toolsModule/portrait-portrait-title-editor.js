angular.module('toolsModule').directive('portraitPortraitTitleEditor', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      slide:'=',
      close: '&'
    },
    templateUrl: '/bundles/bibsdbportraitportrait/apps/toolsModule/portrait-portrait-title-editor.html'
  };
});