// Fichier : claire_exo01_modules.js
// Commentaires : création de 4 modules : 
// "module_bouton01"
// "module_bouton02"
// "module_bouton03"
// "module_affiche_message"

CORE.create_module("module_bouton01", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON

	var input, button, reset;// Création des variables nécessaires à ce module
	var button01;// Création de la variable nécessaire
	
	return {
		init: function() {
			// La méthode de la 'sandbox' appelée 'p_sandbox.find' retourne un objet similaire à un objet 'jQuery'. 
			// Les clés de l'objet retourné sont des chiffres (0,1,etc...) 
			// La clé [0] est intéressante pour nous car elle contient la SEULE balise HTML qui corresponds
			// à la propriété CSS fournie : un ID unique. 
			// Les autres clés contiennent des propriétés et des méthodes

			button01 = p_sandbox.find("#bouton01")[0],
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
					type: 'button01',
					data: 'bouton 01 est cliqué'
				});
		}
	};
});

CORE.create_module("module_bouton02", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON

	var input, button, reset;// Création des variables nécessaires à ce module
	var button02;// Création de la variable nécessaire
	
	return {
		init: function() {
			// La méthode de la 'sandbox' appelée 'p_sandbox.find' retourne un objet similaire à un objet 'jQuery'. 
			// Les clés de l'objet retourné sont des chiffres (0,1,etc...) 
			// La clé [0] est intéressante pour nous car elle contient la SEULE balise HTML qui corresponds
			// à la propriété CSS fournie : un ID unique. 
			// Les autres clés contiennent des propriétés et des méthodes

			button02 = p_sandbox.find("#bouton02")[0],
			// button = p_sandbox.find("#search_button")[0],
			// reset = p_sandbox.find("#quit_search")[0];

			// C'est un bouton, et nous devrons donc lui connecter des gestionnaires d'événements.
            // Nous devrons également ajouter cela à 'sandbox' !
            // Comme vous pouvez le voir, c'est une fonction d'ajout d'événement 'p_sandbox.addEvent' qui ressemble 
            // à 'addEventListener'. Elle prend la balise HTML, l'événement et la fonction.
			
			p_sandbox.addEvent(button02, "click", this.f_button02);
			// L'écouteur d'événements appelle la fonction 'this.f_button02'.
		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button02, "click", this.f_button02);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button02 = null;
		},

		f_button02: function(){
			// Nous informons simplement la 'sandbox' avec 'p_sandbox.envoyerMessage' 
	        // (qui à son tour informe 'core') que l'utilisateur a cliqué sur button02. 
	        // Ensuite, 'core' proposera ces informations aux autres modules abonnés.

	        // S'il y en a un (qui s'est abonné au préalable à ce type de message) qui répond, 
	        // il prendra les informations dans 'data'. 

			p_sandbox.envoyerMessage({
					type: 'button02',
					data: 'bouton 02 est cliqué'
				});
		}
	};
});

CORE.create_module("module_bouton03", function(p_sandbox) {
	// Un 'module' est composé d'un SEUL BOUTON

	var input, button, reset;// Création des variables nécessaires à ce module
	var button03;// Création de la variable nécessaire
	
	return {
		init: function() {
			// La méthode de la 'sandbox' appelée 'p_sandbox.find' retourne un objet similaire à un objet 'jQuery'. 
			// Les clés de l'objet retourné sont des chiffres (0,1,etc...) 
			// La clé [0] est intéressante pour nous car elle contient la SEULE balise HTML qui corresponds
			// à la propriété CSS fournie : un ID unique. 
			// Les autres clés contiennent des propriétés et des méthodes

			button03 = p_sandbox.find("#bouton03")[0],
			// button = p_sandbox.find("#search_button")[0],
			// reset = p_sandbox.find("#quit_search")[0];

			// C'est un bouton, et nous devrons donc lui connecter des gestionnaires d'événements.
            // Nous devrons également ajouter cela à 'sandbox' !
            // Comme vous pouvez le voir, c'est une fonction d'ajout d'événement 'p_sandbox.addEvent' qui ressemble 
            // à 'addEventListener'. Elle prend la balise HTML, l'événement et la fonction.
			
			p_sandbox.addEvent(button03, "click", this.f_button03);
			// L'écouteur d'événements appelle la fonction 'this.f_button03'.
		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button03, "click", this.f_button03);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			button03 = null;
		},

		f_button03: function(){
			// Nous informons simplement la 'sandbox' avec 'p_sandbox.envoyerMessage' 
	        // (qui à son tour informe 'core') que l'utilisateur a cliqué sur button03. 
	        // Ensuite, 'core' proposera ces informations aux autres modules abonnés.

	        // S'il y en a un (qui s'est abonné au préalable à ce type de message) qui répond, 
	        // il prendra les informations dans 'data'. 

			p_sandbox.envoyerMessage({
					type: 'button03',
					data: 'bouton 03 est cliqué'
				});
		}
	};
});



// la <div> "module_affiche_message" contient un seul élément utile <p id="message"></p>
// pour afficher les messages 
CORE.create_module("module_affiche_message", function(p_sandbox) {
	var message;
	
	return {
		init: function() {
			message = p_sandbox.find('#'+'message');// la balise HTML <p> avec ID = 'message'
			p_sandbox.surveillerMessage({
				'button01': this.f_button01,
				'button02': this.f_button02,
				'button03': this.f_button03
			});
		},
		destroy: function() {
			messageRemise_element = null;
		},
		f_button01 : function(p_message){
			message[0].innerHTML = message[0].innerHTML + p_message + " "
		},
		f_button02 : function(p_message){
			message[0].innerHTML = message[0].innerHTML + p_message + " "
		},
		f_button03 : function(p_message){
			message[0].innerHTML = message[0].innerHTML + p_message + " "
		}
	};
});

// **************************** STOP CLAIRE !!!!!! ***************************************



CORE.create_module("search-box", function(p_sandbox) {
	// Un 'module' est composé de plusieurs balises HTML qui appartiennent toutes à la même
	// zone sur la page HTML et possèdent toutes le même objectif. 
	// Sur la copie d'écran de la page HTML j'ai nommé les zones de 'a' à 'e', voir plus haut. 

	var input, button, reset;// Création des variables nécessaires à ce module
	// La zone 'a' sur la copie d'écran. 
  	// Un 'module' composé des balises HTML : 
  	// <input> texte à rechercher
  	// <button> 'Search'
  	// <button> 'Reset'
	
	return {
		init: function() {
			// La méthode de la 'sandbox' appelée 'p_sandbox.find' retourne un objet similaire à un objet 'jQuery'. 
			// Les clés de l'objet retourné sont des chiffres (0,1,etc...) 
			// La clé [0] est intéressante pour nous car elle contient la SEULE balise HTML qui corresponds
			// à la propriété CSS fournie : un ID unique. 
			// Les autres clés contiennent des propriétés et des méthodes

			input = p_sandbox.find("#search_input")[0],
			button = p_sandbox.find("#search_button")[0],
			reset = p_sandbox.find("#quit_search")[0];

			// Deux de ces balises HTML (button et reset) sont des boutons, et nous devrons donc leurs
			// connecter des gestionnaires d'événements.
            // Nous devrons également ajouter cela à 'sandbox' !
            // Comme vous pouvez le voir, c'est une fonction d'ajout d'événement 'sb.addEvent' qui ressemble 
            // à 'addEventListener'. Elle prend la balise HTML, l'événement et la fonction.
			
			p_sandbox.addEvent(button, "click", this.handleSearch);
			p_sandbox.addEvent(reset, "click", this.quitSearch);
			// Les deux écouteurs d'événements font référence aux fonctions de recherche 'handleSearch' et 'quitSearch'.
		},
		destroy: function() {
			// La méthode 'removeEvent' est le contraire de 'p_sandbox.addEvent'. 
			p_sandbox.removeEvent(button, "click", this.handleSearch);
			p_sandbox.removeEvent(reset, "click", this.quitSearch);
			// Ensuite, nous allons simplement définir les trois variables du module sur null.
			input = button = reset = null;
		},

	        // Nous informons simplement la 'sandbox' avec 'p_sandbox.notify' 
	        // (qui à son tour informe 'core') que l'utilisateur a effectué une recherche. 
	        // Ensuite, 'core' proposera ces informations aux autres modules.

	        // S'il y en a un (qui s'est abonné au préalable à ce type de message) qui répond, il prendra ces informations. 
	        // Nous faisons cela via la méthode p_sandbox.notify ;


		handleSearch: function() {
			var query = input.value;// First, we get the value of the search field. 
			if (query) {
				// S'il y a quelque chose dans 'query' (champ de recherche), nous passerons à autre chose. 
				// Mais que devons-nous faire ? 
				// Normalement lors d'une recherche dynamique (cela ne nécessite pas de rafraîchissement 
				// de page avec les datas d'une requête ajax) on aurait accès aux articles dans 'product-panel'
                // et on pourrait les filtrer de manière appropriée. 
                // Mais notre module doit pouvoir exister avec ou sans un 'product-panel'. 
                // De plus, le seul lien avec le monde extérieur se fait via 'sandbox'.
                
                // 'sb.notify prend un objet avec deux propriétés : 
                // 1) le type d'événement que nous effectuons 
                // 2) les données liées à l'événement. 
                // Ici, nous effectuons un événement 'perform-search' et la
                // data est la requête de recherche. C'est tout ce que le module "search-box" doit faire. 

                // S'il existe un autre module qui a exposé la possibilité d'être recherché,
                // 'core' lui donnera aussi les données. La chose intéressante à noter à ce 
                // sujet est que cette méthode est complètement polyvalente. 
                // Le module qui utilisera cet événement dans notre exemple ne fera rien du genre 'Ajax', 
                // mais il n'y a aucune raison pour qu'un autre module ne puisse utiliser 'Ajax' 
                // ou rechercher d'une manière complètement différente.
				p_sandbox.envoyerMessage({
					type: 'perform-search',
					data: query
				});
				// p_sandbox.notify({
				// 	type: 'perform-search',
				// 	data: query
				// });
			}
		},
		quitSearch: function() {
			// Tout d'abord, nous allons effacer le champ de recherche ; 
            // puis, nous ferons savoir à 'sandbox' que nous effectuons une ‘quit-search’.
            // Dans ce cas, il n'y a pas de données pertinentes.
			input.value = "";
			p_sandbox.envoyerMessage({
					type: 'quit-search',
					data: null
				});
			// p_sandbox.notify({
			// 	type: 'quit-search',
			// 	data: null
			// });
		}
	};
});


CORE.create_module("filters-bar", function(p_sandbox) {
	// Création du module 'filters-bar' : la zone 
	// Nos utilisateurs peuvent filtrer les objets par catégorie à l'aide des boutons 
	// 'Red', 'Blue', 'Mobile' et 'Accessory'. 
	// Ils clickent sur les catégories pour conserver que les objets de cette catégorie. 
	
	// Bien sûr, 'destroy' supprime simplement les écouteurs d'événements.
	var filters;  // une variable pour les filtres
	
	return {
		init: function() {
			filters = p_sandbox.find('a');// on emploie 'p_sandbox.find' pour pointer vers les balises <a>.
			// Mais quelles sont les chances que TOUTES les BALISES <a> de la page soient des filtres ? 
			// Ces chances sont très faibles ...
			// Une fois que nous avons commencé à écrire la méthode find, vous verrez comment 
			// elle ne renvoie QUE les balises HTML au sein de l'élément DOM correspondant à notre module.
			
            // Ensuite, nous ajouterons un événement 'click' aux filtres, qui appelle la méthode 'filterProduct'.
			p_sandbox.addEvent(filters, "click", this.filterProducts);
		},
		destroy: function() {
			// se débarrasse des écouteurs d'événements
			p_sandbox.removeEvent(filters, "click", this.filterProducts);
			filters = null;
		},
		filterProducts: function(e) {
			// Comme vous pouvez le voir, cette méthode informe simplement 
			// 'sandbox' de notre événement 'change-filter',
        	// lui donnant le texte du lien cliqué au niveau des données
        	//( 'e' est l'objet événement et 'currentTarget' est l'élément sur lequel on a cliqué.)			
			p_sandbox.envoyerMessage({
					type: "change-filter",
					data: e.currentTarget.innerHTML
				});
			// p_sandbox.notify({
			// 	type: "change-filter",
			// 	data: e.currentTarget.innerHTML
			// });
		}
	};
});



// Création du module 'product-panel' : la zone 'c' sur la copie d'écran
CORE.create_module("product-panel", function(p_sandbox) {
	var products;
	// 'eachProduct' & 'reset' sont deux fonctions d'assistance
	function eachProduct(fn) {
		// En paramètre est passée une fonction. Chaque élément de 'products' 
		// est passé en p_ à cette fonction. qui est exécutée sur chaque 
		var i = 0, product;
		
		for ( ; product = products[i++]; ) {
			fn(product);
		}
	};
	
	function reset() {
		// La fonction 'reset' ne fait que remettre l'opacité de tous les produits à 1.
		eachProduct(function (product){
			product.style.opacity = '1';
		});
	};
	
	return {
		init: function() {
			// Dans 'init', nous collectons toutes les balise <li> que nous plaçons dans 'products'.
            // Ensuite, il faut faire savoir à 'sandbox' que nous sommes intéressés par plusieurs événements.
            // On passe un objet à la méthode sb.listen ; cet objet utilise :
            // - le nom de l'événement comme clé
            // - la fonction événementielle comme valeur pour chaque propriété.
            
            // Par exemple, nous disons à 'sandbox' que lorsque quelqu'un d'autre exécute un
            // événement 'perform-search', nous voulons y répondre en exécutant notre fonction de recherche.
            // Claire, j'espère que tu commences à voir comment cela va fonctionner !
			var that = this;
			
			products = p_sandbox.find("li");
			
			p_sandbox.surveillerMessage({
				'change-filter'  : this.change_filter,

				'reset-filter'   : this.reset,
				'perform-search' : this.search,
				'quit-search'    : this.reset
			});
			// p_sandbox.listen({
			// 	'change-filter'  : this.change_filter,
			// 	'reset-filter'   : this.reset,
			// 	'perform-search' : this.search,
			// 	'quit-search'    : this.reset
			// });
			// Ensuite, nous utilisons notre fonction d'assistance 'eachProduct' pour attribuer une fonction 
			// 'clic' à chaque produit.
            // Lorsqu'un produit est cliqué, nous exécutons 'addToCart'.
            // Nous devons mettre cela en cache car sa valeur change en objet global à l'intérieur de la fonction.

			eachProduct(function(product) {
				p_sandbox.addEvent(product, 'click', that.addToCart);
			});
		},
		destroy: function() {
		// Dans 'destroy', nous supprimons simplement les gestionnaires d'événements des produits et 
		// informons 'sandbox' qu'on ne s'intéresse plus aux événements 
		// (en fait, je ne pense pas que ce soit nécessaire, à cause de la façon dont nous gérons 
		// les choses dans 'core'.
			var that = this;
			eachProduct(function(product) {
				p_sandbox.removeEvent(product, 'click', that.addToCart);
			});
			p_sandbox.ignore(['change-filter', 'reset-filter', 'perform-search', 'quit-search']);
		},
		reset: reset,
		// Nous allons maintenant examiner les fonctions qui sont appelées lorsque d'autres 
		// modules déclenchent des événements :
		// 'search', 'change_filter' & 'addToCart'
		change_filter: function(filter) {
			// La méthode 'change_filter' est assez similaire à 'search' ; cette fois, au lieu de chercher
            // la description du produit, nous profitons des attributs HTML5 data-*.

            // Ceux-ci nous permettent d'ajouter des attributs personnalisés à nos éléments HTML 
            // sans enfreindre les règles de spécification.
            
            // Cependant, ils doivent commencer par « data- », et j'ai également ajouté un préfixe personnel '8088-keyword',
            // afin qu'ils n'entrent pas en conflit avec les attributs d'un autre 'code' HTML.
            // Le filtre passé dans cette fonction est comparé à l'attribut 'data',
            // qui contiendra les noms des catégories des éléments.
            // S'il n'y a pas de correspondance, nous réduirons l'opacité de l'élément.
			reset();
			eachProduct(function(product) {
				if (product.getAttribute('data-8088-keyword').toLowerCase().indexOf(filter.toLowerCase()) < 0) {
					product.style.opacity = '0.2';
				}
			});
		},
		search: function(query) {
			// Cette fonction est appelée lorsque l'action 'perform-search' a lieu.
            // Comme vous pouvez le voir, il prend la requête de recherche comme paramètre.
            // Tout d'abord, nous réinitialisons la zone de produits 
            // (juste au cas où les résultats d'une recherche ou d'un filtrage précédent seraient là).
			reset();
			// Ensuite, nous parcourons chaque produit avec notre fonction d'assistance 'eachProduct'.
			query = query.toLowerCase();
			// N'oubliez pas que le produit est un élément de liste ; 
			// à l'intérieur se trouve un paragraphe avec la description du produit.
            // C'est ce que nous allons rechercher (dans un exemple réel, ce ne serait probablement pas le cas).
            // On récupère le texte du paragraphe et on le compare au texte de la requête
            // (notez que les deux ont été exécutés via toLowerCase()).
            // Si le résultat est inférieur à 0, ce qui signifie qu'aucune correspondance n'a été trouvée, 
            // nous fixons l'opacité du produit à 0,2.
            // C'est ainsi que nous allons masquer les produits dans cet exemple.
			eachProduct(function(product) {
				if (product.getElementsByTagName('p')[0].innerHTML.toLowerCase().indexOf(query.toLowerCase()) < 0) {
					product.style.opacity = '0.2';
				}
			});
		},
		addToCart: function(e) {
			// Cette fonction est exécutée lorsque l'on clique sur l'un des produits.
            // Nous obtiendrons l'élément cliqué puis enverrons une notification au système,
            // l'informant de notre événement 'add-item'.
            // Cette fois, les données que nous transmettons sont un objet.
            // Il contient l'identifiant du produit, le nom du produit et le prix du produit.
            // Dans cet exemple, nous sommes paresseux et utilisons l'identifiant de l'élément 
            // comme identifiant et prix, et la description du produit comme nom.
            //(e est l'objet événement et currentTarget est l'élément sur lequel on a cliqué.)
			var li = e.currentTarget;
			p_sandbox.envoyerMessage({
				type: 'add-item',
				data: { 
					id: li.id, 
					name: li.getElementsByTagName('p')[0].innerHTML, 
					price: parseInt(li.id, 10) 
				}
			});
			// p_sandbox.notify({
			// 	type: 'add-item',
			// 	data: { id: li.id, 
			// 					name: li.getElementsByTagName('p')[0].innerHTML, 
			// 					price: parseInt(li.id, 10) }
			// });
		}
	}
});

// Création du module 'shopping-cart' : la zone 'd' sur la copie d'écran
CORE.create_module("shopping-cart", function(p_sandbox) {
	// Nous utilisons deux variables : le panier 'cart' et les articles dans le panier 'cartItems'.
	var cart, cartItems;
	
	return {
		init: function() {
		// À l'initialisation du module, nous les définirons respectivement sur l'<ul> dans le panier 
		// et sur un objet vide.
		
			cart = p_sandbox.find("ul")[0];
			cartItems = {};
			// Ensuite, nous ferons savoir à 'sandbox' que nous souhaitons répondre à un événement.
			p_sandbox.surveillerMessage({
				'add-item': this.addItem
			});
			// p_sandbox.listen({
			// 	'add-item': this.addItem
			// });
		},
		destroy: function() {
			// Lors de la destruction, nous arrêterons d'écouter.
			cart = cartItems = null;
			p_sandbox.ignore(['add-item']);
		},
		addItem: function(product) {
			// Voici ce qui doit se passer lorsqu'un article est ajouté au panier :
            // Cette fonction prend l'objet 'product' que nous venons de voir dans le module 'product-panel'.

			
			var entry;
			// Ensuite, on récupère l'élément avec le sélecteur '#cart-' + product.id + ' .quantity';
            // ceci recherche un élément avec une classe 'quantity' dans un élément avec 
            // un ID 'cart-id_number'.
			entry = p_sandbox.find("#cart-" + product.id + ' .quantity')[0];
			if (entry) {
				// Si ce produit a déjà été ajouté au panier, il sera trouvé.
                // S'il est trouvé, nous incrémenterons le innerHTML de cet élément
                // (la quantité de ce produit que l'utilisateur a ajoutée au panier) par 1.
				entry.innerHTML = parseInt(entry.innerHTML, 10) + 1;
				// et met à jour l'entrée dans l'objet 'cartItems', qui assure le suivi de l'achat.
				cartItems[product.id]++;
				console.log("cartItems : ",cartItems)// 24/11/2023
			} else {
				// Si l'élément n'a pas été trouvé, c'est la première fois que l'utilisateur
                // a ajouté un de ce produit au panier.
                // Dans ce cas, nous utiliserons la méthode 'create_element' de 'sandbox' ; 
                // comme tu peux le voir,
                // il faudra un objet d'attributs similaire à jQuery.
				entry = p_sandbox.create_element("li", { id: 'cart-' + product.id, 
					// Le cas particulier ici est la propriété 'children', qui est un ARRAY d'éléments 
					// dans lequel insérer l'élément que nous créons. 
					// Comme tu peux le voir, nous créons essentiellement un élément de liste avec trois valeurs :
                    // le nom du produit, la quantité et le prix.
					children: [
					p_sandbox.create_element("span", {'class': 'product_name', text: product.name}),
					p_sandbox.create_element("span", {'class': 'quantity', text: '1'}),
					p_sandbox.create_element("span", {'class': 'price', text: '$' + product.price.toFixed(2)})
					],		
					'class': 'cart_entry'});
				// Ensuite, nous ajoutons cet élément de liste au panier et ajoutons le produit à l'objet 'cartItems'.
				cart.appendChild(entry);
				cartItems[product.id] = 1;
				console.log("cartItems : ",cartItems)// 24/11/2023
			}
		}
	}
});

// Création du module "total-zone" : la zone 'e' sur la copie d'écran
CORE.create_module("total-zone", function(p_sandbox) {
	// Quand un article est ajouté le montant total à payer doit s'afficher
	// ainsi que le nombre d'articles contenus dans le panier. 	

	var shopping_cart_data = {totalAPayer : 0, nbrArticles : 0};// un objet 'totalisateur' 
	var totalAPayer_element, nbrArticles_element; 
	
	return {
		init: function() {
			totalAPayer_element = p_sandbox.find('#'+'totalAPayer');// la balise HTML <li> pour la valeur 'totalAPayer'
			nbrArticles_element = p_sandbox.find('#'+'nbrArticles');// la balise HTML <li> pour la valeur 'nbrArticles'
			p_sandbox.surveillerMessage({
				'add-item': this.updateNumbers
			});
			// p_sandbox.listen({
			// 	'add-item': this.updateNumbers
			// });
		},
		destroy: function() {
			totalAPayer_element = null;
			nbrArticles_element = null;
		},
		updateNumbers: function(p_product) {
			// console.log("Dans updateNumbers: function(p_product)")
			// Lors du click voici ce qui est envoyé 
			// p_sandbox.notify : 
			// type: 'add-item',
			// 	data: { id: li.id, 
			// 					name: li.getElementsByTagName('p')[0].innerHTML, 
			// 					price: parseInt(li.id, 10) }
			// });

			// Cette m_ est appelée pour la màj des valeurs numériques totaux

			// Trouver le prix du produit qui a été cliqué
			// console.log("p_product.price : ",p_product.price)

			// Inc le total a payer
			shopping_cart_data.totalAPayer = shopping_cart_data.totalAPayer + p_product.price;
			// console.log("shopping_cart_data.totalAPayer : ",shopping_cart_data.totalAPayer," €")
			

			// Inc la qte des articles 
			shopping_cart_data.nbrArticles = shopping_cart_data.nbrArticles + 1;
			// console.log("shopping_cart_data.nbrArticles : ",shopping_cart_data.nbrArticles)
			

			// màj à l'écran sur les balises concernées 

			totalAPayer_element[0].innerHTML = "A payer : "+shopping_cart_data.totalAPayer+" €"
			nbrArticles_element[0].innerHTML = "Nombre d'articles : "+ shopping_cart_data.nbrArticles
			console.log("nbrArticles_element[0] : ",nbrArticles_element[0])
			console.log("shopping_cart_data.nbrArticles : ",shopping_cart_data.nbrArticles)
			

			// Si le nombre d'articles est égal à 5 un message est affiché
			if ( shopping_cart_data.nbrArticles == 5){
				console.log("5 articles dans le panier !!!")
				p_sandbox.envoyerMessage({
					type: 'articles_5',
					data: '5 articles = -5% de remise'
				});	
			}
			// Si le nombre d'articles est égal à 6 un message est affiché
			if (shopping_cart_data.nbrArticles == 6){
				console.log("6 articles dans le panier !!!")
				p_sandbox.envoyerMessage({
					type: 'articles_6',
					data: '6 articles = -6% de remise'
				});	
			}
			

			
		}
	};
});



//la <div> "remise-zone" contient un seul élément <p id="messageRemise"></p>
CORE.create_module("remise-zone", function(p_sandbox) {
	var messageRemise_element;
	// Quand 5 articles sont présents dans le panier un message ext affiché ici. 	
	
	return {
		init: function() {
			messageRemise_element = p_sandbox.find('#'+'messageRemise');// la balise HTML <p> avec ID = 'messageRemise'
			p_sandbox.surveillerMessage({
				'articles_5': this.afficherMessage_articles_5,
				'articles_6': this.afficherMessage_articles_6
			});
		},
		destroy: function() {
			messageRemise_element = null;
		},
		afficherMessage_articles_5: function(p_message) {
			console.log("afficherMessage_articles_5, p_message = ",p_message)
			console.log("Dans afficherMessage_articles_5: function(p_message)")
			// Lors du click voici ce qui est envoyé 
			// p_sandbox.notify : 
			// type: 'add-item',
			// 	data: { id: li.id, 
			// 					name: li.getElementsByTagName('p')[0].innerHTML, 
			// 					price: parseInt(li.id, 10) }
			// });

			// màj à l'écran sur les balises concernées 

			messageRemise_element[0].innerHTML = p_message
			// nbrArticles_element[0].innerHTML = "Nombre d'articles : "+ shopping_cart_data.nbrArticles
			// console.log("nbrArticles_element[0] : ",nbrArticles_element[0])
			
		},
		afficherMessage_articles_6: function(p_message) {
			console.log("afficherMessage_articles_6, p_message = ",p_message)
			console.log("Dans afficherMessage_articles_6: function(p_message)")

			messageRemise_element[0].innerHTML = p_message			
		}
	};
});

CORE.start_all();


