// Fichier : exo_simple.js
// Commentaires : création de 2 modules : 
// "module_btn"
// "module_affiche"





CORE.create_module("module_reine", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON
	var button01,button02,button03,test01;// Création de la variable nécessaire
	
	return {
		init: function() {
			// La méthode de la 'sandbox' appelée 'p_sandbox.find' retourne un objet similaire à un objet 'jQuery'. 
			// Les clés de l'objet retourné sont des chiffres (0,1,etc...) 
			// La clé [0] est intéressante pour nous car elle contient la SEULE balise HTML qui corresponds
			// à la propriété CSS fournie : un ID unique. 
			// Les autres clés contiennent des propriétés et des méthodes

			test01 = p_sandbox.find("#reine_taille1")
			console.log("test01 : ",test01)

			button01 = p_sandbox.find("#reine_taille1")[0];
			button02 = p_sandbox.find("#reine_taille2")[0];
			button03 = p_sandbox.find("#reine_taille3")[0];
			
			// C'est un bouton, et nous devrons donc lui connecter des gestionnaires d'événements.
            // Nous devrons également ajouter cela à 'sandbox' !
            // Comme vous pouvez le voir, c'est une fonction d'ajout d'événement 'p_sandbox.addEvent' qui ressemble 
            // à 'addEventListener'. Elle prend la balise HTML, l'événement et la fonction.
			
			p_sandbox.addEvent(button01, "click", this.f_button01);
			p_sandbox.addEvent(button02, "click", this.f_button02);
			p_sandbox.addEvent(button03, "click", this.f_button03);
			// L'écouteur d'événements appelle la fonction 'this.f_button01'.
		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button01, "click", this.f_button01);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button01 = null;
		},

		f_button01: function(){
			// Nous informons simplement la 'sandbox' avec 'p_sandbox.envoyerMessage' 
	        // (qui à son tour informe 'core') que l'utilisateur a cliqué sur button01. 
	        // Ensuite, 'core' proposera ces informations aux autres modules abonnés.

	        // S'il y en a un (qui s'est abonné au préalable à ce type de message) qui répond, 
	        // il prendra les informations dans 'data'. 

			p_sandbox.envoyerMessage({
					type: 'msgCard',
					data: 'pizza Reine : bouton 01 est cliqué'
				});
		},
		f_button02: function(){
			// Nous informons simplement la 'sandbox' avec 'p_sandbox.envoyerMessage' 
	        // (qui à son tour informe 'core') que l'utilisateur a cliqué sur button01. 
	        // Ensuite, 'core' proposera ces informations aux autres modules abonnés.

	        // S'il y en a un (qui s'est abonné au préalable à ce type de message) qui répond, 
	        // il prendra les informations dans 'data'. 

			p_sandbox.envoyerMessage({
					type: 'msgCard',
					data: 'pizza Reine : bouton 02 est cliqué'
				});
		},
		f_button03: function(){
			// Nous informons simplement la 'sandbox' avec 'p_sandbox.envoyerMessage' 
	        // (qui à son tour informe 'core') que l'utilisateur a cliqué sur button01. 
	        // Ensuite, 'core' proposera ces informations aux autres modules abonnés.

	        // S'il y en a un (qui s'est abonné au préalable à ce type de message) qui répond, 
	        // il prendra les informations dans 'data'. 

			p_sandbox.envoyerMessage({
					type: 'msgCard',
					data: 'pizza Reine : bouton 03 est cliqué'
				});
		}
	};
});

CORE.create_module("module_forestiere", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON
	var button01,button02,button03;// Création de la variable nécessaire
	
	return {
		init: function() {
			// La méthode de la 'sandbox' appelée 'p_sandbox.find' retourne un objet similaire à un objet 'jQuery'. 
			// Les clés de l'objet retourné sont des chiffres (0,1,etc...) 
			// La clé [0] est intéressante pour nous car elle contient la SEULE balise HTML qui corresponds
			// à la propriété CSS fournie : un ID unique. 
			// Les autres clés contiennent des propriétés et des méthodes

			button01 = p_sandbox.find("#forestiere_taille1")[0];
			button02 = p_sandbox.find("#forestiere_taille2")[0];
			button03 = p_sandbox.find("#forestiere_taille3")[0];
			
			// C'est un bouton, et nous devrons donc lui connecter des gestionnaires d'événements.
            // Nous devrons également ajouter cela à 'sandbox' !
            // Comme vous pouvez le voir, c'est une fonction d'ajout d'événement 'p_sandbox.addEvent' qui ressemble 
            // à 'addEventListener'. Elle prend la balise HTML, l'événement et la fonction.
			
			p_sandbox.addEvent(button01, "click", this.f_button01);
			p_sandbox.addEvent(button02, "click", this.f_button02);
			p_sandbox.addEvent(button03, "click", this.f_button03);
			// L'écouteur d'événements appelle la fonction 'this.f_button01'.
		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button01, "click", this.f_button01);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button01 = null;
		},

		f_button01: function(){
			p_sandbox.envoyerMessage({
					type: 'msgCard',
					data: 'pizza Forestière : bouton 01 est cliqué'
				});
		},
		f_button02: function(){
			p_sandbox.envoyerMessage({
					type: 'msgCard',
					data: 'pizza Forestière : bouton 02 est cliqué'
				});
		},
		f_button03: function(){
			p_sandbox.envoyerMessage({
					type: 'msgCard',
					data: 'pizza Forestière : bouton 03 est cliqué'
				});
		}
	};
});

CORE.create_module("module_panier", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON
	var texte_panier;// Création de la variable nécessaire
	
	return {
		init: function() {
			// La méthode de la 'sandbox' appelée 'p_sandbox.find' retourne un objet similaire à un objet 'jQuery'. 
			// Les clés de l'objet retourné sont des chiffres (0,1,etc...) 
			// La clé [0] est intéressante pour nous car elle contient la SEULE balise HTML qui corresponds
			// à la propriété CSS fournie : un ID unique. 
			// Les autres clés contiennent des propriétés et des méthodes

			texte_panier = p_sandbox.find("#panier")[0];
			
			
			// C'est un bouton, et nous devrons donc lui connecter des gestionnaires d'événements.
            // Nous devrons également ajouter cela à 'sandbox' !
            // Comme vous pouvez le voir, c'est une fonction d'ajout d'événement 'p_sandbox.addEvent' qui ressemble 
            // à 'addEventListener'. Elle prend la balise HTML, l'événement et la fonction.
			

			p_sandbox.surveillerMessage({
				'msgCard': this.f_panier
			});

		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button01, "click", this.f_button01);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button01 = null;
		},
		f_panier : function(p_message){
			console.log('f_panier')
			console.log('texte_panier : ',texte_panier)

			
			texte_panier.innerHTML = texte_panier.innerHTML + p_message + " "
		},


		f_button02: function(){
			// Nous informons simplement la 'sandbox' avec 'p_sandbox.envoyerMessage' 
	        // (qui à son tour informe 'core') que l'utilisateur a cliqué sur button01. 
	        // Ensuite, 'core' proposera ces informations aux autres modules abonnés.

	        // S'il y en a un (qui s'est abonné au préalable à ce type de message) qui répond, 
	        // il prendra les informations dans 'data'. 

			p_sandbox.envoyerMessage({
					type: 'msgCard',
					data: 'bouton 02 est cliqué'
				});
		},
		f_button03: function(){
			// Nous informons simplement la 'sandbox' avec 'p_sandbox.envoyerMessage' 
	        // (qui à son tour informe 'core') que l'utilisateur a cliqué sur button01. 
	        // Ensuite, 'core' proposera ces informations aux autres modules abonnés.

	        // S'il y en a un (qui s'est abonné au préalable à ce type de message) qui répond, 
	        // il prendra les informations dans 'data'. 

			p_sandbox.envoyerMessage({
					type: 'msgCard',
					data: 'bouton 03 est cliqué'
				});
		}
	};
});





CORE.create_module("module_btn", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON
	var button01;// Création de la variable nécessaire
	
	return {
		init: function() {
			// La méthode de la 'sandbox' appelée 'p_sandbox.find' retourne un objet similaire à un objet 'jQuery'. 
			// Les clés de l'objet retourné sont des chiffres (0,1,etc...) 
			// La clé [0] est intéressante pour nous car elle contient la SEULE balise HTML qui corresponds
			// à la propriété CSS fournie : un ID unique. 
			// Les autres clés contiennent des propriétés et des méthodes

			button01 = p_sandbox.find("#bouton01")[0];
			// button = p_sandbox.find("#search_button")[0],
			// reset = p_sandbox.find("#quit_search")[0];

			// C'est un bouton, et nous devrons donc lui connecter des gestionnaires d'événements.
            // Nous devrons également ajouter cela à 'sandbox' !
            // Comme vous pouvez le voir, c'est une fonction d'ajout d'événement 'p_sandbox.addEvent' qui ressemble 
            // à 'addEventListener'. Elle prend la balise HTML, l'événement et la fonction.
			
			p_sandbox.addEvent(button01, "click", this.f_button01);
			// L'écouteur d'événements appelle la fonction 'this.f_button01'.
		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button01, "click", this.f_button01);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button01 = null;
		},

		f_button01: function(){
			// Nous informons simplement la 'sandbox' avec 'p_sandbox.envoyerMessage' 
	        // (qui à son tour informe 'core') que l'utilisateur a cliqué sur button01. 
	        // Ensuite, 'core' proposera ces informations aux autres modules abonnés.

	        // S'il y en a un (qui s'est abonné au préalable à ce type de message) qui répond, 
	        // il prendra les informations dans 'data'. 

			p_sandbox.envoyerMessage({
					type: 'ecrireTexte',
					data: 'bouton 01 est cliqué'
				});
		}
	};
});

// la <div> "module_affiche_message" contient un seul élément utile <p id="message"></p>
// pour afficher les messages 
CORE.create_module("module_affiche", function(p_sandbox) {
	var message;
	
	return {
		init: function() {
			message = p_sandbox.find('#'+'message');// la balise HTML <p> avec ID = 'message'
			p_sandbox.surveillerMessage({
				'ecrireTexte': this.f_ecrireTexte
			});
		},
		destroy: function() {
			message = null;
		},
		f_ecrireTexte : function(p_message){
			message[0].innerHTML = message[0].innerHTML + p_message + " "
		}
	};
});





CORE.create_module("module_btn1", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON
	var button01;// Création de la variable nécessaire
	
	return {
		init: function() {
			// La méthode de la 'sandbox' appelée 'p_sandbox.find' retourne un objet similaire à un objet 'jQuery'. 
			// Les clés de l'objet retourné sont des chiffres (0,1,etc...) 
			// La clé [0] est intéressante pour nous car elle contient la SEULE balise HTML qui corresponds
			// à la propriété CSS fournie : un ID unique. 
			// Les autres clés contiennent des propriétés et des méthodes

			button01 = p_sandbox.find("#taille2")[0];
			// button = p_sandbox.find("#search_button")[0],
			// reset = p_sandbox.find("#quit_search")[0];

			// C'est un bouton, et nous devrons donc lui connecter des gestionnaires d'événements.
            // Nous devrons également ajouter cela à 'sandbox' !
            // Comme vous pouvez le voir, c'est une fonction d'ajout d'événement 'p_sandbox.addEvent' qui ressemble 
            // à 'addEventListener'. Elle prend la balise HTML, l'événement et la fonction.
			
			p_sandbox.addEvent(button01, "click", this.f_button01);
			// L'écouteur d'événements appelle la fonction 'this.f_button01'.
		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button01, "click", this.f_button01);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button01 = null;
		},

		f_button01: function(){
			// Nous informons simplement la 'sandbox' avec 'p_sandbox.envoyerMessage' 
	        // (qui à son tour informe 'core') que l'utilisateur a cliqué sur button01. 
	        // Ensuite, 'core' proposera ces informations aux autres modules abonnés.

	        // S'il y en a un (qui s'est abonné au préalable à ce type de message) qui répond, 
	        // il prendra les informations dans 'data'. 

			p_sandbox.envoyerMessage({
					type: 'ecrireTexte',
					data: '!Taille2'
				});
		}
	};
});

CORE.start_all();

