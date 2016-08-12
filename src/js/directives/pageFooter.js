angular
	.module('joy-global')
	.directive('pageFooter', ['$rootScope', 'PageFooterService', function ($rootScope, PageFooterService) {
		return {
			restrict: 'A',
			templateUrl: 'views/common/pageFooter.html',
			link: function (scope) {
				scope.update = function () {
					scope.tabs = PageFooterService.getTabs();
				};

				$rootScope.$on('pageFooterService.updated', scope.update);

				scope.update();

				scope.clicked = function (tab) {
					PageFooterService.fireClickedEvent(tab);
				};
			}
		}
	}]);