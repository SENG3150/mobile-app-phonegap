angular
	.module('joy-global')
	.service('NotificationService', ['PGDeviceReady', function (PGDeviceReady) {
		return {
			alert: function (message, title, alertCallback, buttonName) {
				PGDeviceReady.onReady(function () {
					if (navigator.notification) {
						navigator.notification.alert(message, alertCallback, title, buttonName);
					} else {
						window.alert(message);
					}
				});
			},
			confirm: function (message, title, confirmCallback, buttonLabels) {
				PGDeviceReady.onReady(function () {
					if (navigator.notification) {
						navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
					} else {
						window.confirm(message);
					}
				});
			},
			prompt: function (message, title, defaultText, promptCallback, buttonLabels) {
				PGDeviceReady.onReady(function () {
					if (navigator.notification) {
						navigator.notification.prompt(message, promptCallback, title, buttonLabels, defaultText);
					} else {
						window.prompt(message, defaultText);
					}
				});
			},
			beep: function (times) {
				PGDeviceReady.onReady(function () {
					if (navigator.notification) {
						navigator.notification.beep(times);
					}
				});
			}
		};
	}]);