// Fichier : sandbox.js
// Comment : This 'SandBox' is a rather simplistic sandbox, 
// but it should give you an idea of the way the sandbox works. 
// Also, as you use it, you’ll be able to add other methods when your modules require it.

var Sandbox = {
	// A sandbox is a thin wrapper that gives the module JUST THE RIGHT AMOUNT of access to the core. 
	create: function(core, module_selector) {
		// 'core' : a reference to the core 
		// 'module_selector' : the name of the module it’s going to be given to.
		var CONTAINER = core.dom.query('#' + module_selector);
		// 'CONTAINER' : the DOM element that corresponds with the module code. 
		return {
			find: function(selector) {
				// The core.dom.query returned the container with a method that lets 
				// it search FOR CHILD ELEMENTS by selector; 
				// We’re using this TO LIMIT a module’s ability to affect the DOM, 
				// thus keeping it a module in the HTML as well as the JavaScript.
				return CONTAINER.query(selector);
			},
			addEvent: function(element, type, fn) { //addEventListener
				core.dom.bind(element, type, fn);
			},
			removeEvent: function(elemnent, type, fn) {
				core.dom.unbind(element, type, fn);
			},
			// The next 3 functions (notify, listen, ignore) ARE THE VEHICLES that the modules 
			// use TO INFORM OTHER MODULES ABOUT THEIR ACTIONS. 
			// I’ve added a bit of error checking to these to make sure the event data is all okay 
			// before we send it along to the core. 
			// Note that when telling the core what we’re listening for or ignoring, 
			// we need to pass the name of the module as well.
			envoyerMessage: function(p_message) {
				if (core.is_obj(p_message) && p_message.type) {
					core.triggerEvent(p_message);
				}
			},
			surveillerMessage: function(p_message) {
				// Un module doit surveiller la survenue d'un message en particulier
				if (core.is_obj(p_message)) {
					core.registerEvents(p_message, module_selector);
				}
			},
			ignorer: function(evts) {
				// L'opposé de 'surveillerMessage'
				if (core.is_arr(evts)) {
					core.removeEvents(evts, module_selector)
				}
			},
			create_element: function(el, config) {
				// el : the name of an element
				// config : a configuration object
				// should this function be part of the core ? 
				
				var i, child, text;
				// We start by creating the DOM element (use a core method).
				el = core.dom.create(el);

				 // Then we delete the children property 
				
				if (config) {
					if (config.children && core.is_arr(config.children)) {
						// Then, if there is a config object, and it has an array called children, 
						// we’ll loop over each child and append it to the element.
						i = 0;
						while(child = config.children[i]) {
							el.appendChild(child);
							i++;
						}
						// Then we delete the children property
						delete config.children;
					}
					if (config.text) {
						// Otherwise, if we have a text property, 
						// we’ll set the text of the element to that and delete the text property 
						// (in this example, we can’t have both text and child elements). 
						el.appendChild(document.createTextNode(config.text));
						delete config.text;
					}
					// Finally, we use another core function to apply 
					// the remaining attributes and return the element.						
					core.dom.apply_attrs(el, config);
					return el;					
				}
			}
		};
	}
}