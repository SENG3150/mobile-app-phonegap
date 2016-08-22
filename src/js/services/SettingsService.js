angular
    .module('joy-global')
    .service('SettingsService', ['$localStorage', function($localStorage) {
        this.set = function(key, value) {
            $localStorage.settings[key] = value;
        };

        this.get = function(key) {
            return $localStorage.settings[key];
        };

        this.has = function(key) {
            return key in $localStorage.settings;
        }
    }]);