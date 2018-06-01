"use strict";

APP.f.auth = {};

APP.f.auth.load = function() {	
	const __auth__ = {
		login : localStorage.getItem('login') || null,
		pass : localStorage.getItem('pass') || null,
		authValid : localStorage.getItem('authValid') || null
	};
	
	return __auth__;
}

APP.f.auth.submit = function(login, pass) {
	localStorage.setItem('login', login);
	localStorage.setItem('pass', pass);
}

APP.f.auth.clear = function(){
	localStorage.removeItem('login');
	localStorage.removeItem('pass');
	localStorage.removeItem('authValid');
}