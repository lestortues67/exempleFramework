import { btnVert, makeBtnVert  } from "./mod_button_vert.js";
import { ClassColleague, ClassMediator, ClassSandBox  } from "./mod_SandBox.js";


window.sandbox = new ClassSandBox();

makeBtnVert("p_inst_SandBox")



// var mediator = new Mediator();
var mediator = new ClassMediator();

// With this infrastructure, if a colleague wants to participate in the communication, he can
// register as shown here:
var johnSmith = new ClassAbonne("John");
var marioRossi = new ClassAbonne("Mario");
var lory = new ClassAbonne("Lory");
var sandbox = new ClassAbonne("sandbox");
var appCore = new ClassAbonne("appCore");





mediator.register(johnSmith);
mediator.register(marioRossi);
mediator.register(lory);
mediator.register(sandbox);
mediator.register(appCore);
// It can communicate with a specific colleague in the following way:
johnSmith.send("Hello Mario ! How are you ? ", marioRossi);
lory.send("Hello Mario ! I love you !!", marioRossi);
marioRossi.send("Hello Lory ! I love you TOO !!", lory);
// It can communicate with all colleagues using the following statement:
johnSmith.send("Hello!");

marioRossi.send("Hello John ! it's ok ? ", johnSmith);

sandbox.send("Hello appCore ! ", appCore);
appCore.send("Hello sandbox ! ", sandbox);


// Créer Application Core avec DP_mediator



// Créer SandBox avec DP_facade ( &  DP_mediator ? )


// Créer des modules ( avec DP_module ? )