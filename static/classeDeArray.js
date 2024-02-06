
function class_array_crud(){
	// Un ARRAY avec les méthodes CRUD

	// 'this.listes' contient plusieurs listes
	this.listes = {};

	if ( typeof class_array_crud.initialized == "undefined" ) {
		class_array_crud.prototype.createListe = function(p_listeName) { 
			// Ajouter une nouvelle liste à this.listes

			// Vérifier que ce nom de liste n'existe PAS déjà 
			if( this.listes[p_listeName] == undefined){
				this.listes[p_listeName] = [];
			}
		};
		class_array_crud.prototype.getListe = function(p_listeName) { 
			return this.listes[p_listeName];
		};
		class_array_crud.prototype.getAllListe = function() { 
			return this.listes;
		};
		class_array_crud.prototype.add = function(p_liste, p_value) { 
			// Ajouter 'p_value' dans 'p_liste'
			this.listes[p_liste].push(p_value);
		};
		class_array_crud.prototype.addFromListe = function(p_liste, p_listeSource) { 
			// Ajouter tous les éléments contenus dans 'p_listeSource' dans 'p_liste'
			for (var i = 0; i < p_listeSource.length; i++) {
				var element = p_listeSource[i]
				this.listes[p_liste].push(element);
			}
		};
		class_array_crud.prototype.valueFromIndex = function(p_liste, p_index) { 
			// Fournir l'élément qui se trouve à l'index 'p_index' dans 'p_liste'
			return this.listes[p_liste][p_index]
		};
		class_array_crud.prototype.listeIsPresent = function(p_listeName) { 
			// Répond si la liste avec le nom 'p_listeName' existe dans this.listes
			if(this.listes[p_listeName] == undefined){
				return false
			}
			else{
				return true
			}
		};
		class_array_crud.prototype.getIndex = function(p_liste, p_value) { 
			// A quel index, dans la liste 'p_liste', se trouve 'p_value' ?

			// Vérifier que la liste existe bien dans this.listes
			if( ! ( this.listeIsPresent(p_liste))){
				// alert('liste inconnue')
				return -1
			}

			// Parcourir this.listes[p_liste]

			for (var i = 0; i < this.listes[p_liste].length; i++) {
				var element = this.listes[p_liste][i]

				// Déterminer si les types sont identiques
				if(typeof(p_value) == typeof(element) ){
					// Déterminer si p_value est un {} objet
						if(typeof(p_value) == 'object'){
							var element_key = Object.keys(element).toString()
							var element_value = Object.values(element).toString()
							var p_value_key = Object.keys(p_value).toString()
							var p_value_value = Object.values(p_value).toString()

							if(element_key == p_value_key && element_value == p_value_value ){
								return i
							}
						}
						else{
							// Non le type n'est pas 'object'
							if(element == p_value){
								return i
							}
						}// else		
				}// if (typeof)
			}// for...
			return -1
		};
		class_array_crud.initialized = true;
	}
}
 




// Pour utiliser la fonction init() : myNameSpace.init()

var array_crud = new class_array_crud()




// Tester 
array_crud.createListe('a')
array_crud.createListe('b')
array_crud.createListe('c')

array_crud.add('a', 0) 
array_crud.add('a', 1) 
array_crud.add('a', 2) 
array_crud.add('a', {nom:'dor'}) 

array_crud.add('b', 0) 
array_crud.add('b', 1) 
array_crud.add('b', 2) 

array_crud.add('c', 0) 
array_crud.add('c', 1) 
array_crud.add('c', 2) 
array_crud.add('c', {nom:'kaufholz'}) 


array_crud.addFromListe('a', [33,34,35])  
array_crud.addFromListe('b', [33,34,35])  
array_crud.addFromListe('c', [33,34,35])  

console.log("Les listes : ", array_crud.getAllListe() )


console.log("array_crud.getIndex('a', 0) : ", array_crud.getIndex('a', 0)  )

console.log("array_crud.getIndex('a', {nom:'dor'}) : ", array_crud.getIndex('a', {nom:'dor'})  )

console.log("array_crud.getIndex('b', {nom:'dor'}) : ", array_crud.getIndex('b', {nom:'dor'})  )


console.log("array_crud.valueFromIndex('a', 1)  : ", array_crud.valueFromIndex('a', 1)   )
console.log("array_crud.valueFromIndex('b', 2)  : ", array_crud.valueFromIndex('b', 2)   )
console.log("array_crud.valueFromIndex('c', 3)  : ", array_crud.valueFromIndex('c', 3)   )

console.log("array_crud.listeIsPresent('a')  : ", array_crud.listeIsPresent('a')  )
console.log("array_crud.listeIsPresent('aaa')  : ", array_crud.listeIsPresent('aaa')  )

