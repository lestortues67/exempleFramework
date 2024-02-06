export var core = {};

( function(nameSpace,subNameSpace) {
	nameSpace[subNameSpace] = {},
	nameSpace.version = "1.0",
	nameSpace.name = "application Core",
	nameSpace.create_module = function(p_moduleName, p_f_makeModule) {
		// p_moduleName: name to give to the module
		// p_f_makeModule : function that makes the module
		console.log("Exécution de la fonction create_module()");
	},
	nameSpace.is_obj = function() {console.log("Exécution de la fonction is_obj()") },
	nameSpace.triggerEvent = function() {console.log("Exécution de la fonction triggerEvent()") },
	nameSpace.registerEvents = function(p_events, p_registerModule) {
		// p_events : 
		// p_registerModule : the module that’s registering them
		console.log("Exécution de la fonction registerEvents()") 
	},
	nameSpace.is_arr = function() {console.log("Exécution de la fonction is_arr()") },
	nameSpace.removeEvents = function() {console.log("Exécution de la fonction removeEvents()") },
	nameSpace.start = function() {console.log("Exécution de la fonction start()") },
	nameSpace.start_all = function() {console.log("Exécution de la fonction start_all()") },
	nameSpace.stop = function() {console.log("Exécution de la fonction stop()") },
	nameSpace.stop_all = function() {console.log("Exécution de la fonction stop_all()") },
	nameSpace.log = function() {console.log("Exécution de la fonction log()") },
	
	nameSpace[subNameSpace].query = function() {console.log("Exécution de la fonction query()") },
	nameSpace[subNameSpace].bind = function() {console.log("Exécution de la fonction bind()") },
	nameSpace[subNameSpace].unbind = function() {console.log("Exécution de la fonction unbind()") },
	nameSpace[subNameSpace].create = function() {console.log("Exécution de la fonction create()") }, 
	nameSpace[subNameSpace].apply_attrs = function() {console.log("Exécution de la fonction apply_attrs()") } 

	})(core, "dom");



var smallCore = {};

(function(nameSpace,subNameSpace) {
nameSpace[subNameSpace] = {},
nameSpace.name = "application Core",
nameSpace.create_module = function() {console.log("Exécution de la fonction create_module()") },
nameSpace[subNameSpace].init  = function() {console.log("Exécution de la fonction init()") }
})(smallCore, "dom");




