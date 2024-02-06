// Fichier : core-jquery.js

var CORE = (function () {
	// 'moduleData' to store everything there is to know about the modules; 
	var moduleData = {},
	to_s = function(anything) { return Object.prototype.toString.call(anything); },
	// the debug variable controls whether or not errors are logged to the console
	debug = true;
	
	return {
		getModuleData: function(){
			// Ajouté par moi 20/11/2023
			return moduleData;
		},
		debug: function(on) {
			// We’ve got a simple debug function to turn errors on and off.
			debug = on ? true : false;
		},
		create_module: function(moduleID, creator) {
			// 'create_module' : used to register our modules
			var temp;
			
			if (typeof moduleID === 'string' && typeof creator === 'function') {
				// The first thing we do is confirm that the parameters passed to the function were of the right type; 
				// if they aren’t we’ll call a log function, which takes a severity number and a message.
				temp = creator(Sandbox.create(this, moduleID));
				// Next, with 'temp' we create a copy of the module in question 
				// just to make sure it has the init and destroy functions; if it doesn’t, we again log an error. 
				if (temp && temp.init && typeof temp.init === 'function' && temp.destroy && typeof temp.destroy === 'function') {
					temp = null;// we delete the temporary copy of the module.

					moduleData[moduleID] = {
						// we add an object to 'moduleData'; 
						// we’re storing the creator function and an empty spot for the instance when we start the module. 
						create: creator,
						instance: null
					};
				} else {
					this.log(1, "Module '" + moduleID + "' Registration : FAILED : instance has no init or destroy functions")
				}
			} else {
				this.log(1, "Module '" + moduleID + "' Registration : FAILED : one or more arguments are of incorrect type");
			}
		},
		start: function(moduleID) {
			// Starting the module. 
			// 'moduleID' : module name. If there’s a corresponding module in moduleData, we’ll run its create method, 
			// passing it a new sandbox instance. Then, we’ll start it up by running its init method.

			var mod = moduleData[moduleID];
			if (mod) {
				mod.instance = mod.create(Sandbox.create(this, moduleID));
				mod.instance.init();
			}
		},
		start_all: function() {
			// Start all the modules at once. 
			// We loop over 'moduleData' and send each moduleID to the start method. 
			// Don’t forget to use the 'hasOwnProperty' part; 
			// it’s used just in case someone has added item to the object’s prototype object.
			var moduleID;
			for (moduleID in moduleData) {
				if (moduleData.hasOwnProperty(moduleID)) {
					this.start(moduleID);
				}
			}
		},
		stop: function(moduleID) {
			// The stop function takes a module name; if the system knows about a module with that name 
			// and that module is running, we’ll call that module’s destroy method, and then set the instance to null. 
			// If the module doesn’t exist or isn’t running, we’ll log the error.
			var mod;
			if (mod = moduleData[moduleID] && mod.instance) {
				mod.instance.destroy();
				mod.instance = null;
			} else {
				this.log(1, "Stop Module '" + moduleID + "': FAILED : module does not exist or has not been started");
			}
		},
		stop_all: function() {
			// The stop_all function is exactly like start_all, except is calls stop on each module.
			var moduleID;
			for (moduleID in moduleData) {
				if (moduleData.hasOwnProperty(moduleID)) {
					this.stop(moduleID);
				}
			}
		},
		registerEvents: function (evts, mod) {
			// Here a module ('mod') can register events with the object 'evts'. 
			// 'registerEvents' takes an object of events and the module that’s registering them. 
			if (this.is_obj(evts) && mod) {
				// We do some error checking. 
				// If evts is an object and we know which module we’re talking about, 
				// we’ll just stuff the object into the module’s locker in moduleData.
				if (moduleData[mod]) {
					moduleData[mod].events = evts;
				} else {
					this.log(1, "Register Events failed");
				}
			}
		},
		triggerEvent: function(evt) {
			// When it comes to triggering events, we’re given an object with a type and data. 
			// We’ll loop over each module in moduleData once again: 
			// if the module has an event property and that event object has a key corresponding to the event we’re executing, 
			// we’ll call the function stored for that event and pass it the event’s data.
			var mod;
			for (mod in moduleData) {
				if (moduleData.hasOwnProperty(mod)) {
					mod = moduleData[mod];
					if (mod.events && mod.events[evt.type]) {
						mod.events[evt.type](evt.data);
					}
				}
			}
		},
		removeEvents: function(evts, mod) {
			// We get the events object and (after the usual error checking) we loop over it 
			// and remove the events in the array from the module’s event object. 
			if (this.is_obj(evts) && mod && (mod = moduleData[mod]) && mod.events) {
				delete mod.events;
			}
		},
		log: function(severity, message) {
			// LOGGING : basically, we’re in debug mode, we’ll log errors to the console; 
			// otherwise we’ll send them to the server. 
			// Oh, the fancy ternary stuff? That just uses the severity argument to decide 
			// which of Firebug’s functions to use to log the error: 
			// 1 === console.log, 2 === console.warn, >2 === console.error.
			if (debug) {
				console[ (severity === 1) ? 'log' : (severity === 2) ? 'warn' : 'error'](message);
			} else {
				//send to the server
			}
		},
		dom: {
			// Now we’re ready to look at the part of the core that gives the sandbox the base functionality; 
			// sub-classed in a 'dom' object.
			query: function(selector, context) {
				// 'selector' : CSS selector
				// 'context' : 'dojo' (jQuery ?) object
				
				// Now remember, this is the core, where we can directly reference the base (which is dojo). 
				// In this case, the context should be a 'dojo' (jQuery ?) object. 
				// If the context has a find method, we’ll set jqEls to the result of context.find(selector); 
				// if you’re familiar with jQuery, you’ll know that this will only get the element that are children of context; 
				// that’s how we get the functionality of sandbox.query! 
				// Then, we’ll set our return object to the result of calling jQuery’s get method; 
				// this returns an object of raw dom elements. 
				// Then, we give ret the length property, so it can be looped over easily. 
				// Finally, we give it a query function: this function takes only one parameter, a selector, and it calls core.dom.query, 
				// passing that selector and jqEls as the parameters. That’s it!
				var ret = {}, that = this, jqEls, i = 0;
				if (context && context.find) {
					jqEls = context.find(selector);
				} else {
					jqEls = jQuery(selector);
				}
				
				ret = jqEls.get();
				ret.length = jqEls.length;
				ret.query = function(sel) {
					return that.query(sel, jqEls);
				}
				return ret;
			},
			bind: function(element, evt, fn) {
				// In the DOM event bind and unbind functions, I’ve decided to provide a perk for the user. 
				// J'ai décidé d'offrir un avantage à l'utilisateur
				// The users must pass at least two functions, but if the evt parameter is a function, 
				// then we’ll assume the user has left out the event type they want to handle. 
				// In that case, we’ll assume a click, since it’s the most common. 
				// Then, we just use jQuery’s bind function to wire it up. 
				// I should note that because our query function returns (minimally) wrapped DOM sets, 
				// similar to jQuery’s, this function can pass our set to the Jquery object and it has no problems with it.
				if (element && evt) {
					if (typeof evt === 'function') {
						fn = evt;
						evt = 'click';
					}
					jQuery(element).bind(evt, fn);
				} else {
					//log wrong arguments
				}
			},
			unbind: function(element, evt, fn) {
				// The 'unbind' function is exactly the same as 'bind', except, of course, that it unbinds the events.
				if (element && evt) {
					if (typeof evt === 'function') {
						fn = evt;
						evt = 'click';
					}
					jQuery(element).unbind(evt, fn);
				} else {
					//log wrong arguments
				}
			},
			create: function(el) {
				// dom.create simply returns a new DOM element;
				// ERROR 'document' ???
				return document.createElement(el);
			},
			apply_attrs: function(el, attrs) {
				// dom.apply_attrs uses jQuery’s attr() method to give the element attributes
				jQuery(el).attr(attrs);
			}
		},
		// 'is_arr' & 'is_obj' two helper functions to verify our parameters.
		is_arr: function(arr) {
			return jQuery.isArray(arr);
		},
		is_obj: function(obj) {
			return jQuery.isPlainObject(obj);
		}
	};
}());