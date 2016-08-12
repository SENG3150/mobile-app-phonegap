angular
	.module('joy-global')
	.controller('TechnicianSyncControllerIndex', ['$scope', 'LayoutService', '$interval', '$q', function ($scope, LayoutService, $interval, $q) {
		LayoutService.setTitle('Sync Your Data');

		$scope.uploads = [
			{
				name: 'Inspections',
				status: 'stopped',
				count: 0,
				progress: 0,
				style: {
					width: '0%'
				}
			}
		];

		$scope.downloads = [
			{
				name: 'Models',
				status: 'stopped',
				progress: 0,
				style: {
					width: '0%'
				}
			},
			{
				name: 'Machines',
				status: 'stopped',
				progress: 0,
				style: {
					width: '0%'
				}
			},
			{
				name: 'Inspections',
				status: 'stopped',
				progress: 0,
				style: {
					width: '0%'
				}
			},
			{
				name: 'Technicians',
				status: 'stopped',
				progress: 0,
				style: {
					width: '0%'
				}
			},
			{
				name: 'Domain Experts',
				status: 'stopped',
				progress: 0,
				style: {
					width: '0%'
				}
			}
		];

		$scope.reset = function () {
			angular.forEach($scope.uploads, function (upload) {
				upload.count = getRandomArbitrary(1, 6);
				upload.progress = 0;
				upload.style.width = '0%';
				upload.status = 'stopped';
			});

			angular.forEach($scope.downloads, function (download) {
				download.progress = 0;
				download.style.width = '0%';
				download.status = 'stopped';
			});
		};

		$scope.restart = function () {
			$scope.reset();

			var uploadPromises = [];

			angular.forEach($scope.uploads, function (upload) {
				upload.status = 'uploading';

				var deferred = $q.defer();

				var interval = $interval(
					function () {
						upload.progress += getRandomArbitrary(0, 5);

						if (upload.progress > 100.0) {
							upload.count--;

							if(upload.count <= 1) {
								upload.count = 0;
								upload.progress = 100.0;
								upload.status = 'completed';

								$interval.cancel(interval);

								deferred.resolve();
							} else {
								upload.progress = 0.0;
							}
						}

						upload.style.width = upload.progress + '%';
					},
					50
				);

				uploadPromises.push(deferred.promise);
			});

			$q.all(uploadPromises).then(function() {
				var downloadPromises = [];

				angular.forEach($scope.downloads, function (download) {
					download.status = 'downloading';

					var deferred = $q.defer();

					var interval = $interval(
						function () {
							download.progress += getRandomArbitrary(0, 2);

							if (download.progress > 100.0) {
								download.progress = 100.0;
								download.status = 'completed';

								$interval.cancel(interval);

								deferred.resolve();
							}

							download.style.width = download.progress + '%';
						},
						50
					);

					downloadPromises.push(deferred.promise);
				});

				$q.all(downloadPromises).then(function() {
					// Completed
				});
			});
		};

		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-download', 'Sync', $scope.restart);

		// Returns a random number between min (inclusive) and max (exclusive)
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
		function getRandomArbitrary(min, max) {
			return Math.random() * (max - min) + min;
		}
	}]);