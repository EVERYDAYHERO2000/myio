"use strict";

let cssVars = function (className) {
	let sheets = document.styleSheets;
	for (var i = 0; i < sheets.length; i++) {
		let classes = document.styleSheets[i].rules || document.styleSheets[i].cssRules;

		for (var x = 0; x < classes.length; x++) {
			
			if (classes[x].selectorText == className) {
				console.log(classes[x])	
				let cssText = (classes[x].cssText) ? classes[x].cssText : aclasses[x].style.cssText;
				cssText = cssText.match(/{([^}]+)/g)[0].split('{')[1].trim();
				let result = {};
				let attributes = cssText.split(';');
				for (var i = 0; i < attributes.length; i++) {
					if (attributes[i]) {
						let entry = attributes[i].trim().split(':');
						result[entry.splice(0, 1)[0]] = entry.join(':').trim();
					}
				}
				
				return result
			}
		}
	}
}

export default cssVars;