

// Ce fichier est un 'module' pour un bouton VERT 

// Son objectif est : INFORMER App_Core du CLICK


// Le btn existe déjà sur la page HTML ? 

// Oui, alors je n'enverrai un msg à SandBox que lors de la survenue d'un event 'click'. 

function btnVert(p_inst_SandBox) {
  var btn = document.getElementById("btnVert")
  btn.addEventListener('click',p_inst_SandBox.eventEntry("btnVert","click"))
}



// Non, je crée le btn et je le place qur la page HTML 

function consoleClick() {
  console.log("btn vert clicked")
}


function makeBtnVert(p_inst_SandBox) {
  var btnVert = document.createElement("button")
  btnVert.classList.add('btn')
  btnVert.classList.add('btn-success')
  btnVert.innerHTML = "click ici"
  // btnVert.addEventListener('click',p_inst_SandBox.eventEntry("btnVert","click"))
  btnVert.addEventListener('click',consoleClick, false)
  var parentBtnVert = document.getElementById("parentBtnVert")
  parentBtnVert.appendChild(btnVert)
}

export { btnVert, makeBtnVert};