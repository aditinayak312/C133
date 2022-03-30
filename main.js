img="";
objectDetector="";
st="";
objects=[];

function preload(){
img=loadImage("train_car.jpg");
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
}

function modelLoaded(){
    console.log("modelLoaded");
    st="true";
    objectDetector.detect(img,getResult);
}

function getResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){

    image(img,0,0,640,420);

    if(st !=""){
        for( var i=0 ; i<objects.length ; i++){
            document.getElementById("status").innerHTML="Status : Object Detected";
            fill("blue");
            holder=floor(objects[i].confidence*100);
           text(objects[i].label+" "+ holder + "%" , objects[i].x+15 , objects[i].y+15 );
            noFill();
            stroke("red");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);

        }
    }

}
