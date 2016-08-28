angular
	.module('joy-global')
	.directive('toggle', ['ToggleService', '$timeout', function (ToggleService, $timeout) {
		return {
			restrict: 'A',
			require: 'ngModel',
			templateUrl: 'views/common/toggle.html',
			scope: {
				id: '='
			},
			link: function (scope, element, attrs, ngModel) {
				scope.$watch(function () {
					return ngModel.$modelValue;
				}, function (newValue) {
					if (newValue == true) {
						element.addClass('active');

						scope.style = {
							transform: 'translate3d(44px, 0px, 0px)'
						};
					} else {
						element.removeClass('active');

						scope.style = {
							transform: 'translate3d(0px, 0px, 0px)'
						};
					}
				});

				element[0].addEventListener('toggle', function (e) {
					ToggleService.fireToggledEvent(scope.id, e.detail.isActive);
				});
			}
		};
	}]);