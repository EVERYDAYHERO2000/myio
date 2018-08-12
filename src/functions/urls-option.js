"use strict";

const URL = {};;
URL.port = ':' + 3000; 
URL.base = 'http://localhost'; //'http://82.202.212.221';
URL.api = '/api';
URL.sockets = URL.base + URL.port;
URL.auth = URL.base + URL.port + URL.api;
URL.registration = URL.base + URL.port + URL.api;
URL.addNew = URL.base + URL.port + URL.api;
URL.testData = './data/data.json'; 

export default URL;