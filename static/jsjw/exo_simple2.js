// Fichier : exo_simple.js
// Commentaires : création de 2 modules : 
// "module_btn"
// "module_affiche"





CORE.create_module("module_formulaire", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON
	var input01,input02,input03,button_envoyer,baliseFocus;// Création de la variable nécessaire
	
	return {
		init: function() {

			input01 = p_sandbox.find("#inp01")[0];
			p_sandbox.addEvent(input01, "focus", this.f_input1_focus);			
			// input01.focus()

			input02 = p_sandbox.find("#inp02")[0];
			p_sandbox.addEvent(input02, "focus", this.f_input2_focus);

			input03 = p_sandbox.find("#inp03")[0];
			p_sandbox.addEvent(input03, "focus", this.f_input3_focus);

			button_envoyer = p_sandbox.find("#btn_envoyer")[0];			
			p_sandbox.addEvent(button_envoyer, "click", this.f_button_envoyer);

			p_sandbox.surveillerMessage({
				'mettreFocusInput1': this.f_mettreFocusInput01
			});

		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button01, "click", this.f_button01);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button01 = null;
		},
		
		f_input1_focus: function(){
	        console.log("f_input1")
			p_sandbox.envoyerMessage({
					type: 'focusInput1',
					data: "input1"
				});
			console.log("focus input1")

		},
		f_input2_focus: function(){
	        console.log("f_input2")
			p_sandbox.envoyerMessage({
					type: 'focusInput2',
					data: "input2"
				});
			console.log("focus input2")
		},
		f_input3_focus: function(){
	        console.log("f_input3")
			p_sandbox.envoyerMessage({
					type: 'focusInput3',
					data: "input3"
				});
			console.log("focus input3")

		},	
		f_button_envoyer: function(){
			// Nous informons simplement la 'sandbox' avec 'p_sandbox.envoyerMessage' 
	        // (qui à son tour informe 'core') que l'utilisateur a cliqué sur button01. 
	        // Ensuite, 'core' proposera ces informations aux autres modules abonnés.

	        // S'il y en a un (qui s'est abonné au préalable à ce type de message) qui répond, 
	        // il prendra les informations dans 'data'. 

			p_sandbox.envoyerMessage({
					type: 'msgFormulaire',
					data: {nom:input01.value,prenom: input02.value,pseudo:input03.value,repas:"choucroute",test:"bipbip"}
				});
			console.log("btn envoyer")
			
		},
		f_mettreFocusInput01:function(){
			input01.focus()
		}
	};
});


CORE.create_module("module_data", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON
	var texte_dataFormulaire;
	//,var baliseFocus;// Création de la variable nécessaire
	
	return {
		init: function() {
			// La méthode de la 'sandbox' appelée 'p_sandbox.find' retourne un objet similaire à un objet 'jQuery'. 
			// Les clés de l'objet retourné sont des chiffres (0,1,etc...) 
			// La clé [0] est intéressante pour nous car elle contient la SEULE balise HTML qui corresponds
			// à la propriété CSS fournie : un ID unique. 
			// Les autres clés contiennent des propriétés et des méthodes

			texte_dataFormulaire = p_sandbox.find("#dataFormulaire")[0];
			//baliseFocus = p_sandbox.find("#baliseFocus")[0];
			
			
			// C'est un bouton, et nous devrons donc lui connecter des gestionnaires d'événements.
            // Nous devrons également ajouter cela à 'sandbox' !
            // Comme vous pouvez le voir, c'est une fonction d'ajout d'événement 'p_sandbox.addEvent' qui ressemble 
            // à 'addEventListener'. Elle prend la balise HTML, l'événement et la fonction.
			

			p_sandbox.surveillerMessage({
				'msgFormulaire': this.f_data 
			});

			console.log("OK:",p_sandbox.surveillerMessage({'msgFormulaire': this.f_data }))
		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button01, "click", this.f_button01);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button01 = null;
		},
		f_data : function(p_message){
			console.log("p_message 444: ",p_message)
			texte_dataFormulaire.innerHTML = texte_dataFormulaire.innerHTML + p_message.nom + " " + p_message.prenom + " " + p_message.pseudo + " "
		}		
	};
});

CORE.create_module("module_info", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON
	var baliseFocus;// Création de la variable nécessaire
	var texte_dataFormulaire;
	
	return {
		init: function() {
			// La méthode de la 'sandbox' appelée 'p_sandbox.find' retourne un objet similaire à un objet 'jQuery'. 
			// Les clés de l'objet retourné sont des chiffres (0,1,etc...) 
			// La clé [0] est intéressante pour nous car elle contient la SEULE balise HTML qui corresponds
			// à la propriété CSS fournie : un ID unique. 
			// Les autres clés contiennent des propriétés et des méthodes

			baliseFocus = p_sandbox.find("#baliseFocus")[0];
			console.log("module_info baliseFocus : ",baliseFocus)

			texte_dataFormulaire = p_sandbox.find("#dataFormulaire")[0];
			
			
			// C'est un bouton, et nous devrons donc lui connecter des gestionnaires d'événements.
            // Nous devrons également ajouter cela à 'sandbox' !
            // Comme vous pouvez le voir, c'est une fonction d'ajout d'événement 'p_sandbox.addEvent' qui ressemble 
            // à 'addEventListener'. Elle prend la balise HTML, l'événement et la fonction.
	

			p_sandbox.surveillerMessage({
				'focusInput1': this.f_focusInput,
				'focusInput2': this.f_focusInput,
				'focusInput3': this.f_focusInput
			});
			p_sandbox.envoyerMessage({
					type: 'mettreFocusInput1',
					data: "banana"
				});


		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button01, "click", this.f_button01);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button01 = null;
		},
		f_focusInput : function(p_message){
			console.log("Dans module_info 'p_message 123' : "+ p_message)			
			//baliseFocus.innerHTML = baliseFocus.innerHTML + p_message.nom + p_message.prenom + p_message.pseudo + " " + p_message[0].prenom + "123"

			//Ici quand le pointeur est dans une case input. On écrit le message dans la "baliseFocus" 
			baliseFocus.innerHTML = baliseFocus.innerHTML + p_message + " " 
		}			
	};
});




CORE.start_all();