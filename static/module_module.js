var myModule = {};

(function(nameSpace) {

nameSpace.version = "1.0",

nameSpace.name = "application myModule",

nameSpace.createModule = function() {console.log("Ici je demande un nouveau module en retour") },

nameSpace.init = function() {console.log("Exécution de la fonction init()") }

})(myModule);