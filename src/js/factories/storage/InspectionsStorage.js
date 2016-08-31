angular
	.module('joy-global')
	.factory('InspectionsStorage', ['ItemStorageService', '_', function (ItemStorageService, _) {
		var service = ItemStorageService.service('inspections');

		service.getInspection = function (inspection) {
			return service.one(inspection);
		};

		service.getMajorAssembly = function (inspection, majorAssembly) {
			return _.find(
				service.one(inspection).majorAssemblies,
				function (major) {
					return (major.id == majorAssembly);
				}
			);
		};

		service.getSubAssembly = function (inspection, majorAssembly, subAsssembly) {
			return _.find(
				service.getMajorAssembly(inspection, majorAssembly).subAssemblies,
				function (sub) {
					return (sub.id == subAsssembly);
				}
			);
		};

		return service;
	}]);