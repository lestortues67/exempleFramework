
    function ClassMortgage(p_name) {
      this.name = p_name;      
      if ( typeof ClassMortgage.initialized == "undefined" ) {
          ClassMortgage.prototype.applyFor = function(p_amount) {
            // access multiple subsystems...
            var result = "approuvé";
            if (!new ClassBank().verify(this.name, p_amount)) {
              result = "denied";
            } 
            else if (!new ClassCredit().get(this.name)) {
              result = "denied";
            } 
            else if (!new ClassBackground().check(this.name)) {
              result = "denied";
            }
            return "La réponse de la banque concernant Monsieur " + this.name + " est " + result +
                " pour un prêt bancaire d'un montant de " + p_amount ;
          }
          ClassMortgage.initialized = true;
      }// if ( typeof ClassMortgage.initialized == "undefined" ) 
    }// function ClassMortgage()

    function ClassBank(p_name) {
      this.name = p_name;      
      if ( typeof ClassBank.initialized == "undefined" ) {
          ClassBank.prototype.verify = function(p_name, p_amount) {
            // complex logic ...
            return true;
          }
          ClassBank.initialized = true;
      }// if ( typeof ClassBank.initialized == "undefined" ) 
    }// function ClassBank()

    function ClassCredit(p_name) {
      this.name = p_name;      
      if ( typeof ClassCredit.initialized == "undefined" ) {
          ClassCredit.prototype.get = function(p_name) {
            // complex logic ...
            return true;
          }
          ClassCredit.initialized = true;
      }// if ( typeof ClassCredit.initialized == "undefined" ) 
    }// function ClassCredit()

    function ClassBackground(p_name) {
      this.name = p_name;      
      if ( typeof ClassBackground.initialized == "undefined" ) {
          ClassBackground.prototype.check = function(p_name) {
            // complex logic ...
            return true;
          }
          ClassBackground.initialized = true;
      }// if ( typeof ClassBackground.initialized == "undefined" ) 
    }// function ClassBackground()


function run() {
    var mortgage = new ClassMortgage("Christian Doriath");
    var result = mortgage.applyFor("100000€");

    console.log(result);
}

run()


