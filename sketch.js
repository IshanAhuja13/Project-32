const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, result, JSONresult, dTime, hour;

var bg ;

function preload() {

    getBackgroundImg();
    dayImage = loadImage("sunrise2.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }

    else{
        background(dayImage);
    }


    Engine.update(engine);

    text("Time: " + hour, 10, 20);    // write code to display time in correct format here


}

async function getBackgroundImg(){

        var result = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var JSONresult = await result.json();
        console.log(JSONresult);
    
        var dTime = JSONresult.datetime; 
        var hour = dTime.slice(11,13); 
        console.log(hour);
    
        if(hour >= 04 && hour <= 06){
            bg = "sunrise1.png";
        }
    
        else if(hour >= 06 && hour<= 08){
            bg = "sunrise2.png";
        }
        else if(hour >= 08 && hour<= 10){
            bg = "sunrise3.png";
        }
        else if(hour >= 10 && hour<= 12){
            bg = "sunrise4.png";
        }
        else if(hour >= 12 && hour<= 14){
            bg = "sunrise5.png";
        }
        else if(hour >= 14 && hour<= 16){
            bg = "sunrise6.png";
        }
        else if(hour >= 16 && hour<= 18){
            bg = "sunset7.png";
        }
        else if(hour >= 18 && hour<= 20){
            bg = "sunset8.png";
        }
        else if(hour >= 20 && hour<= 22){
            bg = "sunset9.png";
        }
        else if(hour >= 22 && hour<= 24){
            bg = "sunset10.png";
        }




        backgroundImg = loadImage(bg);
    }
