angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerSubAssembly', ['$scope', '$stateParams', 'moment', 'InspectionsStorage', 'LayoutService', function ($scope, $stateParams, moment, InspectionsStorage, LayoutService) {
		//Initial variable declaration
	    $scope.inspectionId = $stateParams.inspection;
		$scope.majorAssemblyId = $stateParams.majorAssembly;
		$scope.subAssemblyId = $stateParams.subAssembly;
		$scope.moment = moment;
		$scope.showOilComments = false;
        $scope.showMachineComments = false;
        $scope.showWearComments = false;
        $scope.inspection = InspectionsStorage.one($scope.inspectionId);
        $scope.status = {wear: 'OK', oil: 'OK', machine: 'OK'};


		//Method managing the changing of the action status for tests
		$scope.changeActionStatus = function (input, type) {
            switch(type){
                case 1:
                    $scope.status.oil = input;
                    break;
                case 2:
                    $scope.status.machine = input;
                    break;
                case 3:
                    $scope.status.wear = input;
                    break;
            }
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
        if(typeof $scope.oilTest != 'undefined') { //Load the existing oilTest data if it exists, otherwise create empty data
            $scope.oilComments = $scope.oilTest.comments; //Load the comments
            $scope.oilPhotos = $scope.oilTest.photos; //Load the photos
            if ($scope.oilTest.actionItem == null) { //If there is no action item, create an empty one so that we can populate the text boxes with nothing
                $scope.oilTest.actionItem = {issue: '', status: '', action: ''};
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
                water: $scope.oilTest.water * 1,
                viscosity: $scope.oilTest.viscosity,
                issue: $scope.oilTest.actionItem.issue,
                action: $scope.oilTest.actionItem.action,
                comment: $scope.oilComments[$scope.oilComments.length - 1].text
            }
            $scope.changeActionStatus($scope.oilTest.actionItem.status, 1);
        }
        else {
            $scope.oilComments = []; //Create an empty array of comments
            $scope.oilPhotos = []; //Create an empty array of photos
            $scope.changeActionStatus('OK', 1); //Default the status to OK
            $scope.oil = { //Fill the text boxes with blank info
                id: 1,
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
                issue: '',
                action: '',
                comment: ''
            }
        }

        if(typeof $scope.machineGeneralTest != 'undefined') { //Load the existing machineGeneralTest data if it exists, otherwise create empty data
            if ($scope.machineGeneralTest.actionItem == null) { //If there is no action item, create an empty one so that we can populate the text boxes with nothing
                $scope.machineGeneralTest.actionItem = {issue: '', status: '', action: ''};
            }
            $scope.machinePhotos = $scope.machineGeneralTest.photos;
            $scope.machineComments = $scope.machineGeneralTest.comments;
            $scope.changeActionStatus($scope.machineGeneralTest.actionItem.status, 2)
            $scope.machineTest = { //Fill the text boxes with the previous info
                issue: $scope.machineGeneralTest.actionItem.issue,
                action: $scope.machineGeneralTest.actionItem.action,
                comment: $scope.machineComments[$scope.machineComments.length - 1].text
            }
        }
        else {
            $scope.machinePhotos = [];
            $scope.machineComments = [];
            $scope.changeActionStatus('OK', 2); //Default the status to OK
            $scope.machineTest = { //Fill the text boxes with the previous info
                issue: '',
                action: '',
                comment: ''
            }
        }

        if(typeof $scope.wearTest != 'undefined') { //Load the existing wearTest data if it exists, otherwise create empty data
            if ($scope.wearTest.actionItem == null) { //If there is no action item, create an empty one so that we can populate the text boxes with nothing
                $scope.wearTest.actionItem = {issue: '', status: '', action: ''};
            }
            $scope.wearPhotos = $scope.wearTest.photos;
            $scope.wearComments = $scope.wearTest.comments;
            $scope.changeActionStatus($scope.wearTest.actionItem.status, 3);
            $scope.wearDetails = [];
            angular.forEach($scope.wearTest.uniqueDetails, function (uniqueDetail) {
                $scope.wearDetails.push(uniqueDetail);
            });
            $scope.wear = { //Fill the text boxes with the previous info
                SMU: $scope.wearTest.smu,
                detail: $scope.wearDetails,
                issue: $scope.wearTest.actionItem.issue,
                action: $scope.wearTest.actionItem.action,
                comment: $scope.wearComments[$scope.wearComments.length - 1].text
            }
        }
        else {
            $scope.wearComments = [];
            $scope.wearPhotos = [];
            $scope.changeActionStatus('OK', 3); //Default the status to OK
            $scope.wear = { //Fill the text boxes with the previous info
                SMU: null,
                detail: [],
                issue: '',
                action: '',
                comment: ''
            }
        }


        //Method managing the photo taking (Quality is set to 50 at the moment, this may change based on file size requirements and quality needs)
        $scope.takePhoto = function (input) {
            switch(input){
                case 'oil':
                    navigator.camera.getPicture(saveOilPhotos, onFail, {quality: 50, destinationType: Camera.DestinationType.DATA_URL});
                    break;
                case 'machine':
                    navigator.camera.getPicture(saveMachinePhotos, onFail, {quality: 50, destinationType: Camera.DestinationType.DATA_URL});
                    break;
                case 'wear':
                    navigator.camera.getPicture(saveWearPhotos, onFail, {quality: 50, destinationType: Camera.DestinationType.DATA_URL});
                    break;
            }
        };
        //Take photo succeeded
        function saveOilPhotos(imageData) {
            $scope.oilPhotos.push({
                format: 'jpeg',
                photo: imageData
            });
        }
        function saveMachinePhotos(imageData) {
            $scope.machinePhotos.push({
                format: 'jpeg',
                photo: imageData
            });
        }
        function saveWearPhotos(imageData) {
            $scope.wearPhotos.push({
                format: 'jpeg',
                photo: imageData
            });
        }
        //Take photo failed for some reason
        function onFail(message) {
            alert('Failed because: ' + message);
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
		$scope.saveSubAssembly = function(oil, machineTest, wear) {
            //Generate OilTest Item

            if($scope.subAssembly.subAssembly.oil != false) {
                $scope.oilActionItem = { //Generate action item
                    id: 1,
                    status: $scope.status.oil,
                    issue: oil.issue,
                    action: oil.action,
                    timeActioned: moment(),
                    technician: $scope.inspection.technician
                }
                if ($scope.status.oil == 'OK') { //Remove action item if the state is set to 'OK' (Because then it isn't an issue)
                    $scope.oilActionItem.issue = '';
                    $scope.oilActionItem.action = '';
                }
                if (oil.comment != null) {
                    $scope.oilCommentNew = {
                        id: $scope.oilComments.length + 1,
                        timeCommented: moment(),
                        text: oil.comment,
                        author: $scope.inspection.technician
                    }
                    if ($scope.oilComments.length == 0) {
                        $scope.oilComments.push($scope.oilCommentNew);
                    }
                    else {
                        if (oil.comment != $scope.oilComments[$scope.oilComments.length - 1].text) {
                            $scope.oilComments.push($scope.oilCommentNew);
                        }
                    }
                }

                $scope.oilTestSave = {
                    id: 1,
                    lead: oil.lead * 1,
                    copper: oil.copper * 1,
                    tin: oil.tin * 1,
                    iron: oil.iron * 1,
                    pq90: oil.pq90 * 1,
                    silicon: oil.silicon * 1,
                    sodium: oil.sodium * 1,
                    aluminium: oil.aluminium * 1,
                    water: oil.water.toString(), //The toString may be redundant
                    viscosity: oil.viscosity * 1,
                    comments: $scope.oilComments,
                    photos: $scope.oilPhotos,
                    actionItem: $scope.oilActionItem
                }
            }
            //Generate Machine General Test Item
            if($scope.subAssembly.subAssembly.machineGeneral != false) {
                $scope.machineActionItem = { //Generate action item
                    id: 1,
                    status: $scope.status.machine,
                    issue: machineTest.issue,
                    action: machineTest.action,
                    timeActioned: moment(),
                    technician: $scope.inspection.technician
                }
                if ($scope.status.machine == 'OK') { //Remove action item issue and action if the state is set to 'OK' (Because then it isn't an issue)
                    $scope.machineActionItem.issue = '';
                    $scope.machineActionItem.action = '';
                }
                if (machineTest.comment != null) {
                    $scope.machineCommentNew = {
                        id: $scope.machineComments.length + 1,
                        timeCommented: moment(),
                        text: machineTest.comment,
                        author: $scope.inspection.technician
                    }
                    if ($scope.machineComments.length == 0) {
                        $scope.machineComments.push($scope.machineCommentNew);
                    }
                    else {
                        if (machineTest.comment != $scope.machineComments[$scope.machineComments.length - 1].text) {
                            $scope.machineComments.push($scope.machineCommentNew);
                        }
                    }
                }
                $scope.machineGeneralTestSave = {
                    id: 1,
                    comments: $scope.machineComments,
                    photos:  $scope.machinePhotos,
                    actionItem: $scope.machineActionItem
                }
            }
            //Generate Wear Test Item
            if($scope.subAssembly.subAssembly.wear != false) {
                $scope.wearActionItem = { //Generate action item
                    id: 1,
                    status: $scope.status.wear,
                    issue: wear.issue,
                    action: wear.action,
                    timeActioned: moment(),
                    technician: $scope.inspection.technician
                }
                if ($scope.status.wear == 'OK') { //Remove action item issue and action if the state is set to 'OK' (Because then it isn't an issue)
                    $scope.wearActionItem.issue = '';
                    $scope.wearActionItem.action = '';
                }
                if (wear.comment != null) {
                    $scope.wearCommentNew = {
                        id: $scope.wearComments.length + 1,
                        timeCommented: moment(),
                        text: wear.comment,
                        author: $scope.inspection.technician
                    }
                    console.log($scope.wearComments.length);
                    if ($scope.wearComments.length == 0) {
                        $scope.wearComments.push($scope.wearCommentNew);
                    }
                    else {
                        if (wear.comment != $scope.wearComments[$scope.wearComments.length - 1].text) {
                            $scope.wearComments.push($scope.wearCommentNew);
                        }
                    }
                }
                $scope.wearUniqueDetails = {};
                for (var i = 0; i < wear.detail.length; i += 1){
                    var temp = $scope.subAssembly.subAssembly.uniqueDetails[i];
                    $scope.wearUniqueDetails[temp] = wear.detail[i];
                }
                $scope.wearTestSave = {
                    id: 1,
                    smu: wear.SMU,
                    uniqueDetails: $scope.wearUniqueDetails,
                    comments: $scope.wearComments,
                    photos:  $scope.wearPhotos,
                    actionItem: $scope.wearActionItem
                }
            }
            //Loop through to find the subAssembly to overwrite
            angular.forEach($scope.inspection.majorAssemblies, function (majorAssembly) {
                if (majorAssembly.majorAssembly.id == $scope.majorAssemblyId) {
                    $scope.majorAssembly = majorAssembly;
                    // Find Sub-Assembly
                    angular.forEach(majorAssembly.subAssemblies, function (subAssembly) {
                        if (subAssembly.subAssembly.id == $scope.subAssemblyId) {
                            if($scope.subAssembly.subAssembly.oil != false) { //Save the completed oilTest
                                subAssembly.oilTest = $scope.oilTestSave;
                            }
                            if($scope.subAssembly.subAssembly.machineGeneral != false) { //Save the completed oilTest
                                subAssembly.machineGeneralTest = $scope.machineGeneralTestSave;
                            }
                            if($scope.subAssembly.subAssembly.wearTest != false) { //Save the completed oilTest
                                subAssembly.wearTest = $scope.wearTestSave;
                            }
                        }
                    });
                }
            });
            //Set the Inspection to be synced
            InspectionsStorage.set($scope.inspection);
        }

	}]);