






// Ce fichier est un 'module' pour la SANDBOX

// Son objectif est : COMMUNICATION avec les modules et l'Application Core

// Une classe/fonction pour la SANDBOX 

function ClassMediator() {
      this.lesAbonnes = {};        
      if ( typeof ClassMediator.initialized == "undefined" ) {
          ClassMediator.prototype.register = function(p_abonne) {
            this.lesAbonnes[p_abonne.name] = p_abonne;
            p_abonne.mediator = this;
          }
          ClassMediator.prototype.send = function(p_message, p_sender, p_receiver) {
            // send the message
            if (p_receiver) {
              p_receiver.receive(p_message, p_sender);
            } 
            else {
              for (var key in this.lesAbonnes) {
                if (this.lesAbonnes[key] != p_sender) {
                  this.lesAbonnes[key].receive(p_message, p_sender);
                }
              }
            }
          }
          ClassMediator.initialized = true;
      }// if ( typeof ClassMediator.initialized == "undefined" ) 
    }// function ClassMediator()

function ClassAbonne(p_name) {
    this.name = p_name;
    this.mediator = null;
    
    if ( typeof ClassAbonne.initialized == "undefined" ) {
        ClassAbonne.prototype.send = function(p_message, p_receiver) {
            this.mediator.send(p_message, this, p_receiver);
        }
        ClassAbonne.prototype.receive = function(p_message, p_sender) {
            // process the message
            console.log(this.name," a reçu un message de",p_sender.name,":",p_message)
        }
        ClassAbonne.initialized = true;
    }// if ( typeof ClassAbonne.initialized == "undefined" ) 
}// function ClassAbonne()


function ClassApplicationCore() {
  // this.name = p_name;      
  if ( typeof ClassApplicationCore.initialized == "undefined" ) {
    ClassApplicationCore.prototype.verify = function(p_name, p_amount) {
      // complex logic ...
      return true;
    }
    ClassApplicationCore.prototype.messageReceive = function(p_message) {
      // Recevoir un message
      // p_message est composé de : 
      // {expediteur, destinataire, message}

      console.log("messageReceive p_message : ",p_message)
    }
    ClassApplicationCore.initialized = true;
  }// if ( typeof ClassApplicationCore.initialized == "undefined" ) 
}// function ClassApplicationCore()

// var applicationCore = new ClassApplicationCore()

function ClassSandBox(p_instApplicationCore = new ClassApplicationCore()) {
  this.applicationCore = p_instApplicationCore;      
  if ( typeof ClassSandBox.initialized == "undefined" ) {
      ClassSandBox.prototype.messageReceive = function(p_message) {
        // Recevoir un message
        // p_message est composé de : 
        // {expediteur, destinataire, message}


        console.log("messageReceive p_message : ",p_message)


        // en fonction des caractériqtiques du message j'accède à de nombreux sous-systèmes (classes)

        // var result = "approuvé";
        // if (!new ClassBank().verify(this.name, p_amount)) {
        //   result = "denied";
        // } 
        // else if (!new ClassCredit().get(this.name)) {
        //   result = "denied";
        // } 
        // else if (!new ClassBackground().check(this.name)) {
        //   result = "denied";
        // }
        // return "La réponse de la banque concernant Monsieur " + this.name + " est " + result +
        //     " pour un prêt bancaire d'un montant de " + p_amount ;
      }
      ClassSandBox.prototype.messageSend = function(p_message) {
        // Envoyer un message
        // p_message est composé de : 
        // {expediteur, destinataire, message}

        console.log("messageSend p_message : ",p_message)
      }
      ClassSandBox.initialized = true;
  }// if ( typeof ClassSandBox.initialized == "undefined" ) 
}// function ClassSandBox()


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


function ClassMediatorOld() {
    this.subscribers = {};    
    
    if ( typeof ClassMediatorOld.initialized == "undefined" ) {
        ClassMediatorOld.prototype.register = function(p_subscriber) {
          this.subscribers[p_subscriber.name] = p_subscriber;
          p_subscriber.mediator = this;
        }

        ClassMediatorOld.prototype.send = function(p_message, p_sender, p_receiver) {
          if (p_receiver) {
            p_receiver.receive(p_message, p_sender);
          } 
          else {
            for (var key in this.subscribers) {
              if (this.subscribers[key] != p_sender) {
                this.subscribers[key].receive(p_message, p_sender);
              }
            }
          }
        }
        ClassMediatorOld.prototype.division = function(p_a, p_b) {
            return p_a / p_b
        }
        ClassMediatorOld.initialized = true;
    }// if ( typeof ClassMediatorOld.initialized == "undefined" ) 
}// function ClassMediatorOld()



var sandbox999 = {};


var sandbox = {};

(function(nameSpace) {
nameSpace.version = "1.0",
nameSpace.name = "application Core",
nameSpace.find = function(p_id) {
  console.log("Exécution de la fonction find()");
  return document.getElementById(p_id) 
},
nameSpace.addEvent = function(p_id, p_event, p_f) {
  console.log("Exécution de la fonction addEvent()");
  document.getElementById(p_id).addEventListener(p_event, p_f, false);
},
nameSpace.removeEvent = function() {
  console.log("Exécution de la fonction removeEvent()");
  document.getElementById(p_id).removeEventListener(p_event, p_f, false);
},
nameSpace.notify = function() {console.log("Exécution de la fonction notify()") },
nameSpace.listen = function() {console.log("Exécution de la fonction listen()") },
nameSpace.ignore = function() {console.log("Exécution de la fonction ignore()") },
nameSpace.create_element = function() {console.log("Exécution de la fonction create_element()") }



})(sandbox);


