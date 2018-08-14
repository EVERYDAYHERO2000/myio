"use strict";

const URL = {};;
URL.port = [':',3000].join(''); 
URL.base = 'http://localhost'; //'http://82.202.212.221';
URL.api = '/api';
URL.sockets = [URL.base,URL.port].join('');
URL.auth = [URL.base,URL.port,URL.api].join('');
URL.registration = [URL.base,URL.port,URL.api].join('');
URL.addNew = [URL.base,URL.port,URL.api].join('');
URL.testData = './data/data.json'; 

export default URL;