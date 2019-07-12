angular.module('toolsModule').directive('portraitPortraitBodytextEditor', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      slide:'=',
      close: '&'
    },
    templateUrl: '/bundles/bibsdbportraitportrait/apps/toolsModule/portrait-portrait-bodytext-editor.html'
  };
});