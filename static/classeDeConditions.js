	function class_conditions (p_reference) {
		// p_reference est un objet, exemple : 
		// {type : string, number, boolean, array, object data: une valeur en accord avec 'type'}
		this.a = 0
		this.b = 0
		if (p_reference.type.toLowerCase() == 'string' && typeof(p_reference.data) == 'string'){
			this.referenceString = p_reference.data;
		}
		else if (p_reference.type.toLowerCase() == 'number' && typeof(p_reference.data) == 'number'){
			this.referenceNumber = p_reference.data;	
		}
		else if (p_reference.type.toLowerCase() == 'boolean' && typeof(p_reference.data) == 'boolean'){
			this.referenceBoolean = p_reference.data;
		}
		else if (p_reference.type.toLowerCase() == 'array' && Array.isArray([p_reference.data]) ){
			this.referenceArray = p_reference.data;
		}
		else if (p_reference.type.toLowerCase() == 'object' && typeof(p_reference.data) == 'object'){
			this.referenceObject = p_reference.data;
		}
		else {
			throw new Error("Une incohérence entre le type réel et le type annoncé dans le paramètre 'p_reference'.");
		}
		if( typeof class_conditions.initialized == "undefined" ) { 
			class_conditions.prototype.refString_contient_p_ = function(p_value) {
				return this.referenceString.includes(p_value)		
			};
			class_conditions.prototype.refString_ne_contient_pas_p_ = function(p_value) {
				return (!(this.referenceString.includes(p_value)		))
			};
			class_conditions.prototype.refString_est_egal_a_p_ = function(p_value) {
				return (this.referenceString == p_value)		
			};
			class_conditions.prototype.refString_nest_pas_egal_a_p_ = function(p_value) {
				return !(this.referenceString == p_value)		
			};
			class_conditions.prototype.refNumber_est_superieur_a_p_ = function(p_value) {
				return (this.referenceNumber > p_value) 
			};
			class_conditions.prototype.refNumber_est_superieur_egal_a_p_ = function(p_value) {
				return (this.referenceNumber >= p_value) 
			};
			class_conditions.prototype.refNumber_est_inferieur_a_p_ = function(p_value) {
				return (this.referenceNumber < p_value) 
			};
			class_conditions.prototype.refNumber_est_inferieur_egal_a_p_ = function(p_value) {
				return (this.referenceNumber <= p_value) 
			};
			class_conditions.prototype.refNumber_est_egal_a_p_ = function(p_value) {
				return (this.referenceNumber == p_value) 
			};
			class_conditions.prototype.refNumber_nest_pas_egal_a_p_ = function(p_value) {
				return (!(this.referenceNumber == p_value) )
			};
			class_conditions.prototype.refBool_est_egal_a_p_ = function(p_value) {
				return (this.referenceBoolean == p_value) 
			};
			class_conditions.prototype.refBool_nest_pas_egal_a_p_ = function(p_value) {
				return !(this.referenceBoolean == p_value) 
			};
			class_conditions.prototype.refArray_contient_p_ = function(p_value) {
				return (this.referenceArray.includes(p_value) ) 
			};
			class_conditions.prototype.refArray_ne_contient_pas_p_ = function(p_value) {
				return !(this.referenceArray.includes(p_value) ) 
			};
			class_conditions.prototype.refArray_est_identique_a_p_ = function(p_array) { 
				// Tester si 'p_array' et 'this.referenceArray' sont identiques 

				// Vérifier que le nombre d'éléments est identique
				if (! (p_array.length == this.referenceArray.length) ){
					return false
				}
				function isSame(p_currentValue, p_currentIndex, p_referenceArray = this.referenceArray){ 
					return (p_currentValue == p_referenceArray[p_currentIndex]) ;
				}
				return p_array.every(isSame)
			};
			class_conditions.prototype.refArray_nest_pas_identique_a_p_ = function(p_array) { 
				// Tester si 'p_array' et 'this.referenceArray' sont identiques 

				// Vérifier que le nombre d'éléments est identique
				if (! (p_array.length == this.referenceArray.length) ){
					return true
				}
				function isSame(p_currentValue, p_currentIndex, p_referenceArray = this.referenceArray){ 
					return (p_currentValue == p_referenceArray[p_currentIndex]) ;
				}
				return !(p_array.every(isSame))
			};
			class_conditions.prototype.refObject_cle_contient_p_ = function(p_value) {
				// L'une des clés de 'referenceObject' est égale à 'p_value' ? 
				return (Object.keys(this.referenceObject).includes(p_value) ) 
			};
			class_conditions.prototype.refObject_cle_necontient_pas_p_ = function(p_value) {
				// Aucune des clés de 'referenceObject' est égale à 'p_value' ? 
				return !(Object.keys(this.referenceObject).includes(p_value) ) 
			};
			class_conditions.prototype.refObject_value_contient_p_ = function(p_value) {
				// L'une des valeurs de 'referenceObject' est égale à 'p_value' ? 
				return (Object.values(this.referenceObject).includes(p_value) ) 
			};
			class_conditions.prototype.refObject_value_necontient_pas_p_ = function(p_value) {
				// Aucune des valeurs de 'referenceObject' est égale à 'p_value' ? 
				return !(Object.values(this.referenceObject).includes(p_value) ) 
			};
			class_conditions.prototype.refObject_est_identique_a_p_ = function(p_object) { 
				// Tester si 'this.referenceObject' et p_object sont identiques 
				
				if( typeof(p_object) == 'object' ) {// Déterminer si p_object est un objet
					var keys_reference = Object.keys(this.referenceObject)
					var keys_object= Object.keys(p_object)
					var values_reference = Object.values(this.referenceObject);
					var values_object = Object.values(p_object);

						function isSameValues(p_currentValue, p_currentIndex){ 
							return (p_currentValue == values_object[p_currentIndex]) ;
						}
						function isSameKeys(p_currentValue, p_currentIndex){ 
							return (p_currentValue == keys_object[p_currentIndex]) ;
						}

						return values_reference.every(isSameValues) && keys_reference.every(isSameKeys)
				}
				else{
					// 'p_object' n'est de type 'object'
					return false
				}
			};
			class_conditions.prototype.refObject_nest_pas_identique_a_p_ = function(p_object) { 
				// Tester si 'this.referenceObject' et p_object sont identiques 
				
				if( typeof(p_object) == 'object' ) {// Déterminer si p_object est un objet
					var keys_reference = Object.keys(this.referenceObject)
					var keys_object= Object.keys(p_object)
					var values_reference = Object.values(this.referenceObject);
					var values_object = Object.values(p_object);

						function isSameValues(p_currentValue, p_currentIndex){ 
							return (p_currentValue == values_object[p_currentIndex]) ;
						}
						function isSameKeys(p_currentValue, p_currentIndex){ 
							return (p_currentValue == keys_object[p_currentIndex]) ;
						}

						return !(values_reference.every(isSameValues) && keys_reference.every(isSameKeys))
				}
				else{
					// 'p_object' n'est de type 'object'
					return true
				}
			};
			class_conditions.prototype.getStringReference = function() {
				if (!(this.referenceString == undefined)){
					return this.referenceString	
				}
			};
			class_conditions.prototype.getNumberReference = function() {
				if (!(this.referenceNumber == undefined)){
					return this.referenceNumber	
				}
			};
			class_conditions.prototype.getBooleanReference = function() {
				if (!(this.referenceBoolean == undefined)){
					return this.referenceBoolean	
				}
			};
			class_conditions.prototype.getArrayReference = function() {
				if (!(this.referenceArray == undefined)){
					return this.referenceArray	
				}
			};
			class_conditions.prototype.getObjectReference = function() {
				if (!(this.referenceObject == undefined)){
					return this.referenceObject	
				}
			};
		class_conditions.initialized = true;
		}
	}
	
// var ccString = new  class_conditions ({type:'string',data:"papa"}) 

// // tester 'string' avec stringCondition_contient, stringCondition_ne_contient_pas, stringCondition_est_egal,
// // stringCondition_nest_pas_egal

// console.log("ccString.getStringReference() : ",ccString.getStringReference()   ) 
// console.log("ccString.stringCondition_contient('apa') : ", ccString.stringCondition_contient("apa"))
// console.log("ccString.stringCondition_ne_contient_pas('mama') : ", ccString.stringCondition_ne_contient_pas('mama'))

// console.log("ccString.stringCondition_est_egal('papa') : ",ccString.stringCondition_est_egal('papa')    )
// console.log("ccString.stringCondition_nest_pas_egal('mama') : ", ccString.stringCondition_nest_pas_egal('mama')   )
// console.log(" =============================== " ) 
// var ccNumber = new  class_conditions ({type:'number',data:100}) 

// // Tester 'number' avec numberCondition_est_superieur, numberCondition_est_inferieur, 
// // numberCondition_est_egal, numberCondition_nest_pas_egal 

// console.log("ccNumber.getNumberReference() : ",ccNumber.getNumberReference()   ) 
// console.log("numberCondition_est_superieur(200) : ", ccNumber.numberCondition_est_superieur(200)   )
// console.log("numberCondition_est_inferieur(10) : ", ccNumber.numberCondition_est_inferieur(10)   )
// console.log("numberCondition_est_egal(100) : ",ccNumber.numberCondition_est_egal(100)    )
// console.log("numberCondition_nest_pas_egal(11)  : ",ccNumber.numberCondition_nest_pas_egal(11)     )
// console.log(" =============================== " ) 
// var ccBoolean = new  class_conditions ({type:'boolean',data:true}) 
// // Tester 'boolean' avec booleanCondition_est_egal, booleanCondition_nest_pas_egal
// console.log("ccBoolean.getBooleanReference() : ", ccBoolean.getBooleanReference()  ) 
// console.log("booleanCondition_est_egal(true) : ",ccBoolean.booleanCondition_est_egal(true)    )
// console.log("booleanCondition_nest_pas_egal(false) : ",ccBoolean.booleanCondition_nest_pas_egal(false)    )
// console.log(" =============================== " ) 

// var ccArray = new  class_conditions ({type:'array',data:[0,1,2,3]})  
// // Tester 'array' avec arrayCondition_contient, arrayCondition_ne_contient_pas
// console.log("ccArray.getArrayReference()  : ",ccArray.getArrayReference()    ) 
// console.log("arrayCondition_contient(2) : ",ccArray.arrayCondition_contient(2)    )
// console.log("arrayCondition_ne_contient_pas(222) : ",ccArray.arrayCondition_ne_contient_pas(222)    )
// console.log("arrayCondition_est_identique([0,1,2,3]) : ",ccArray.arrayCondition_est_identique([0,1,2,3])    )
// console.log("arrayCondition_nest_pas_identique([0,1,2,33]) : ",ccArray.arrayCondition_nest_pas_identique([0,1,2,33])    )
// console.log(" =============================== " ) 
// var ccObject = new  class_conditions ({type:'object',data:{nom:'dor'}})  
// // Tester 'object' avec objectCondition_cle_contient, objectCondition_cle_ne_contient_pas, 
// // objectCondition_value_contient, objectCondition_value_ne_contient_pas
// console.log("ccObject.getObjectReference() : ",ccObject.getObjectReference()   ) 
// console.log("objectCondition_cle_contient('nom') : ",ccObject.objectCondition_cle_contient('nom')    )
// console.log("objectCondition_cle_ne_contient_pas('po')  : ",ccObject.objectCondition_cle_ne_contient_pas('po')     )
// console.log("objectCondition_value_contient('dor') : ",ccObject.objectCondition_value_contient('dor')    )
// console.log("objectCondition_value_ne_contient_pas('free') : ",ccObject.objectCondition_value_ne_contient_pas('free')    )
// console.log("objectCondition_est_identique({nom:'dor'}) : ",ccObject.objectCondition_est_identique({nom:'dor'})    )
// console.log("objectCondition_nest_pas_identique()({nom:'doriath'}) : ",ccObject.objectCondition_nest_pas_identique({nom:'doriath'})    )
// console.log(" =============================== " ) 
