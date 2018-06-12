"use strict";

const URL = {};
URL.base = 'http://localhost/chattask_server';
URL.auth = URL.base + '/auth.php';
URL.registration = URL.base + '/registration.php';
URL.addNew = URL.base + '/addnew.php';
URL.testData = './data/data.json'; 

export default URL;