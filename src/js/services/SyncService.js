angular
	.module('joy-global')
	.service('SyncService', ['$q', '$interval', 'Inspections', 'InspectionsStorage', 'Models', 'ModelsStorage', 'Machines', 'MachinesStorage', 'Technicians', 'TechniciansStorage', 'DomainExperts', 'DomainExpertsStorage', '$rootScope', function ($q, $interval, Inspections, InspectionsStorage, Models, ModelsStorage, Machines, MachinesStorage, Technicians, TechniciansStorage, DomainExperts, DomainExpertsStorage, $rootScope) {
		this.items = [
			{
				name: 'Models',
				service: Models,
				storage: ModelsStorage,
				include: '',
				upload: function (item) {
					if (item.fromServer) {
						return item.post();
					} else {
						return this.service.post(item);
					}
				}
			},
			{
				name: 'Machines',
				service: Machines,
				storage: MachinesStorage,
				include: 'model.majorAssemblies.subAssemblies.tests',
				upload: function (item) {
					if (item.fromServer) {
						return item.post();
					} else {
						return this.service.post(item);
					}
				}
			},
			{
				name: 'Inspections',
				service: Inspections,
				storage: InspectionsStorage,
				include: 'technician,scheduler,machine.model,majorAssemblies.majorAssembly,majorAssemblies.subAssemblies.subAssembly,photos.raw,majorAssemblies.photos.raw,majorAssemblies.subAssemblies.photos.raw,majorAssemblies.subAssemblies.machineGeneralTest.photos.raw,majorAssemblies.subAssemblies.oilTest.photos.raw,majorAssemblies.subAssemblies.wearTest.photos.raw',
				upload: function (item) {
					return this.service.getBulk().post(item);
				}
			},
			{
				name: 'Technicians',
				service: Technicians,
				storage: TechniciansStorage,
				include: '',
				upload: function (item) {
					if (item.fromServer) {
						return item.post();
					} else {
						return this.service.post(item);
					}
				}
			},
			{
				name: 'Domain Experts',
				service: DomainExperts,
				storage: DomainExpertsStorage,
				include: '',
				upload: function (item) {
					if (item.fromServer) {
						return item.post();
					} else {
						return this.service.post(item);
					}
				}
			}
		];

		// Returns a random number between min (inclusive) and max (exclusive)
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
		this.getRandomArbitrary = function (min, max) {
			return Math.random() * (max - min) + min;
		};

		var root = this;

		return {
			getItems: function () {
				return root.items;
			},
			download: function (name) {
				var deferred = $q.defer();

				var self = this;

				angular.forEach(self.getItems(), function (item) {
					if (item.name == name) {
						var progress = 0;

						var interval = $interval(
							function () {
								progress += root.getRandomArbitrary(0, 3);

								if (progress > 100.0) {
									progress = 100.0;
								}

								deferred.notify(progress);
							},
							25
						);

						item
							.service
							.getList({
								include: item.include
							})
							.then(function (data) {
								$interval.cancel(interval);

								item
									.storage
									.reset()
									.setList(data);

								self.fireDownloadFinishedEvent(name);

								deferred.resolve(data);
							}, function (error) {
								$interval.cancel(interval);

								deferred.reject(error);
							});
					}
				});

				return deferred.promise;
			},
			downloadAll: function () {
				var promises = [];

				var self = this;

				angular.forEach(self.getItems(), function (item) {
					promises.push(self.download(item.name));
				});

				return $q.all(promises);
			},
			upload: function (name) {
				var deferred = $q.defer();

				var self = this;

				angular.forEach(self.getItems(), function (item) {
					if (item.name == name) {
						var modifiedItems = item.storage.getModified();

						if (modifiedItems.length > 0) {
							var count = modifiedItems.length;
							var progressStep = 100 / count;
							var progress = 0;

							var promises = [];

							angular.forEach(modifiedItems, function (modifiedItem) {
								var promise = item.upload(modifiedItem.value);

								promise
									.then(function () {
										progress += progressStep;

										if (progress > 100.0) {
											progress = 100.0;
										}

										count--;

										if (count < 0) {
											count = 0;
										}

										deferred.notify({
											progress: progress,
											count: count
										});
									});

								promises.push(promise);
							});

							$q
								.all(promises)
								.then(function (data) {
									self.fireUploadFinishedEvent(name);

									deferred.resolve(data);
								}, function (error) {
									deferred.reject(error);
								});
						} else {
							deferred.resolve([]);
						}
					}
				});

				return deferred.promise;
			},
			uploadAll: function () {
				var promises = [];

				var self = this;

				angular.forEach(this.getItems(), function (item) {
					promises.push(self.upload(item.name));
				});

				return $q.all(promises);
			},
			fireDownloadFinishedEvent: function (name) {
				$rootScope.$broadcast('syncService.downloadFinished', {
					name: name
				});

				return this;
			},
			fireDownloadsFinishedEvent: function () {
				$rootScope.$broadcast('syncService.downloadsFinished');

				return this;
			},
			fireUploadFinishedEvent: function (name) {
				$rootScope.$broadcast('syncService.uploadFinished', {
					name: name
				});

				return this;
			},
			fireUploadsFinishedEvent: function () {
				$rootScope.$broadcast('syncService.uploadsFinished');

				return this;
			}
		};
	}]);