import { core } from './module_core.js';
import {  sumOk, subOk  } from './calc.js';
import { create, createReportList } from './modules/canvas.js';
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
import randomSquare from './modules/square.js';


// Pour rendre accessible une fonction dans la console on précède son nom avec 'window.'
window.c_sumOk = sumOk;
window.c_subOk = subOk;
// window.createReportList = createReportList ;
window.c_createReportList = createReportList ;


// let myCanvas = create('myCanvas', document.body, 480, 320);
let myCanvas = create('myCanvas', document.getElementById("canvasDiv"), 480, 320);

console.log("sumOk(10,10) : ",c_sumOk(10,10))

let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// Use the default
let square2 = randomSquare(myCanvas.ctx);


console.log("core.version : ",core.version)
// console.log("core.init() : ",core.init())