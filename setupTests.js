global.window = {};
global.navigator = {};
global.document = {};

const geolocation = require('mock-geolocation');
geolocation.use();

global.window.navigator = global.navigator;
