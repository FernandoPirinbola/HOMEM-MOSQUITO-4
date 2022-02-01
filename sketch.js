
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var homemMosquito, capitaoFormiga, aranhaEscoteira, sargentoMinhoca, carrapato;
var predio1, predio2, predio3, predio4, predio5, predio6, predio7, predio8, predio9, prediopreto;
var predioimg;
var sound;

function preload(){
 
  sound = loadSound("440_full_fear_0144_preview.mp3");
 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  
  predio9 = createSprite(280, 495, 170, 130);
  predio9.shapeColor = "yellow";
  sargentoMinhoca = createSprite(210, 489, 10, 10);
  sargentoMinhoca.shapeColor = "pink";
  predio8 = createSprite(380, 495, 170, 130);
  predio7 = createSprite(480, 130, 70, 130);
  aranhaEscoteira = createSprite(485, 130, 10, 10);
  aranhaEscoteira.shapeColor = "black";
  predio6 = createSprite(470, 235, 170, 150);
	predio5 = createSprite(435, 380 , 170, 150);
	predio5.shapeColor = "pink";
	predio4 = createSprite(380,340,70,130);
	predio4.shapeColor = "green";
	predio3 = createSprite(335, 300, 70, 130);
	predio3.shapeColor = "yellow";
	predio2 = createSprite(275,250,70,130);
	predio2.shapeColor = "blue";
	predio1 = createSprite(200, 200, 70, 130);
	capitaoFormiga = createSprite(450, 450, 10, 10);
	capitaoFormiga.shapeColor = "yellow";
  prediopreto = createSprite(1, 1, 150, 130);
  prediopreto.shapeColor = "black";
  carrapato = createSprite(5, 10, 10, 20);
  carrapato.shapeColor = "black";
  homemMosquito = createSprite(200, 200, 10, 10);
	homemMosquito.shapeColor = "red";	

	//Crie os Corpos aqui.


	Engine.run(engine);
  
} 

function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(UP_ARROW)){
    homemMosquito.y = homemMosquito.y  -3
  }
  if(keyDown(DOWN_ARROW)){
    homemMosquito.y = homemMosquito.y  +3
  }
  if(keyDown(LEFT_ARROW)){
    homemMosquito.x = homemMosquito.x  -3
  }
  if(keyDown(RIGHT_ARROW)){
    homemMosquito.x = homemMosquito.x  +3
  }
  if(homemMosquito.isTouching(predio5)){
    textSize(22);
    text("hm mosquito- DESISTA! cp formiga- VOCÊ NÃO VAI ME DERROTAR.",60,20);
  
  }
  if(homemMosquito.isTouching(capitaoFormiga)){
    textSize(22);
    text("SOCO** VOCÊ VENCEU",130,70);
  }
  if(homemMosquito.isTouching(predio7)){
    textSize(22);
    text("aranha es- derrotou o fraco,LUTE CONTRA MIM",60,20);
  }
  if(homemMosquito.isTouching(aranhaEscoteira)){
    textSize(22);
    text("SOCO* venceu!!",130,70);
  }
  if(homemMosquito.isTouching(predio9)){
    textSize(22);
    text("sg Minhoca- Os fracos que percão, defender- me irei", 60,20);
  }
  if(homemMosquito.isTouching(sargentoMinhoca)){
    textSize(22);
    text("ULTRA GOSMA* !THE END!",130, 70);
  }
    if(homemMosquito.isTouching(prediopreto)){
     carrapato.shapeColor = "purple";
     textSize(22);
     text("A FÚRIA DO MUNDO É DEMAIS PRA VOCÊ",60, 20);
    }
    if(homemMosquito.isTouching(carrapato)){
      textSize(22);
     text("final macabro..",110, 70);
     sound.play();
    }
      drawSprites();
}