angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerSubAssembly', ['$scope', '$stateParams', 'moment', 'InspectionsStorage', 'LayoutService', function ($scope, $stateParams, moment, InspectionsStorage, LayoutService) {
		//Initial variable declaration
	    $scope.inspectionId = $stateParams.inspection;
		$scope.majorAssemblyId = $stateParams.majorAssembly;
		$scope.subAssemblyId = $stateParams.subAssembly;
		$scope.moment = moment;
		$scope.showComments = false;
        $scope.inspection = InspectionsStorage.one($scope.inspectionId);

		//Method managing the changing of the action status for the oilTest
		$scope.changeOilStatus = function (input) {
		    if(input==null){
                switch ($scope.oilStatus) {
                    case 1:
                        return "OK";
                    case 2:
                        return "WARNING";
                    case 3:
                        return "ACTION";
                }
            }
			$scope.oilStatus = input;
		};
		//Method managing the changing of the action status for the machineGeneralTest
        $scope.changemachineGeneralStatus = function (input) {
            if(input==null){
                switch ($scope.machineStatus) {
                    case 1:
                        return "OK";
                    case 2:
                        return "WARNING";
                    case 3:
                        return "ACTION";
                }
            }
            $scope.machineStatus = input;
        };

		//Set the back button
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-view-majorAssembly', {
			inspection: $scope.inspectionId,
			majorAssembly: $scope.majorAssemblyId
		}));


		// Set the flag for finding the next subAssembly
		$scope.nextSubAssembly = $scope.subAssemblyId;
		$scope.foundSubAssembly = false;

        // Angular search that finds all relevant information
		angular.forEach($scope.inspection.majorAssemblies, function (majorAssembly) {
			if (majorAssembly.id == $scope.majorAssemblyId) {
				$scope.majorAssembly = majorAssembly;
				// Find Sub-Assembly
				angular.forEach(majorAssembly.subAssemblies, function (subAssembly) {
					if ($scope.foundSubAssembly) { //Check if this is the next sub-assembly to be tested (Used for navigation)
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

        //Reload saved variables to populate the form
        if($scope.oilTest.comments != null) { //Load the comments if they exist, otherwise create an empty array to be added to
            $scope.oilComments = $scope.oilTest.comments;
        }
        else {
            $scope.oilComments = [];
        }

        if($scope.oilTest.photos != null) { //Load the photos if they exist, otherwise create an empty array to be added to
            $scope.oilPhotos = $scope.oilTest.photos;
        }
        else {
            $scope.oilPhotos = [];
        }

        $scope.oil = { //Fill the text boxes with the previous info
            id: 1,
            lead: $scope.oilTest.lead,
            copper: $scope.oilTest.copper,
            tin: $scope.oilTest.tin,
            iron: $scope.oilTest.iron,
            pq90: $scope.oilTest.pq90,
            silicon: $scope.oilTest.silicon,
            sodium: $scope.oilTest.sodium,
            aluminium: $scope.oilTest.aluminium,
            water: $scope.oilTest.water*1,
            viscosity: $scope.oilTest.viscosity,
            issue: $scope.oilTest.actionItem.issue,
            action: $scope.oilTest.actionItem.action,
            comment: $scope.oilComments[$scope.oilComments.length-1].text
        }

        if($scope.oilTest != null) {
            switch ($scope.oilTest.actionItem.status) { //Method for reloading the state of the oil action item. Needs to be a switch to process the text status
                case 'OK':
                    $scope.changeOilStatus(1);
                    break;
                case 'WARNING':
                    $scope.changeOilStatus(2);
                    break;
                case 'ACTION':
                    $scope.changeOilStatus(3);
                    break;
                default:
                    $scope.changeOilStatus(1);
                    break;
            }
        }

        if($scope.machineGeneralTest != null) {
            switch ($scope.machineGeneralTest.actionItem.status) { //Method for reloading the state of the machine general action item. Needs to be a switch to process the text status
                case 'OK':
                    $scope.changemachineGeneralStatus(1);
                    break;
                case 'WARNING':
                    $scope.changemachineGeneralStatus(2);
                    break;
                case 'ACTION':
                    $scope.changemachineGeneralStatus(3);
                    break;
                default:
                    $scope.changemachineGeneralStatus(1);
                    break;
            }
        }



        //Method managing the photo taking (Quality is set to 50 at the moment, this may change based on file size requirements and quality needs)
        //Photos need testing on iOS device!!!
        $scope.takePhoto = function (input) {
            navigator.camera.getPicture( onSuccess, onFail, {quality: 50});
        };
        //Take photo succeeded
        function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
            $scope.getPhotos(image);
        }
        //Take photo failed for some reason
        function onFail(message) {
            alert('Failed because: ' + message);
        }

        $scope.getPhotos = function (input) {
            if(input != null){
                $scope.oilPhotos.push({image: input});
            }
            else {
                return $scope.oilPhotos;
            }
        }


		if ($scope.nextSubAssembly != $scope.subAssemblyId) { //Display the next sub-Assembly button if there is one
			LayoutService.getPageHeader().setHeroButton('fa fa-chevron-right', 'Next', LayoutService.redirect('technician-inspections-view-subAssembly', {
				inspection: $scope.inspectionId,
				majorAssembly: $scope.majorAssemblyId,
				subAssembly: $scope.nextSubAssembly
			}));
		}
		else { //Show the done button if this is the last subAssembly. Done button goes to Major Assembly page (May change to inspection page)
			LayoutService.getPageHeader().setHeroButton('fa fa-check', 'Done', LayoutService.redirect('technician-inspections-view-majorAssembly', {
				inspection: $scope.inspectionId,
				majorAssembly: $scope.majorAssemblyId
			}));
		}
        //Function for saving changes to the sub Assembly
		$scope.saveSubAssembly = function(oil) {
            //Generate OilTest Item
            $scope.oilActionItem = { //Generate action item
                id: 1,
                status: $scope.changeOilStatus(null),
                issue: oil.issue,
                action: oil.action,
                timeActioned: moment(),
                technician: $scope.inspection.technician
            }
            if($scope.changeOilStatus(null) == 'OK') { //Remove action item if the state is set to 'OK' (Because then it isn't an issue)
                $scope.oilActionItem = null;
            }
            if(oil.comment != null && oil.comment != $scope.oilComments[$scope.oilComments.length-1].text) {
                $scope.oilCommentNew = {
                    id: $scope.oilComments.length + 1,
                    timeCommented: moment(),
                    text: oil.comment,
                    author: $scope.inspection.technician
                }
                $scope.oilComments.push($scope.oilCommentNew);
            }

            $scope.oilTestSave = {
                id: 1,
                lead: oil.lead*1,
                copper: oil.copper*1,
                tin: oil.tin*1,
                iron: oil.iron*1,
                pq90: oil.pq90*1,
                silicon: oil.silicon*1,
                sodium: oil.sodium*1,
                aluminium: oil.aluminium*1,
                water: oil.water.toString(),
                viscosity: oil.viscosity*1,
                comments: $scope.oilComments,
                photos: $scope.getPhotos(),
                actionItem: $scope.oilActionItem
            }
            //Generate Wear Test Item

            //Generate Machine General Test Item

            //Loop through to find the subAssembly to overwrite
            angular.forEach($scope.inspection.majorAssemblies, function (majorAssembly) {
                if (majorAssembly.id == $scope.majorAssemblyId) {
                    $scope.majorAssembly = majorAssembly;
                    // Find Sub-Assembly
                    angular.forEach(majorAssembly.subAssemblies, function (subAssembly) {
                        if (subAssembly.id == $scope.subAssemblyId) {
                            if($scope.oilTest != false) { //Save the completed oilTest
                                subAssembly.oilTest = $scope.oilTestSave;
                            }
                        }
                    });
                }
            });
            //Set the Inspection to be synced
            InspectionsStorage.set($scope.inspection);
        }

	}]);