"use strict";

APP.f.auth = {};

APP.f.auth.load = function() {	
	const __auth__ = {
		email : localStorage.getItem('email') || null,
		pass : localStorage.getItem('pass') || null,
		authValid : localStorage.getItem('authValid') || null
	};
	
	return __auth__;
}

APP.f.auth.setup = function(email, pass) {
	localStorage.setItem('email', email);
	localStorage.setItem('pass', pass);
	localStorage.setItem('authValid', true);
}

APP.f.auth.clear = function(){
	localStorage.removeItem('email');
	localStorage.removeItem('pass');
	localStorage.removeItem('authValid');
}