angular
	.module('joy-global')
	.service('ItemStorageService', ['$localStorage', '_', function ($localStorage, _) {
		if (typeof $localStorage.storage == 'undefined') {
			$localStorage.storage = {};
		}

		return {
			service: function (name) {
				if (typeof $localStorage.storage[name] == 'undefined') {
					$localStorage.storage[name] = {
						synced: [],
						modified: []
					};
				}

				var mergeItems = function (includeModified) {
					if (typeof includeModified == 'undefined') {
						includeModified = true;
					}

					var items = {};

					angular.forEach($localStorage.storage[name].synced, function (item) {
						items[item.key] = item.value;
					});

					if (includeModified == true) {
						angular.forEach($localStorage.storage[name].modified, function (item) {
							items[item.key] = item.value;
						});
					}

					return _.values(items);
				};

				return {
					getStorage: function () {
						return $localStorage.storage[name];
					},
					reset: function (modified) {
						$localStorage.storage[name].synced = [];

						if (typeof modified != 'undefined' && modified == true) {
							$localStorage.storage[name].modified = [];
						}

						return this;
					},
					getList: function (includeModified) {
						return mergeItems(includeModified);
					},
					getModified: function () {
						return $localStorage.storage[name].modified;
					},
					get: function (id, includeModified) {
						var items = this.getList(includeModified);

						var output = null;

						angular.forEach(items, function (item) {
							if (item.id == id) {
								output = item;
							}
						});

						return output;
					},
					all: function (includeModified) {
						return this.getList(includeModified);
					},
					one: function (id, includeModified) {
						return this.get(id, includeModified);
					},
					isModified: function (id) {
						var items = this.getModified();

						var output = false;

						angular.forEach(items, function (item) {
							if (item.key == id) {
								output = true;
							}
						});

						return output;
					},
					setList: function (items, modified) {
						if (typeof modified == 'undefined') {
							modified = false;
						}

						angular.forEach(items, function (item) {
							var insert = {
								key: item.id,
								value: item
							};

							if (modified == true) {
								$localStorage.storage[name].modified.push(insert);
							} else {
								$localStorage.storage[name].synced.push(insert);
							}
						});

						return this;
					},
					set: function (item, modified) {
						if (typeof modified == 'undefined') {
							modified = true;
						}

						if (typeof item.id == 'undefined') {
							item.id = (new Date()).getTime();
						}

						var insert = {
							key: item.id,
							value: item
						};

						var found = false;

						if (modified == true) {
							angular.forEach($localStorage.storage[name].modified, function (item, index) {
								if (item.key == insert.key) {
									$localStorage.storage[name].modified[index].value = insert.value;
									found = true;
								}
							});

							if (found == false) {
								$localStorage.storage[name].modified.push(insert);
							}
						} else {
							angular.forEach($localStorage.storage[name].synced, function (item, index) {
								if (item.key == insert.key) {
									$localStorage.storage[name].synced[index].value = insert.value;
									found = true;
								}
							});

							if (found == false) {
								$localStorage.storage[name].synced.push(insert);
							}
						}

						return item;
					}
				};
			}
		};
	}]);