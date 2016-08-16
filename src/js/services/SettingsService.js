angular
    .module('joy-global')
    .service('SettingsService', ['$localStorage', function($localStorage) {
        // key : String, value : String
        this.set = function(key, value) {
            $localStorage.settings[key] = value;
        };

        // key : String, return : String
        this.get = function(key) {
            return $localStorage.settings[key];
        };
    }]);