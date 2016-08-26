angular
	.module('joy-global')
	.service('SettingsService', ['$localStorage', function ($localStorage) {
		if (typeof $localStorage.settings == 'undefined') {
			$localStorage.settings = [];
		}

		return {
			setDefaults: function (defaults) {
				var self = this;

				angular.forEach(defaults, function (value, key) {
					if (self.get(key) == null) {
						$localStorage.settings.push({
							key: key,
							value: value
						});
					}
				});

				return this;
			},
			set: function (key, value) {
				var insert = {
					key: key,
					value: value
				};

				var found = false;

				angular.forEach($localStorage.settings, function (item, index) {
					if (item.key == insert.key) {
						$localStorage.settings[index].value = insert.value;
						found = true;
					}
				});

				if (found == false) {
					$localStorage.settings.push(insert);
				}

				return this;
			},
			get: function (key) {
				var output = null;

				angular.forEach($localStorage.settings, function (item) {
					if (item.key == key) {
						output = item.value;
					}
				});

				return output;
			}
		};
	}]);