angular
	.module('joy-global')
	.controller('TechnicianSyncControllerIndex', ['$scope', 'LayoutService', '$timeout', '$q', 'NotificationService', 'SyncService', 'NetworkInformationService', 'InspectionsStorage', function ($scope, LayoutService, $timeout, $q, NotificationService, SyncService, NetworkInformationService, InspectionsStorage) {
		LayoutService.setTitle('Sync Your Data');

		$scope.uploads = [];
		$scope.downloads = [];

		$scope.reset = function () {
			$scope.uploads = [];
			$scope.downloads = [];

			angular.forEach(SyncService.getItems(), function (item) {
				if (item.storage.getModified().length > 0) {
					$scope.uploads.push({
						name: item.name,
						status: 'stopped',
						count: item.storage.getModified().length,
						progress: 0,
						style: {
							width: '0%'
						}
					});
				}

				$scope.downloads.push({
					name: item.name,
					status: 'stopped',
					progress: 0,
					style: {
						width: '0%'
					}
				});
			});
		};

		$scope.restart = function () {
			if (NetworkInformationService.isOnline() == true) {
				$scope.reset();

				// Add a 600 millisecond timeout so that the progress bar animation will reset
				$timeout(
					function () {
						var uploadPromises = [];

						angular.forEach($scope.uploads, function (upload) {
							var promise = SyncService.upload(upload.name);

							upload.status = 'uploading';

							uploadPromises.push(promise);

							promise
								.then(function (output) {
									upload.status = 'completed';
									upload.count = 0;
									upload.progress = 100.0;
									upload.style.width = '100.0%';
								}, function (error) {
									upload.status = 'error';
									upload.error = error;
									upload.count = 0;
									upload.progress = 100.0;
									upload.style.width = '100.0%';
								}, function (output) {
									upload.status = 'uploading';
									upload.count = output.count;
									upload.progress = output.progress;
									upload.style.width = output.progress + '%';
								});
						});

						$q
							.all(uploadPromises)
							.then(function () {
								SyncService.resetAll();

								var downloadPromises = [];

								angular.forEach($scope.downloads, function (download) {
									var promise = SyncService.download(download.name);

									downloadPromises.push(promise);

									promise
										.then(function (data) {
											download.status = 'completed';
											download.progress = 100.0;
											download.style.width = '100.0%';
										}, function (error) {
											download.status = 'error';
											download.error = error;
											download.progress = 100.0;
											download.style.width = '100.0%';
										}, function (progress) {
											download.status = 'downloading';
											download.progress = progress;
											download.style.width = progress + '%';
										});
								});

								$q
									.all(downloadPromises)
									.then(function () {
										// Add a 10 millisecond timeout so that the progress bar animations will continue regardless of the alert opening
										$timeout(
											function () {
												NotificationService.alert('Your data has been synced successfully.', 'Done');
											},
											10
										)
									});
							}, function () {
								// Add a 10 millisecond timeout so that the progress bar animations will continue regardless of the alert opening
								$timeout(
									function () {
										NotificationService.alert('There was an error while syncing your data.', 'Error');
									},
									10
								)
							});
					},
					600
				);
			} else {
				NotificationService.alert('You must have an active internet connection to sync your data with the system.', 'Error');
			}
		};

		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-download', 'Sync', $scope.restart);

		$scope.reset();
	}]);