  var Mediator = function() {
      // Source : livre "2016_Mastering JavaScript Object-Oriented Programming"
      // page 262
      var colleagues = {};
      return {
        register: function(colleague) {
          colleagues[colleague.name] = colleague;
          colleague.mediator = this;
        },
        send: function(message, sender, receiver) {
          if (receiver) {
            receiver.receive(message, sender);
          } 
          else {
            for (key in colleagues) {
              if (colleagues[key] != sender) {
                colleagues[key].receive(message, sender);
              }
            }
          }
        }
      };
    };  

    function ClassColleague(p_name) {
        this.name = p_name;
        this.mediator = null;
        
        if ( typeof ClassColleague.initialized == "undefined" ) {
            ClassColleague.prototype.send = function(p_message, p_receiver) {
                this.mediator.send(p_message, this, p_receiver);
            }
            ClassColleague.prototype.receive = function(p_message, p_sender) {
                // process the message
                console.log("Message reçu de",p_sender.name,":",p_message)
            }
            ClassColleague.initialized = true;
        }// if ( typeof ClassColleague.initialized == "undefined" ) 
    }// function ClassColleague()
    
    var mediator = new Mediator();

    // With this infrastructure, if a colleague wants to participate in the communication, he can
    // register as shown here:
    var johnSmith = new ClassColleague("John");
    var marioRossi = new ClassColleague("Mario");





    mediator.register(johnSmith);
    mediator.register(marioRossi);
    // It can communicate with a specific colleague in the following way:
    johnSmith.send("Hello Mario ! How are you ? ", marioRossi);
    // It can communicate with all colleagues using the following statement:
    johnSmith.send("Hello!");

    marioRossi.send("Hello John ! it's ok ? ", johnSmith);

