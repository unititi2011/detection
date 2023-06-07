img="";
status2 ="";
objetos=[];
objetodetectato="";
function preload() {
    img=loadImage("pets.webp")
}
function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objetodetectato=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("sta").innerHTML="Status detectando objetos"
}
function modelLoaded() {
    console.log("modeloCarregado")
    status2="true";
    objetodetectato.detect(img,gotResult);
}
function draw() {
    image(img,0,0,640,420);
    if (status2!=" ") {
        for(i=0;i<objetos.length;i++){
            document.getElementById("sta").innerHTML="Objeto detectado"
            fill("red")
            porcentagem=floor(objetos[i].confidence*100);
            text(objetos[i].label+" "+porcentagem+"%",objetos[i].x+15,objetos[i].y+15);   
        }
    }
    }
function gotResult(error,results) {
    if(error){
        console.error(error);
    }
    else{console.log(results);
    objetos=results;
    }
}
function inicio() {
    window.location="index.html"
}