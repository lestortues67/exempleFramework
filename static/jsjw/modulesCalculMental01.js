// Fichier : modules.js
// Comment : 4 modules are built here.

CORE.create_module("btns", function(sb) {
	var btn_add, btn_sub, btn_mult, input, button, reset;
	
	return {
		init: function() {
			// What’s with the [0] at the end ?
			// The DOM elements matching the selector are given numbered keys followed by some methods and properties. 
			// We need ONLY the FIRST raw DOM element (matching ID).
			btn_add = sb.find("#btn_start_add")[0];
			btn_sub = sb.find("#btn_start_sub")[0];
			btn_mult = sb.find("#btn_start_mult")[0];

			// Two of these elements (button and reset) are buttons, and so we’ll need hook up some event handlers. 
			// We’ll have to add that to the sandbox as well! 
			// As you can see, it’s your standard add-event function: it takes the element, the event, and the function.
			
			sb.addEvent(btn_add, "click", this.click_btn_add);
			sb.addEvent(btn_sub, "click", this.click_btn_sub);
			sb.addEvent(btn_mult, "click", this.click_btn_mult);
			
		},
		destroy: function() {
			// The 'removeEvent' function undoes the work of addEvent. 
			sb.removeEvent(button, "click", this.handleSearch);
			sb.removeEvent(reset, "click", this.quitSearch);
			// Then, we’ll just set the three module variables to null.
			input = button = reset = null;
		},
		click_btn_add: function(){
			console.log("btn_add was clicked");
			sb.envoyerMessage({
					type: 'start-add',
					data: null
				});
		},
		click_btn_sub: function(){
			console.log("btn_sub was clicked");
			sb.envoyerMessage({
					type: 'start-sub',
					data: null
				});
		},
		click_btn_mult: function(){
			console.log("btn_mult was clicked")
			sb.envoyerMessage({
					type: 'start-mult',
					data: null
				});
		},

		// Those two event listeners 'handleSearch' & 'quitSearch' reference the search functions. 

		// So here’s what Zakas proposed: we just tell the sandbox with 'sb.notify' (which in turn tells the core) 
		// that the user has performed a search. Then, the core will offer that information to the other modules. 
		// If there’s one that responds, it will take the data and run with it. We do this via the sb.notify method; 
		handleSearch: function() {
			var query = input.value;// First, we get the value of the search field. 
			if (query) {
				// If there’s something in it, we’ll move on. But what should we do? Normally when doing a dynamic search 
				// (that doesn’t require a page refresh of ajax request), we’d have access to the panel of products 
				// and could filter them appropriately. But our module has to be able to exist with or without 
				// a product panel; plus, it’s only link to the outside world is through the sandbox.

				// 'sb.notify takes an object with two properties: the type of event we’re performing and the data 
				// related to the event. In this case, we’re doing a ‘perform-search’ event, and the relevant
				// data is the search query. That’s all the search box module needs to do; 
				// if there’s another module that has exposed the ability to be searched, 
				// the core will give it the data.' The neat thing to note about this is that this method 
				// is completely versatile. The module that will use this event in our example 
				// won't do anything Ajax-y, but there's no reason another one module couldn't do that, 
				// or search in some completely other way.
				sb.envoyerMessage({
					type: 'start-add',
					data: null
				});
				// sb.notify({
				// 	type: 'perform-search',
				// 	data: query
				// });
			}
		},
		quitSearch: function() {
			// First, we’ll clear the search box; then, we’ll let the sandbox know that we’re running a ‘quit-search’;
			// in this case, there’s no relevant data.
			input.value = "";
			sb.envoyerMessage({
					type: 'quit-search',
					data: null
				});
			// sb.notify({
			// 	type: 'quit-search',
			// 	data: null
			// });
		}
	};
});

CORE.create_module("niveau", function(sb) {
	var select_niveau
	
	return {
		init: function() {
			// What’s with the [0] at the end ?
			// The DOM elements matching the selector are given numbered keys followed by some methods and properties. 
			// We need ONLY the FIRST raw DOM element (matching ID).
			select_niveau = sb.find("#select_niveau")[0];
			// console.log("select_niveau : ",select_niveau)
			

			// Two of these elements (button and reset) are buttons, and so we’ll need hook up some event handlers. 
			// We’ll have to add that to the sandbox as well! 
			// As you can see, it’s your standard add-event function: it takes the element, the event, and the function.
			
			sb.addEvent(select_niveau, "change", this.select_niveau_change);
			
		},
		destroy: function() {
			// The 'removeEvent' function undoes the work of addEvent. 
			sb.removeEvent(button, "click", this.handleSearch);
			sb.removeEvent(reset, "click", this.quitSearch);
			// Then, we’ll just set the three module variables to null.
			input = button = reset = null;
		},
		select_niveau_change: function(){
			console.log("select_niveau_change event occured : ",select_niveau.value);
			sb.envoyerMessage({
				type: 'select_niveau_change',
				data: null
			});
		},

		// Those two event listeners 'handleSearch' & 'quitSearch' reference the search functions. 

		// So here’s what Zakas proposed: we just tell the sandbox with 'sb.notify' (which in turn tells the core) 
		// that the user has performed a search. Then, the core will offer that information to the other modules. 
		// If there’s one that responds, it will take the data and run with it. We do this via the sb.notify method; 
		handleSearch: function() {
			var query = input.value;// First, we get the value of the search field. 
			if (query) {
				// If there’s something in it, we’ll move on. But what should we do? Normally when doing a dynamic search 
				// (that doesn’t require a page refresh of ajax request), we’d have access to the panel of products 
				// and could filter them appropriately. But our module has to be able to exist with or without 
				// a product panel; plus, it’s only link to the outside world is through the sandbox.

				// 'sb.notify takes an object with two properties: the type of event we’re performing and the data 
				// related to the event. In this case, we’re doing a ‘perform-search’ event, and the relevant
				// data is the search query. That’s all the search box module needs to do; 
				// if there’s another module that has exposed the ability to be searched, 
				// the core will give it the data.' The neat thing to note about this is that this method 
				// is completely versatile. The module that will use this event in our example 
				// won't do anything Ajax-y, but there's no reason another one module couldn't do that, 
				// or search in some completely other way.
				sb.envoyerMessage({
					type: 'start-add',
					data: null
				});
				// sb.notify({
				// 	type: 'perform-search',
				// 	data: query
				// });
			}
		},
		quitSearch: function() {
			// First, we’ll clear the search box; then, we’ll let the sandbox know that we’re running a ‘quit-search’;
			// in this case, there’s no relevant data.
			input.value = "";
			sb.envoyerMessage({
					type: 'quit-search',
					data: null
				});
			// sb.notify({
			// 	type: 'quit-search',
			// 	data: null
			// });
		}
	};
});


CORE.create_module("connexion", function(sb) {
	var btn_connect_me
	
	return {
		init: function() {
			// What’s with the [0] at the end ?
			// The DOM elements matching the selector are given numbered keys followed by some methods and properties. 
			// We need ONLY the FIRST raw DOM element (matching ID).
			btn_connect_me = sb.find("#btn_connect_me")[0];
			console.log("btn_connect_me : ",btn_connect_me)
			

			// Two of these elements (button and reset) are buttons, and so we’ll need hook up some event handlers. 
			// We’ll have to add that to the sandbox as well! 
			// As you can see, it’s your standard add-event function: it takes the element, the event, and the function.
			
			sb.addEvent(btn_connect_me, "click", this.btn_connect_me_click_event);
			
		},
		destroy: function() {
			// The 'removeEvent' function undoes the work of addEvent. 
			sb.removeEvent(button, "click", this.handleSearch);
			sb.removeEvent(reset, "click", this.quitSearch);
			// Then, we’ll just set the three module variables to null.
			input = button = reset = null;
		},
		btn_connect_me_click_event: function(){
			console.log("btn_connect_me_click_event occured : ");
			sb.envoyerMessage({
				type: 'btn_connect_me_click_event',
				data: null
			});
		},

		// Those two event listeners 'handleSearch' & 'quitSearch' reference the search functions. 

		// So here’s what Zakas proposed: we just tell the sandbox with 'sb.notify' (which in turn tells the core) 
		// that the user has performed a search. Then, the core will offer that information to the other modules. 
		// If there’s one that responds, it will take the data and run with it. We do this via the sb.notify method; 
		handleSearch: function() {
			var query = input.value;// First, we get the value of the search field. 
			if (query) {
				// If there’s something in it, we’ll move on. But what should we do? Normally when doing a dynamic search 
				// (that doesn’t require a page refresh of ajax request), we’d have access to the panel of products 
				// and could filter them appropriately. But our module has to be able to exist with or without 
				// a product panel; plus, it’s only link to the outside world is through the sandbox.

				// 'sb.notify takes an object with two properties: the type of event we’re performing and the data 
				// related to the event. In this case, we’re doing a ‘perform-search’ event, and the relevant
				// data is the search query. That’s all the search box module needs to do; 
				// if there’s another module that has exposed the ability to be searched, 
				// the core will give it the data.' The neat thing to note about this is that this method 
				// is completely versatile. The module that will use this event in our example 
				// won't do anything Ajax-y, but there's no reason another one module couldn't do that, 
				// or search in some completely other way.
				sb.envoyerMessage({
					type: 'start-add',
					data: null
				});
				// sb.notify({
				// 	type: 'perform-search',
				// 	data: query
				// });
			}
		},
		quitSearch: function() {
			// First, we’ll clear the search box; then, we’ll let the sandbox know that we’re running a ‘quit-search’;
			// in this case, there’s no relevant data.
			input.value = "";
			sb.envoyerMessage({
					type: 'quit-search',
					data: null
				});
			// sb.notify({
			// 	type: 'quit-search',
			// 	data: null
			// });
		}
	};
});

CORE.create_module("configuration", function(sb) {
	var btn_configuration
	
	return {
		init: function() {
			// What’s with the [0] at the end ?
			// The DOM elements matching the selector are given numbered keys followed by some methods and properties. 
			// We need ONLY the FIRST raw DOM element (matching ID).
			btn_configuration = sb.find("#btn_configuration")[0];
			console.log("btn_configuration : ",btn_configuration)
			

			// Two of these elements (button and reset) are buttons, and so we’ll need hook up some event handlers. 
			// We’ll have to add that to the sandbox as well! 
			// As you can see, it’s your standard add-event function: it takes the element, the event, and the function.
			
			sb.addEvent(btn_configuration, "click", this.btn_configuration_click_event);
			
		},
		destroy: function() {
			// The 'removeEvent' function undoes the work of addEvent. 
			sb.removeEvent(button, "click", this.handleSearch);
			sb.removeEvent(reset, "click", this.quitSearch);
			// Then, we’ll just set the three module variables to null.
			input = button = reset = null;
		},
		btn_configuration_click_event : function(){
			console.log("btn_configuration_click_event occured : ");
			sb.envoyerMessage({
				type: 'btn_configuration_click_event',
				data: null
			});
		},

		// Those two event listeners 'handleSearch' & 'quitSearch' reference the search functions. 

		// So here’s what Zakas proposed: we just tell the sandbox with 'sb.notify' (which in turn tells the core) 
		// that the user has performed a search. Then, the core will offer that information to the other modules. 
		// If there’s one that responds, it will take the data and run with it. We do this via the sb.notify method; 
		handleSearch: function() {
			var query = input.value;// First, we get the value of the search field. 
			if (query) {
				// If there’s something in it, we’ll move on. But what should we do? Normally when doing a dynamic search 
				// (that doesn’t require a page refresh of ajax request), we’d have access to the panel of products 
				// and could filter them appropriately. But our module has to be able to exist with or without 
				// a product panel; plus, it’s only link to the outside world is through the sandbox.

				// 'sb.notify takes an object with two properties: the type of event we’re performing and the data 
				// related to the event. In this case, we’re doing a ‘perform-search’ event, and the relevant
				// data is the search query. That’s all the search box module needs to do; 
				// if there’s another module that has exposed the ability to be searched, 
				// the core will give it the data.' The neat thing to note about this is that this method 
				// is completely versatile. The module that will use this event in our example 
				// won't do anything Ajax-y, but there's no reason another one module couldn't do that, 
				// or search in some completely other way.
				sb.envoyerMessage({
					type: 'start-add',
					data: null
				});
				// sb.notify({
				// 	type: 'perform-search',
				// 	data: query
				// });
			}
		},
		quitSearch: function() {
			// First, we’ll clear the search box; then, we’ll let the sandbox know that we’re running a ‘quit-search’;
			// in this case, there’s no relevant data.
			input.value = "";
			sb.envoyerMessage({
					type: 'quit-search',
					data: null
				});
			// sb.notify({
			// 	type: 'quit-search',
			// 	data: null
			// });
		}
	};
});


CORE.create_module("jeu", function(sb) {
	// Afficher des planches de jeu selon le btn qui est cliqué	

	// Of course, destroy simply gets rid of the event listeners.
	var lignes;// a variable to hold the filters
	
	return {
		init: function() {
				function class_base_condition_pour_alea() {
					if ( typeof class_base_condition_pour_alea.initialized == "undefined" ) {
						class_base_condition_pour_alea.prototype.conditionIsTrue = function() {
							throw new Error("La méthode calculer doit être implémentée par les sous-classes.");
						}
					}
					class_base_condition_pour_alea.initialized = true;
				}

				//Définition d'une 1ère condition : p_a > p_b et étendre la classe ABSTRAITE 'class_base_condition_pour_alea'
				function class_condition_a_sup_b () {
					this.a = 0
					this.b = 0
					// Sub class for a new condition to check (p_a > p_b) that extends the class_condition_a_sup_b class
					class_base_condition_pour_alea.call(this);
					//Copie des méthodes de la classe mère vers la classe 'fille'
					for( var element in class_base_condition_pour_alea.prototype ) {
						class_condition_a_sup_b.prototype[element]	= class_base_condition_pour_alea.prototype[element];
					}
					if( typeof class_condition_a_sup_b.initialized == "undefined" ) { 
						//Spécification des nouvelles méthodes de la classe fille	
						// Par exemple : set_min(), set_max(), set_a(), set_b(), etc
						class_condition_a_sup_b.prototype.set_a = function(p_a) {
							this.a = p_a  
						};
						class_condition_a_sup_b.prototype.set_b = function(p_b) {
							this.b = p_b  
						};
						class_condition_a_sup_b.prototype.conditionIsTrue = function() {
							// La valeur true est pour une ERREUR pour rester dans la boucle WHILE
							if (this.a > this.b){
								return false;	
							}
							else {// Ici la condition n'est PAS atteinte
								return true;	
							}
						};
					class_condition_a_sup_b.initialized = true;
					}
				}
		function class_ligne_master(p_id){
			this.id = p_id
			if ( typeof class_ligne_master.initialized == "undefined" ) {
				class_ligne_master.prototype.placerUneLigne = function(p_type, p_n0, p_n1) { 
					// p_type : opération 'add', 'sub', etc ..., 
					// p_n0 : 1er nombre
					// p_n1 : 2em nombre
					throw new Error("La méthode place_ligne doit être implémentée par les sous-classes.");
				}
			}
			class_ligne_master.initialized = true;
		}

		// Classe 'fille' pour additionner
		function class_ligne_calcul(p_id) {
			this.id = p_id
			this.solution = 0
			// Créer une DIV
			this.divligne =  sb.create_element("div", { id: ''}) 
			this.divligne.id = "divligne"+p_id

			this.input_saisie = sb.create_element('input')
			this.input_saisie.type = 'text'
			this.input_value = this.input_saisie.value
			this.label_n0 =  sb.create_element('label')
			this.label_signe =  sb.create_element('label')
			this.label_signe.innerHTML = "+";
			this.label_n1 =  sb.create_element('label')
			this.label_egal =  sb.create_element('label')
			this.label_egal.innerHTML = "=";
			this.label_solution =  sb.create_element('label')
			this.label_solution.classList.add('text-danger')
			

	if ( typeof class_ligne_addition.initialized == "undefined" ) {
		// Appel constructeur de la classe 'mère'
		class_ligne_master.call(this,p_id);
		//Copie des méthodes de la classe mère vers la classe 'fille'
		for( var element in class_ligne_master.prototype ) {
			class_ligne_addition.prototype[element]	= class_ligne_master.prototype[element];
		}

		class_ligne_addition.prototype.placerUneLigne = function(p_type, p_n0, p_n1) {
			// En fonction du type d'opération demandée 'p_type' demander 2 nbr
			// les placer dans une ligne et l'afficher à l'écran

			// Inscrire lae corrigé de l'exercice dans this.solution
			this.solution = p_n0 + p_n1;

			// Inscrire les p_ dans les 'label'
			this.label_n0.innerHTML = p_n0;
			this.label_n1.innerHTML = p_n1;

			// Parametrer toutes les balises HTML qui composent une ligne

			this.divligne.appendChild(this.label_n0)
			this.divligne.appendChild(this.label_signe)
			this.divligne.appendChild(this.label_n1)
			this.divligne.appendChild(this.label_egal)
			this.divligne.appendChild(this.input_saisie)
			this.divligne.appendChild(this.label_solution)

			// Placer la ligne sur la page 
			this.div_jeu.appendChild(this.divligne)
		}
		class_ligne_addition.prototype.get_saisie = function() {
			// Lire dans la balise <input> la saisie de 'user'
			return this.input_saisie.value
		}
		class_ligne_addition.prototype.corriger = function() {
			// Comparer la saisie de 'user' à this.solution
			if (!(this.get_saisie() == this.solution)){
				this.set_solution()
			}
		}
		class_ligne_addition.prototype.set_solution = function() {
			// Ecrire la solution dans le <label> prévu
			this.label_solution.innerHTML = this.solution;
		}
	}
	class_ligne_addition.initialized = true;
}



			sb.surveillerMessage({
				'start-add'  : this.startAdd,
				'start-sub'   : this.startSub,
				'start-mult' : this.startMult
			});

			lignes = sb.find('#lignes')[0];// 'lignes' est une <div> qui reçoit les lignes 
			console.log("lignes : ",lignes)

		},
		destroy: function() {
			// gets rid of the event listeners
			sb.removeEvent(filters, "click", this.filterProducts);
			filters = null;
		},
		startAdd: function(p_event){
			console.log("Dans this.startAdd")
			// Montrer des calculs d'addition

			// Du HTML 
			var mySelect = `
			<select id="select_niveau" name="select_niveau">
		  		<option value="1">1</option>
		  		<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
			`

			// Créer une DIV
			var myDiv = sb.create_element("div", { id: ''}) 
			myDiv.innerHTML = mySelect


			// Créer une ligne de texte 
			var ligne_Texte = sb.create_element("p", { id: 'testText'}) 
			ligne_Texte.innerHTML = 'papa'

			lignes.appendChild(ligne_Texte)
			lignes.appendChild(myDiv)

		},
		startSub: function(p_event){
			// Montrer des calculs de soustraction
		},
		startMult: function(p_event){
			// Montrer des calculs de multiplication
		},
		ajouterLignes: function(p_typeCalcul) {
			// p_typeCalcul : peut contenir l'une des 3 valeurs ('additon', 'soustraction' , 'multiplication'


			
			var entry;
			// Then, we get the element with the selector ‘#cart-’ + product.id + ’ .quantity’; 
			// this looks for an element with a class of ‘quantity’ within an element with an id of “cart-id_number”. 
			entry = sb.find("#cart-" + product.id + ' .quantity')[0];
			if (entry) {
				// If this product has been added to the cart before, this will be found. 
				// If it is found, we’ll increment the innerHTML of that element 
				// (the quantity of that product that the user has added to the car) by one  
				entry.innerHTML = parseInt(entry.innerHTML, 10) + 1;
				// and update the entry in the cartItems object, which keeps track of the purchase.
				cartItems[product.id]++;
				console.log("cartItems : ",cartItems)// 24/11/2023
			} else {
				// If the element was not found, this is the first time the user 
				// has added one of this product to the cart.
				// In that case, we’ll use the sandbox’s create_element method; as you can see, 
				// it will take an attributes object similar to jQuery. 
				entry = sb.create_element("li", { id: 'cart-' + product.id, 
					// The special case here is the children property, which is an array of elements to insert into
					// the element we’re creating. As you can see, 
					// we’re basically creating a list item with three spans:
					// the product name, quantity, and price. 
					children: [
					sb.create_element("span", {'class': 'product_name', text: product.name}),
					sb.create_element("span", {'class': 'quantity', text: '1'}),
					sb.create_element("span", {'class': 'price', text: '$' + product.price.toFixed(2)})
					],		
					'class': 'cart_entry'});
				// Then, we append this list item to the cart and add the product to the cartItems object.
				cart.appendChild(entry);
				cartItems[product.id] = 1;
				console.log("cartItems : ",cartItems)// 24/11/2023
			}
		},
		filterProducts: function(e) {
			// As you can see, that method simply tells the sandbox about our ‘change-filter’ event,
			// giving it the text of the link clicked at the data 
			//(e is the event object, and currentTarget is the element that was clicked.)
			sb.envoyerMessage({
					type: "change-filter",
					data: e.currentTarget.innerHTML
				});
			// sb.notify({
			// 	type: "change-filter",
			// 	data: e.currentTarget.innerHTML
			// });
		}
	};
});



// The other is a reset function, which we’ll understand in a moment.
CORE.create_module("chrono", function(sb) {
	var btn_stop_chrono;
	// 'eachProduct' & 'reset' are two helper functions
	function eachProduct(fn) {
		// it takes a function 'fn' and runs it for each item in the products list. 
		var i = 0, product;
		
		for ( ; product = products[i++]; ) {
			fn(product);
		}
	};
	
	function reset() {
		// All the reset function does is set the opacity of all the products back to 1.
		eachProduct(function (product){
			product.style.opacity = '1';
		});
	};
	
	return {
		init: function() {			
			btn_stop_chrono = sb.find("#btn_stop_chrono")[0];
			sb.addEvent(btn_stop_chrono, 'click', this.btn_stop_chrono_click_event);

			// let attribut = btn_stop_chrono.getAttribute("disabled");
			let isDisabled = btn_stop_chrono.disabled;
			// let attribut = btn_stop_chrono.getAttribute;
			// console.log("btn_stop_chrono : ",btn_stop_chrono)
			// console.log("btn_stop_chrono.getAttribute : ",btn_stop_chrono.getAttribute)
			console.log("This button is disabled : ",isDisabled)

			
			// sb.surveillerMessage({
			// 	'change-filter'  : this.change_filter,
			// 	'reset-filter'   : this.reset,
			// 	'perform-search' : this.search,
			// 	'quit-search'    : this.reset
			// });
			// sb.listen({
			// 	'change-filter'  : this.change_filter,
			// 	'reset-filter'   : this.reset,
			// 	'perform-search' : this.search,
			// 	'quit-search'    : this.reset
			// });
			// Then, we use our 'eachProduct' helper function to assign an on-click function to each product. 
			// When a product it clicked, we run 'addToCart'. 
			// We have to cache this because its value changes to the global object inside the function.
		},
		destroy: function() {
		// In destroy, we simply remove the event handlers from the products and let the sandbox
		// know we’re no longer interested in the events (actually, I don’t think this is necessary, 
		// because of the way we handle things in the core, 
		// but I threw it in just in case something on the “back end” changes).
			
		},
		reset: reset,
		// Now we’ll look at the functions that get called when other modules fire events: 
		// 'search', 'change_filter' & 'addToCart'
		btn_stop_chrono_click_event : function(p_event){
			console.log("btn_stop_chrono was clicked");
			btn_stop_chrono.disabled = true;
		},
		btn_stop_chrono_disable : function(){
			console.log("btn_stop_chrono was disabled");
		},
		btn_stop_chrono_click_enable : function(){
			console.log("btn_stop_chrono was enabled");
		},
		search: function() {
		},
		ban01: function(p_event) {
		}
	}
});


CORE.start_all();