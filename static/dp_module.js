      // Source livre "2016_Mastering JavaScript Object-Oriented Programming" page 204
      var geoModule = (function() {
        var pi = 3.14;
        function circumference(radius) {
          return 2*pi*radius;
        }
        function circleArea(radius) {
          return pi*radius*radius;
        }
        return {
          calculateCircumference: circumference,
          calculateCircleArea: circleArea};
      })();

      // We can use the members exported by the previous code using the object assigned to the
      // geoModule variable, as shown in the following example:
      console.log(geoModule.calculateCircumference (5));
      //result: 31.400000000000002
      console.log(geoModule.calculateCircleArea(5));
      //result: 78.5

      var module_person = (function() {
        this.nom = "doriath";// Private
        this.prenom = "claire";// Private
        this.getNom = function(){// Private
          return "Melle "+this.nom;
        }
        return {// PUBLIC
          monNom: this.getNom()};
      })();      
      // module_person.monNom retourne -> "Melle doriath"

      var objLit_person = {
        nom : "doriath", 
        prenom : "claire", 
        getNom: function() { return "Melle "+ this.nom }};
      // objLit_person.getNom() retourne -> "Melle doriath"
