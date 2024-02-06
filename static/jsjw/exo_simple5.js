// Fichier : exo_simple.js
// Commentaires : création de 2 modules : 
// "module_btn"
// "module_affiche"



//const url = 'https://jsonplaceholder.typicode.com/users';

//envoyer
//Dans ce module on s'occupe du clique lors du clique du bouton "envoyer"
CORE.create_module("module_rechercher", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON
	var monInput, btn01, txtArea01,button_envoyer,baliseFocus;// Création de la variable nécessaire
	
	return {
		init: function() {

			monInput = p_sandbox.find("#numero")[0];
			btn01 = p_sandbox.find("#rechercher")[0];
			
			p_sandbox.addEvent(btn01, "click", this.f_button_envoyer);	

		},

		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button01, "click", this.f_button01);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button01 = null;
		},

		f_button_envoyer: function(){
			console.log("monInput.value : ",monInput.value)	
			var inp = monInput.value
			p_sandbox.envoyerMessage({
				type: 'userId',
				data: inp
			});		
		},
	};
});



CORE.create_module("module_fetch", function(p_sandbox) {
	// 1) Faire une requete HTTPS vers un serveur
	// 2) Envoyer les datas RX au module "module_display"
	//var texte_dataFormulaire;
	//,var baliseFocus;// Création de la variable nécessaire
	
	return {
		init: function() {
			p_sandbox.surveillerMessage({
				'userId': this.f_userId
			});
			//console.log("OK:",p_sandbox.surveillerMessage({'msgFormulaire': this.f_data }))
			console.log("surveiller message module_fetch")			
		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button01, "click", this.f_button01);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button01 = null;
		},
		f_userId : function(p_message){
			console.log("Data RX : ",p_message)
			const url = 'https://jsonplaceholder.typicode.com/users/'+ p_message ;
			console.log("url : ",p_message)			

			fetch(url)
			.then(function(jsonResponse){
				return jsonResponse.json()
			})
			.then(function(theJson){
				let r = theJson
				console.log("La réponse en json : ",r)
				p_sandbox.envoyerMessage({
					type: 'affiche',
					data: r
				});				
			})			
			console.log("!!Contenu:",p_message)
		}		
	};
});



//recevoir
//Dans ce module il s'occupe d'afficher le texte lors du clique du bouton "envoyer" 
CORE.create_module("module_display", function(p_sandbox) {
	// Afficher les datas RX
	var monName,monUsername;
	//,var baliseFocus;// Création de la variable nécessaire
	
	return {
		init: function() {
			monName = p_sandbox.find("#name")[0];			
			monUsername = p_sandbox.find("#username")[0];			

			p_sandbox.surveillerMessage({
				'affiche': this.f_affiche
			});

			//console.log("OK:",p_sandbox.surveillerMessage({'msgFormulaire': this.f_data }))
			console.log("le texte est envoyer(module_display)")
			
		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button01, "click", this.f_button01);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button01 = null;
		},
		f_affiche : function(p_message){
			console.log("#p_message : ",p_message)
			console.log("username:",p_message.username)
			monName.innerHTML = monName.innerHTML + p_message.name + "<br>";
			monUsername.innerHTML =  p_message.username + "<br>"			;
			
		}		
	};
});






CORE.start_all();




