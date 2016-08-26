var Promise = require('es6-promise').Promise;
var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var ngConstant = require('gulp-ng-constant');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var phonegapBuild = require('gulp-phonegap-build');
var fs = require('fs');
var filesize = require('filesize');
var cheerio = require('cheerio');
var replace = require('gulp-replace');

var configConfig = {
	source: [
		'config.xml'
	],
	destination: 'www/'
};

gulp.task('config', function () {
	var config = configConfig;

	return gulp.src(config.source)
		.pipe(gulp.dest(config.destination));
});

var indexConfig = {
	source: [
		'src/index.html'
	],
	destination: 'www/'
};

gulp.task('index', function () {
	var config = indexConfig;

	return gulp.src(config.source)
		.pipe(gulp.dest(config.destination));
});

var imagesConfig = {
	source: [
		'src/img/**/*'
	],
	destination: 'www/img/'
};

gulp.task('images', function () {
	var config = imagesConfig;

	return gulp.src(config.source)
		.pipe(gulp.dest(config.destination));
});

var templateCacheConfig = {
	source: [
		'src/views/*.html',
		'src/views/**/*.html',
		'src/views/**/**/*.html'
	],
	destination: 'www/js/',
	options: {
		standalone: true,
		root: 'views/'
	}
};

gulp.task('template-cache', function () {
	var config = templateCacheConfig;

	return gulp.src(config.source)
		.pipe(templateCache(config.options))
		.pipe(gulp.dest(config.destination));
});

var concatCoreConfig = {
	source: [
		'bower_components/angular/angular.js',
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/angular-ui-router/release/angular-ui-router.js',
		'bower_components/moment/moment.js',
		'bower_components/angular-moment/angular-moment.js',
		'bower_components/satellizer/satellizer.js',
		'bower_components/ngstorage/ngStorage.js',
		'bower_components/angular-sanitize/angular-sanitize.js',
		'bower_components/restangular/dist/restangular.js',
		'bower_components/underscore/underscore-min.js',
		'bower_components/angular-underscore-module/angular-underscore-module.js',
		'bower_components/ratchet/js/modals.js',
		'bower_components/ratchet/js/popovers.js',
		'bower_components/ratchet/js/sliders.js',
		'bower_components/ratchet/js/toggles.js'
	],
	destination: 'www/js/',
	output: 'core.js'
};

gulp.task('concat-core', function () {
	var config = concatCoreConfig;

	return gulp.src(config.source)
		.pipe(concat(config.output))
		.pipe(uglify({
			mangle: false,
			compress: false
		}))
		.pipe(gulp.dest(config.destination));
});

var concatPluginsConfig = {
	source: [
		'src/js/plugins/segmented-controllers.js'
	],
	destination: 'www/js/',
	output: 'plugins.js'
};

gulp.task('concat-plugins', function () {
	var config = concatPluginsConfig;

	return gulp.src(config.source)
		.pipe(concat(config.output))
		.pipe(uglify({
			mangle: false,
			compress: false
		}))
		.pipe(gulp.dest(config.destination));
});

var concatAppConfig = {
	source: [
		'src/js/app.js',
		'src/js/config.js',
		'src/js/run.js',
		'src/js/ngConstants.js',
		'src/js/controllers/**/*.js',
		'src/js/controllers/*.js',
		'src/js/directives/**/*.js',
		'src/js/directives/*.js',
		'src/js/factories/**/*.js',
		'src/js/factories/*.js',
		'src/js/filters/**/*.js',
		'src/js/filters/*.js',
		'src/js/providers/**/*.js',
		'src/js/providers/*.js',
		'src/js/routes/**/*.js',
		'src/js/routes/*.js',
		'src/js/services/**/*.js',
		'src/js/services/*.js'
	],
	destination: 'www/js/',
	output: 'app.js'
};

gulp.task('concat-app', function () {
	var config = concatAppConfig;

	return gulp.src(config.source)
		.pipe(concat(config.output))
		.pipe(uglify())
		.pipe(gulp.dest(config.destination));
});

var concatCSSConfig = {
	source: [
		'bower_components/font-awesome/css/font-awesome.min.css',
		'src/css/custom.css'
	],
	destination: 'www/css/',
	output: 'app.css'
};

gulp.task('concat-css', function () {
	var config = concatCSSConfig;

	return gulp.src(config.source)
		.pipe(concat(config.output))
		.pipe(cssnano())
		.pipe(gulp.dest(config.destination));
});

var copyAssetsConfig = {
	fonts: {
		source: [
			'bower_components/font-awesome/fonts/*',
			'bower_components/ratchet/dist/fonts/*'
		],
		destination: 'www/fonts/'
	}
};

gulp.task('copy-fonts', function () {
	var config = copyAssetsConfig.fonts;

	return gulp.src(config.source)
		.pipe(gulp.dest(config.destination));
});

var themeConfig = {
	source: [
		'theme/ratchet.scss'
	],
	watch: [
		'theme/*.scss'
	],
	destination: 'www/css/',
	output: 'theme.css'
};

gulp.task('build-theme', function () {
	var config = themeConfig;

	return gulp.src(config.source)
		.pipe(sass())
		.pipe(cssnano())
		.pipe(rename(config.output))
		.pipe(gulp.dest(config.destination));
});

gulp.task('env-development', function () {
	var config = {
		space: '  ',
		name: 'config',
		stream: true,
		constants: {
			ENV: {
				name: 'development',
				apiEndpoint: 'http://seng3150.api.local/'
			}
		},
		destination: 'src/js/'
	};

	return ngConstant(config)
		.pipe(gulp.dest(config.destination));
});

gulp.task('env-production', function () {
	var config = {
		space: '  ',
		name: 'config',
		stream: true,
		constants: {
			ENV: {
				name: 'production',
				apiEndpoint: 'https://seng3150-api.wingmanwebdesign.com.au/'
			}
		},
		destination: 'src/js/'
	};

	return ngConstant(config)
		.pipe(gulp.dest(config.destination));
});

gulp.task('phonegap-build', ['config', 'index', 'images', 'template-cache', 'concat-core', 'env-production', 'concat-app', 'concat-plugins', 'concat-css', 'copy-fonts', 'build-theme'], function () {
	var config = JSON.parse(fs.readFileSync('./phonegap-config.json'));

	return gulp.src('www/**/*')
		.pipe(phonegapBuild(config));
});

gulp.task('watch-apps', function () {
	var config = JSON.parse(fs.readFileSync('./phonegap-config.json'));

	var src = [
		config.download.ios,
		config.download.android
	];

	var watcher = gulp.watch(src, ['update-versions']);
	var timeout = setTimeout(watcher.end, 180 * 1000);

	var changes = 0;

	watcher.on('change', function () {
		changes++;

		if (changes == 2) {
			clearTimeout(timeout);
			watcher.end();
		}
	});
});

gulp.task('update-versions', function () {
	var config = JSON.parse(fs.readFileSync('./phonegap-config.json'));

	var $ = cheerio.load(
		fs.readFileSync('./config.xml'),
		{
			xmlMode: true
		}
	);

	var versions = {
		version: $('widget')[0].attribs.version,
		time: Date.now(),
		ios: {
			size: filesize(fs.statSync(config.download.ios)['size']),
			path: config.apps.url + 'ios.ipa',
			manifest: config.apps.url + config.apps.manifest
		},
		android: {
			size: filesize(fs.statSync(config.download.android)['size']),
			path: config.apps.url + 'android.apk'
		}
	};

	fs.writeFile(config.apps.path + '/' + config.apps.versions, JSON.stringify(versions));

	return gulp.src(['templates/manifest.plist'])
		.pipe(replace('${URL}', config.apps.url + 'ios.ipa'))
		.pipe(replace('${BUNDLE_IDENTIFIER}', $('widget')[0].attribs.id))
		.pipe(replace('${APPLICATION_VERSION}', $('widget')[0].attribs.version))
		.pipe(replace('${DISPLAY_NAME}', $('name')[0].children[0].data))
		.pipe(rename(config.apps.manifest))
		.pipe(gulp.dest(config.apps.path));
});

gulp.task('watcher', function () {
	gulp.watch(configConfig.source, ['config']);
	gulp.watch(indexConfig.source, ['index']);
	gulp.watch(imagesConfig.source, ['images']);
	gulp.watch(templateCacheConfig.source, ['template-cache']);
	gulp.watch(concatCoreConfig.source, ['concat-core']);
	gulp.watch(concatAppConfig.source, ['concat-app']);
	gulp.watch(concatPluginsConfig.source, ['concat-plugins']);
	gulp.watch(concatCSSConfig.source, ['concat-css']);
	gulp.watch(themeConfig.watch, ['build-theme']);
});

function onError(err) {
	console.log(err);
	this.emit('end');
}

gulp.task('default', ['config', 'index', 'images', 'template-cache', 'concat-core', 'env-production', 'concat-app', 'concat-plugins', 'concat-css', 'copy-fonts', 'build-theme', 'watcher']);
gulp.task('development', ['config', 'index', 'images', 'template-cache', 'concat-core', 'env-development', 'concat-app', 'concat-plugins', 'concat-css', 'copy-fonts', 'build-theme', 'watcher']);
gulp.task('deployment', ['config', 'index', 'images', 'template-cache', 'concat-core', 'env-production', 'concat-app', 'concat-plugins', 'concat-css', 'copy-fonts', 'build-theme', 'phonegap-build', 'watch-apps']);