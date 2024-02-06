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
				if (temp && temp.init && typeof temp.init === 'function' && temp.destroy && typeof temp.destroy === 'function') {
					temp = null;
					moduleData[moduleID] = {
						create: creator,
						instance: null
					};
				} else {
					// WRONG types of parameters : we call a log function, which takes a severity number (1) and a message.
					this.log(1, "Module '" + moduleID + "' Registration : FAILED : instance has no init or destroy functions")
				}
			} else {
				this.log(1, "Module '" + moduleID + "' Registration : FAILED : one or more arguments are of incorrect type");
			}
		},
		start: function(moduleID) {
			var mod = moduleData[moduleID];
			if (mod) {
				mod.instance = mod.create(Sandbox.create(this, moduleID));
				mod.instance.init();
			}
		},
		start_all: function() {
			var moduleID;
			for (moduleID in moduleData) {
				if (moduleData.hasOwnProperty(moduleID)) {
					this.start(moduleID);
				}
			}
		},
		stop: function(moduleID) {
			var mod;
			if (mod = moduleData[moduleID] && mod.instance) {
				mod.instance.destroy();
				mod.instance = null;
			} else {
				this.log(1, "Stop Module '" + moduleID + "': FAILED : module does not exist or has not been started");
			}
		},
		stop_all: function() {
			var moduleID;
			for (moduleID in moduleData) {
				if (moduleData.hasOwnProperty(moduleID)) {
					this.stop(moduleID);
				}
			}
		},
		registerEvents: function (evts, mod) {
			// Here a module ('mod') can register one or several events. 
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
				var ret = {}, that = this, len, i = 0, djEls;
				// dojo.query est utilisée pour sélectionner des éléments du DOM de manière similaire à jQuery.
				djEls = dojo.query( ((context) ? context + " " : "") +  selector);
				len = djEls.length;
				
				while (i<len) {
					ret[i] = djEls[i++];
				}
				ret.length = len;
				ret.query = function(sel) {
					return that.query(sel, selector);
				}
				return ret;
			},
			eventStore: {},
			bind: function(element, evt, fn) {
				if (element.length) {
					var i = 0, len = element.length;
					for (; i<len; i++) {
						this.eventStore[element[i] + evt + fn] = dojo.connect(element[i], evt, element[i], fn)
					}
				} else {
					this.eventStore[element + evt + fn] = dojo.connect(element, evt, element, fn);
				}
			},
			unbind: function(element, evt, fn) {
				if (element.length) {
					var i = 0, len = element.length;
					for (; i<len; i++) {
						dojo.disconnect(this.eventStore[element[i] + evt + fn]);
						delete this.eventStore[element[i] + evt + fn];
					}
				} else {
					dojo.disconnect(this.eventStore[element + evt + fn]);
					delete this.eventStore[element + evt + fn];
				}
			},
			create: function(el) {
				return document.createElement(el);
			},
			apply_attrs: function(el, attrs) {
				var attr;
				for (attr in attrs) {
					dojo.attr(el, attr, attrs[attr]);
				}
			}
		},
		is_arr: function(arr) {
			return dojo.isArray(arr);
		},
		is_obj: function(obj) {
			return dojo.isObject(obj);
		}
	};
}());