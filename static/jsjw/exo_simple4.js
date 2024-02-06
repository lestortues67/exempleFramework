// Fichier : exo_simple.js
// Commentaires : création de 2 modules : 
// "module_btn"
// "module_affiche"



//envoyer
//Dans ce module on s'occupe du clique lors du clique du bouton "envoyer"
CORE.create_module("module_formulaire", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON
	var txtArea01,button_envoyer,baliseFocus;// Création de la variable nécessaire
	
	return {
		init: function() {

			txtArea01 = p_sandbox.find("#texteArea")[0];
			//p_sandbox.addEvent(txtArea01, "input", this.f_input1_focus);
			// input01.focus()		
			btnRadio01 = p_sandbox.find("#monBtn1")[0];
			btnRadio02 = p_sandbox.find("#monBtn2")[0];

			button_envoyer = p_sandbox.find("#btn_envoyer")[0];			
			p_sandbox.addEvent(button_envoyer, "click", this.f_button_envoyer);	

			test = p_sandbox.find("#formulaire666")[0];	
		},

		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button01, "click", this.f_button01);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button01 = null;
		},	

		f_button_envoyer: function(){			
	        console.log("btn envoyer est cliqué ")

	        if(btnRadio01.checked == true){
	        	console.log("btnRadio01 est choisi")
	        	var content = txtArea01.value;
	        	p_sandbox.envoyerMessage({
					type: 'msgFormulaire',
					data: {texte:txtArea01.value,destinataire:btnRadio01.value,image:"static/pepe.jpg"}
				});
				

	        }
	        else{
	        	console.log("btnRadio02 est choisi")
	        	p_sandbox.envoyerMessage({
					type: 'msgFormulaire',
					data: {texte:txtArea01.value,destinataire:btnRadio02.value,image:"static/maman.png"}
				});
	        	
	        }
	        txtArea01.value = " "

			
			// console.log("btn envoyer")
			// // Lire le contenu de la textarea
   //  		var content = txtArea01.value;
			// txtArea01.value = ""
			// console.log("contenu:",content)
			// console.log("!!test:",test.name)
			
		},
	};
});

//recevoir
//Dans ce module il s'occupe d'afficher le texte lors du clique du bouton "envoyer" 
CORE.create_module("module_data", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON
	var texte_dataFormulaire;
	//,var baliseFocus;// Création de la variable nécessaire
	
	return {
		init: function() {
			texte_dataFormulaire = p_sandbox.find("#dataFormulaire")[0];			

			p_sandbox.surveillerMessage({
				'msgFormulaire':this.f_data
			});		

			//console.log("OK:",p_sandbox.surveillerMessage({'msgFormulaire': this.f_data }))
			console.log("le texte est envoyer")
			console.log(texte_dataFormulaire)
		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button01, "click", this.f_button01);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button01 = null;
		},
		f_data : function(p_message){
			console.log("p_message 444: ",p_message)
			texte_dataFormulaire.innerHTML = texte_dataFormulaire.innerHTML + "<img src="+p_message.image+">"+"Pour"+" "+p_message.destinataire+ ":"+" "+p_message.texte + " " + "<br>"
			console.log("!!Contenu:",p_message.texte)
		}		
	};
});


CORE.start_all();




