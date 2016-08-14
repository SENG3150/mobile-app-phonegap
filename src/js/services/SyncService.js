angular
	.module('joy-global')
	.service('SyncService', ['$q', '$interval', 'Inspections', 'InspectionsStorage', 'Models', 'ModelsStorage', 'Machines', 'MachinesStorage', 'Technicians', 'TechniciansStorage', 'DomainExperts', 'DomainExpertsStorage', function ($q, $interval, Inspections, InspectionsStorage, Models, ModelsStorage, Machines, MachinesStorage, Technicians, TechniciansStorage, DomainExperts, DomainExpertsStorage) {
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
				name: 'Inspections',
				service: Inspections,
				storage: InspectionsStorage,
				include: 'technician,scheduler,machine.model,majorAssemblies.majorAssembly,majorAssemblies.subAssemblies.subAssembly',
				upload: function (item) {
					if (item.fromServer) {
						return item.post();
					} else {
						return this.service.getBulk().post(item);
					}
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

		var self = this;

		return {
			getItems: function () {
				return self.items;
			},
			download: function (name) {
				var deferred = $q.defer();

				angular.forEach(this.getItems(), function (item) {
					if (item.name == name) {
						var progress = 0;

						var interval = $interval(
							function () {
								progress += self.getRandomArbitrary(0, 3);

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

								deferred.resolve(data);
							}, function () {
								$interval.cancel(interval);

								deferred.reject();
							});
					}
				});

				return deferred.promise;
			},
			downloadAll: function () {
				var promises = [];

				angular.forEach(this.getItems(), function (item) {
					promises.push(this.download(item.name));
				});

				return $q.all(promises);
			},
			upload: function (name) {
				var deferred = $q.defer();

				angular.forEach(this.getItems(), function (item) {
					if (item.name == name) {
						var modifiedItems = item.storage.getModified();

						if (modifiedItems.length > 0) {
							var count = modifiedItems.length;
							var progressStep = 100 / count;
							var progress = 0;

							var promises = [];

							angular.forEach(modifiedItems, function (modifiedItem) {
								var promise = item.upload(modifiedItem);

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

				angular.forEach(this.getItems(), function (item) {
					promises.push(this.upload(item.name));
				});

				return $q.all(promises);
			}
		};
	}]);