var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.begingPath();
lienzo.stroke.Style = "blue";
lienzo.moveTo(100,100);
lienzo.lineTo(200,200);
lienzo.stroke();
lienzo.closePath();
