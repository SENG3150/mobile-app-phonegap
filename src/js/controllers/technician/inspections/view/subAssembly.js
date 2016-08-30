angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerSubAssembly', ['$scope', '$stateParams', 'moment', 'InspectionsStorage', 'LayoutService', 'DomainExpertsStorage', 'TechniciansStorage', 'NotificationService', 'AuthService', function ($scope, $stateParams, moment, InspectionsStorage, LayoutService, DomainExpertsStorage, TechniciansStorage, NotificationService, AuthService) {
		//Initial variable declaration
		$scope.inspectionId = $stateParams.inspection;
		$scope.majorAssemblyId = $stateParams.majorAssembly;
		$scope.subAssemblyId = $stateParams.subAssembly;

		$scope.moment = moment;

		$scope.inspection = InspectionsStorage.one($scope.inspectionId);

		if ($scope.inspection) {
			// Set the flag for finding the next subAssembly
			$scope.nextSubAssembly = $scope.subAssemblyId;
			$scope.foundSubAssembly = false;

			// Angular search that finds all relevant information
			angular.forEach($scope.inspection.majorAssemblies, function (majorAssembly) {
				if (majorAssembly.majorAssembly.id == $scope.majorAssemblyId) {
					$scope.majorAssembly = majorAssembly;

					// Find Sub-Assembly
					angular.forEach(majorAssembly.subAssemblies, function (subAssembly) {
						if ($scope.foundSubAssembly) { //Check if this is the next sub-assembly to be tested (Used for navigation)
							$scope.foundSubAssembly = false;
							$scope.nextSubAssembly = subAssembly.subAssembly.id;
						}

						if (subAssembly.subAssembly.id == $scope.subAssemblyId) {
							$scope.subAssembly = subAssembly;

							LayoutService.setTitle([subAssembly.subAssembly.name]);

							$scope.foundSubAssembly = true;
						}
					});
				}
			});

			// Set the back button
			LayoutService.getPageHeader().setBackButton(
				LayoutService.redirect(
					'technician-inspections-view-majorAssembly',
					{
						inspection: $scope.inspectionId,
						majorAssembly: $scope.majorAssemblyId
					}
				)
			);

			if ($scope.nextSubAssembly != $scope.subAssemblyId) {
				//Display the next sub-Assembly button if there is one
				LayoutService.getPageHeader().setHeroButton(
					'icon icon-right-nav',
					'Next',
					function () {
						$scope.save();

						LayoutService.redirect(
							'technician-inspections-view-subAssembly',
							{
								inspection: $scope.inspectionId,
								majorAssembly: $scope.majorAssemblyId,
								subAssembly: $scope.nextSubAssembly
							},
							true
						);
					}
				);
			} else {
				//Show the done button if this is the last subAssembly. Done button goes to Major Assembly page (May change to inspection page)
				LayoutService.getPageHeader().setHeroButton(
					'fa fa-check',
					'Done',
					function () {
						$scope.save();

						LayoutService.redirect(
							'technician-inspections-view-majorAssembly',
							{
								inspection: $scope.inspectionId,
								majorAssembly: $scope.majorAssemblyId
							},
							true
						);
					}
				);
			}

			if ($scope.subAssembly.subAssembly.machineGeneral == true) {
				if (typeof $scope.subAssembly.machineGeneralTest == 'undefined') {
					$scope.subAssembly.machineGeneralTest = {
						comments: [],
						photos: [],
						actionItem: {
							status: 'OK',
							issue: '',
							action: '',
							timeActioned: moment().format()
						}
					};
				}

				$scope.$watch(
					function () {
						return $scope.subAssembly.machineGeneralTest.actionItem.status;
					},
					function () {
						$scope.subAssembly.machineGeneralTest.actionItem.timeActioned = moment().format();
					}
				);
			}

			if ($scope.subAssembly.subAssembly.oil == true) {
				if (typeof $scope.subAssembly.oilTest == 'undefined') {
					$scope.subAssembly.oilTest = {
						lead: null,
						copper: null,
						tin: null,
						iron: null,
						pq90: null,
						silicon: null,
						sodium: null,
						aluminium: null,
						water: null,
						viscosity: null,
						comments: [],
						photos: [],
						actionItem: {
							status: 'OK',
							issue: '',
							action: '',
							timeActioned: moment().format()
						}
					};
				}

				$scope.$watch(
					function () {
						return $scope.subAssembly.oilTest.actionItem.status;
					},
					function () {
						$scope.subAssembly.oilTest.actionItem.timeActioned = moment().format();
					}
				);
			}

			if ($scope.subAssembly.subAssembly.wear == true) {
				if (typeof $scope.subAssembly.wearTest == 'undefined') {
					$scope.subAssembly.wearTest = {
						smu: 0,
						uniqueDetails: [],
						comments: [],
						photos: [],
						actionItem: {
							status: 'OK',
							issue: '',
							action: '',
							timeActioned: moment().format()
						}
					};

					angular.forEach($scope.subAssembly.uniqueDetails, function (uniqueDetail) {
						$scope.subAssembly.wearTest.uniqueDetails.push(uniqueDetail);
					});
				}

				$scope.$watch(
					function () {
						return $scope.subAssembly.wearTest.actionItem.status;
					},
					function () {
						$scope.subAssembly.wearTest.actionItem.timeActioned = moment().format();
					}
				);
			}

			$scope.comments = {
				machineGeneral: null,
				oil: null,
				wear: null
			};

			$scope.addComment = function (testType) {
				var comment = {};

				switch (testType) {
					case 'machineGeneral': {
						if ($scope.comments.machineGeneral == null || $scope.comments.machineGeneral == '') {
							NotificationService.alert('Comment cannot be empty.', 'Error');
						} else {
							comment = {
								timeCommented: moment().format(),
								authorType: 'technician',
								text: $scope.comments.machineGeneral,
								author: AuthService.getUser().technician
							};

							$scope.subAssembly.machineGeneralTest.comments.push(comment);

							$scope.comments.machineGeneral = null;
						}

						break;
					}

					case 'oil': {
						if ($scope.comments.oil == null || $scope.comments.oil == '') {
							NotificationService.alert('Comment cannot be empty.', 'Error');
						} else {
							comment = {
								timeCommented: moment().format(),
								authorType: 'technician',
								text: $scope.comments.oil,
								author: AuthService.getUser().technician
							};

							$scope.subAssembly.oilTest.comments.push(comment);

							$scope.comments.oil = null;
						}

						break;
					}

					case 'wear': {
						if ($scope.comments.wear == null || $scope.comments.wear == '') {
							NotificationService.alert('Comment cannot be empty.', 'Error');
						} else {
							comment = {
								timeCommented: moment().format(),
								authorType: 'technician',
								text: $scope.comments.wear,
								author: AuthService.getUser().technician
							};

							$scope.subAssembly.wearTest.comments.push(comment);

							$scope.comments.wear = null;
						}

						break;
					}
				}
			};

			$scope.takePhoto = function (testType) {
				if (navigator.camera) {
					navigator.camera.getPicture(
						function (image) {
							var photo = {
								format: 'jpeg',
								photo: image
							};

							$scope.$apply(
								function () {
									switch (testType) {
										case 'machineGeneral': {
											$scope.subAssembly.machineGeneralTest.photos.push(photo);

											break;
										}

										case 'oil': {
											$scope.subAssembly.oilTest.photos.push(photo);

											break;
										}

										case 'wear': {
											$scope.subAssembly.wearTest.photos.push(photo);

											break;
										}
									}
								}
							);
						},
						function (error) {
							NotificationService.alert(error, 'Error');
						},
						{
							quality: 50,
							destinationType: Camera.DestinationType.DATA_URL
						}
					);
				} else {
					NotificationService.alert('No camera found on your device.', 'Error');
				}
			};

			$scope.getAuthorPhoto = function (comment) {
				switch (comment.authorType) {
					case 'domainExpert': {
						return DomainExpertsStorage.get(comment.author.id).photo.raw;
					}

					case 'technician': {
						return TechniciansStorage.get(comment.author.id).photo.raw;
					}
				}
			};

			$scope.save = function () {
				// Loop through to find the subAssembly to overwrite
				angular.forEach($scope.inspection.majorAssemblies, function (majorAssembly, majorAssemblyKey) {
					if (majorAssembly.majorAssembly.id == $scope.majorAssemblyId) {
						$scope.majorAssembly = majorAssembly;

						// Find Sub-Assembly
						angular.forEach(majorAssembly.subAssemblies, function (subAssembly, subAssemblyKey) {
							if (subAssembly.subAssembly.id == $scope.subAssemblyId) {
								$scope.inspection.majorAssemblies[majorAssemblyKey].subAssemblies[subAssemblyKey] = $scope.subAssembly;
							}
						});
					}
				});

				//Set the Inspection to be synced
				InspectionsStorage.set($scope.inspection);
			};
		} else {
			LayoutService.redirect('technician-inspections-index', {}, true);
		}
	}]);