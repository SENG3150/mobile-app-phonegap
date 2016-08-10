angular
	.module('joy-global')
	.directive('pageHeader', ['$rootScope', 'PageHeaderService', function ($rootScope, PageHeaderService) {
		return {
			restrict: 'A',
			templateUrl: 'views/common/pageHeader.html',
			link: function (scope) {
				scope.update = function () {
					scope.title = PageHeaderService.getTitle();
					scope.leftButton = PageHeaderService.getLeftButton();
					scope.rightButton = PageHeaderService.getRightButton();
				};

				$rootScope.$on('pageHeaderService.updated', scope.update);

				scope.update();

				scope.leftButtonClicked = function () {
					PageHeaderService.fireLeftClickedEvent();
				};

				scope.rightButtonClicked = function () {
					PageHeaderService.fireRightClickedEvent();
				};
			}
		}
	}]);