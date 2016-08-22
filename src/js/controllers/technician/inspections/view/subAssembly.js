angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerSubAssembly', ['$scope', '$stateParams', 'moment', 'InspectionsStorage', 'LayoutService', function ($scope, $stateParams, moment, InspectionsStorage, LayoutService) {
		$scope.inspectionId = $stateParams.inspection;
		$scope.majorAssemblyId = $stateParams.majorAssembly;
		$scope.subAssemblyId = $stateParams.subAssembly;
		$scope.moment = moment;
		$scope.oilStatus = 1; // Might need to set this to load from save file.
		$scope.machineStatus = 1;
		$scope.showComments = false;

		$scope.changeOilStatus = function (input) {
			$scope.oilStatus = input;
		};

        $scope.changemachineGeneralStatus = function (input) {
            $scope.machineStatus = input;
        };

		$scope.takePhoto = function (input) {
            navigator.camera.getPicture( onSuccess, onFail, {quality: 50});
		};

        function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }

		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-view-majorAssembly', {
			inspection: $scope.inspectionId,
			majorAssembly: $scope.majorAssemblyId
		}));

		// Select the specific inspection
		$scope.inspection = InspectionsStorage.one($scope.inspectionId);

		// Set the flag for finding the next subAssembly
		$scope.nextSubAssembly = $scope.subAssemblyId;
		$scope.foundSubAssembly = false;

		angular.forEach($scope.inspection.majorAssemblies, function (majorAssembly) {
			if (majorAssembly.id == $scope.majorAssemblyId) {
				$scope.majorAssembly = majorAssembly;
				// Find Sub-Assembly
				angular.forEach(majorAssembly.subAssemblies, function (subAssembly) {
					if ($scope.foundSubAssembly) {
						$scope.foundSubAssembly = false;
						$scope.nextSubAssembly = subAssembly.id;
					}
					if (subAssembly.id == $scope.subAssemblyId) {
						$scope.subAssembly = subAssembly;
						$scope.oilTest = subAssembly.oilTest;
						$scope.machineGeneralTest = subAssembly.machineGeneralTest;
						$scope.wearTest = subAssembly.wearTest;
						$scope.subAssemblyName = subAssembly.subAssembly.name;
						LayoutService.setTitle([$scope.subAssemblyName]);
						$scope.foundSubAssembly = true;
					}
				});
			}
		});

		if ($scope.nextSubAssembly != $scope.subAssemblyId) {
			LayoutService.getPageHeader().setHeroButton('fa fa-chevron-right', 'Next', LayoutService.redirect('technician-inspections-view-subAssembly', {
				inspection: $scope.inspectionId,
				majorAssembly: $scope.majorAssemblyId,
				subAssembly: $scope.nextSubAssembly
			}));
		}
		else {
			LayoutService.getPageHeader().setHeroButton('fa fa-check', 'Done', LayoutService.redirect('technician-inspections-view-majorAssembly', {
				inspection: $scope.inspectionId,
				majorAssembly: $scope.majorAssemblyId
			}));
		}

	}]);