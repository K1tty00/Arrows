var abajo, Abajo, Arriba, arriba;
var derecha, Derecha, Izquierda, izquierda;
var b;
var linea1, linea2;
var iz,de,ab,ar;
var score = 0
var alazar
var velocidad = 7
var moref = 25
var v = 0
var d = 0
var gamestate = "start"
var t = 0;
var d = 0;
var u = 0;
var conteo1 = 0;
var conteo2 = 0;
var conteo3 = 0;
var conteo4 = 0;
var cantflechas = 0;
var music1
var music = 0;
var tiempo = 0;
var tiempofinal = 0;
var estrella, star;
var sf, sof;

function preload(){
  Abajo = loadAnimation("Abajo_F1.png","Abajo_F2.png","Abajo_F3.png");
   b = loadImage ("B.jpg")
Arriba = loadAnimation("Arriba_F1.png","Arriba_F2.png","Arriba_F3.png");
Derecha = loadAnimation("Derecha_F1.png","Derecha_F2.png","Derecha_F3.png");
Izquierda = loadAnimation("Izquierda_F1.png","Izquierda_F2.png","Izquierda_F3.png")
  hard = loadImage ("HARD.png");
  medium = loadImage ("MEDIUM.png");
  easy = loadImage ("EASY.png");
 uno = loadImage ("1.png");
  diez = loadImage ("1000.png");
  cien = loadImage("100.png");
  mil = loadImage ("10.png");
  play = loadImage ("Play.png");
  music1 = loadSound ("Music1.mp3");
  estrella = loadImage ("Estrella.png");
  fail = loadImage ("Fail.png");
  sf = loadSound ("SF.mp3");
  sf2 = loadSound ("SF2.mp3");
  sf3 = loadSound ("SF3.mp3");
  sf4 = loadSound ("SF4.mp3");
}


function setup() {
  createCanvas(1000,700);
  
   outputVolume(0.2);
  //music1.play();
  
 hard1 = createSprite (100, 103)
  hard1.addImage("hard", hard)

  medium1 = createSprite (100, 153)
  medium1.addImage("medium", medium)
  
  easy1 = createSprite (100, 203)
  easy1.addImage ("easy", easy)
  
  uno1 = createSprite (300, 300);
  uno1.addImage ("uno", uno);
  
  diez1 = createSprite (400, 300);
  diez1.addImage ("diez", diez);
  
  cien1 = createSprite (500, 300);
  cien1.addImage ("cien", cien);
  
  mil1 = createSprite (600,300);
  mil1.addImage("mil", mil);
  
  play1 = createSprite (870,552);
play1.addImage("play", play);
  play1.scale = 0.50
  play1.visible = false;
  
iz = new Group()
de = new Group()
ab = new Group()
ar = new Group()
  
}

function draw() {
  background(b); 
  
  
if (gamestate == "start"){
    
  fill(235, 211, 255);
  textSize(100);
  textFont("broadway")
  text("Arrows",400,130)
  
  textSize(30)
   text ("Velocidad", 30, 53)
  
  textSize (30)
  text ("Dificultad", 370,222);
  
  if (mousePressedOver(hard1)){
    velocidad = 20
    medium1.destroy();
    easy1.destroy();
    v = 3
  }
 if (mousePressedOver(medium1)) {
   velocidad = 12
   hard1.destroy();
   easy1.destroy();
   v = 2
 }
  if (mousePressedOver(easy1)){
    velocidad = 7
    hard1.destroy();
    medium1.destroy();
    v = 1
  }
  
  if (mousePressedOver(uno1)){
    moref = 30
    diez1.destroy();
    cien1.destroy();
    mil1.destroy();
    d = 1
  }
  if (mousePressedOver(diez1)){
    moref = 24
        uno1.destroy();
    cien1.destroy();
    mil1.destroy();
    d = 10
  }
  
  if (mousePressedOver(cien1)){
    moref = 18
        uno1.destroy();
    diez1.destroy();
    mil1.destroy();
    d = 100
  }
  if (mousePressedOver(mil1)){
    moref = 10
        uno1.destroy();
    diez1.destroy();
    cien1.destroy();
    d = 1000
  }
  
  if (v > 0 && d > 0){
    play1.visible = true
  
  if (mousePressedOver(play1)){
    gamestate = "midtime"
    
  }
  }
}
  if (gamestate == "midtime"){
play1.destroy();
    uno1.destroy();
    diez1.destroy();
    cien1.destroy();
    mil1.destroy();
    easy1.destroy();
    medium1.destroy();
    hard1.destroy();
  if (t== 0){
    conteo1 = frameCount + 50;
    conteo2 = frameCount + 100;
    conteo3 = frameCount + 150;
    conteo4 = frameCount + 200;
    
    t = 1;
  }
  
    if (frameCount < conteo1){
      Tres();  
    }
    if (frameCount > conteo1 && frameCount < conteo2){
      Dos();
    }
    if (frameCount > conteo2 && frameCount < conteo3){
      Uno();
   
    }
    if (frameCount > conteo3 && frameCount < conteo4){
      Start();
      gamestate = "game";
       
       console.log(frameCount);
    tiempofinal = frameCount + 2295 // FINAL
 //     tiempofinal = frameCount + 1000 
    }
   
   
  }
  
  

    if (gamestate == "game"){
      Score();
       tiempo = minute()
    
     console.log(frameCount);
           
         if(ab.length > 0){
           if (ab.get(0).y > 650){
             score = score - 50
     ab.get(0).destroy();
      }
         }
        if(ar.length > 0){
           if (ar.get(0).y > 650){
             score = score - 50
     ar.get(0).destroy();
      }
         }
      
        if(iz.length > 0){
           if (iz.get(0).y > 650){
             score = score - 50
     iz.get(0).destroy();
      }
         }
      
        if(de.length > 0){
           if (de.get(0).y > 650){
             score = score - 50
     de.get(0).destroy();
      }
         }
      
      if (frameCount < tiempofinal){
      flechas();
      }
        if (music == 0){
        music1.play();
          music = 1
      }
      
      if (frameCount == tiempofinal){
      
      gamestate = "final"
      }
    }
 
  if (gamestate == "final"){
    Score();
    music1.stop();
    ab.setLifetimeEach(0)
    ar.setLifetimeEach(0)
    iz.setLifetimeEach(0)
    de.setLifetimeEach(0)
    ab.destroyEach()
    ar.destroyEach()
    iz.destroyEach()
    de.destroyEach()
   
    
    if (d == 1){
      if (score >= 7300){
        textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(estrella, 400, 300, 100,100 );
        image(estrella, 600, 300, 100,100 );
        image(estrella, 500, 250, 100,100 );
      }
      if (score >= 6000 && score < 7300){
       textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(estrella, 600, 300, 100,100 );
        image(estrella, 500, 250, 100,100 );
      }
      if (score >= 4000 && score < 6000){
       textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(estrella, 500, 250, 100,100 );
    }
    if (score < 4000){
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(fail, 300,150, 500,500);
    }
  }
    
        if (d == 10){
      if (score >= 9000){
        textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(estrella, 400, 300, 100,100 );
        image(estrella, 600, 300, 100,100 );
        image(estrella, 500, 250, 100,100 );
      }
          if (score >= 7000 && score < 9000){
        textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(estrella, 600, 300, 100,100 );
        image(estrella, 500, 250, 100,100 );
      }
          if (score >= 5000 && score < 7000){
        textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(estrella, 500, 250, 100,100 );
      }
          if (score < 5000){
        textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(fail, 300,150, 500,500);
      }
        }
    
        if (d == 100){
      if (score >= 12000){
        textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(estrella, 400, 300, 100,100 );
        image(estrella, 600, 300, 100,100 );
        image(estrella, 500, 250, 100,100 );
      }
      if (score >= 10000 && score < 12000){
       textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(estrella, 600, 300, 100,100 );
        image(estrella, 500, 250, 100,100 );
      }
      if (score >= 8000 && score < 10000){
       textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(estrella, 500, 250, 100,100 );
    }
    if (score < 8000){
       textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(fail, 300,150, 500,500);
    }
        }
    
        if (d == 1000){
      if (score >= 21500){
        textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(estrella, 400, 300, 100,100 );
        image(estrella, 600, 300, 100,100 );
        image(estrella, 500, 250, 100,100 );
      }
      if (score >= 18000 && score < 21500){
       textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(estrella, 600, 300, 100,100 );
        image(estrella, 500, 250, 100,100 );
      }
      if (score >= 14000 && score < 18000){
       textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(estrella, 500, 250, 100,100 );
    }
    if (score < 14000){
       textSize(40)
        fill("white")
        text("Your score is: " + score, 380,200) 
        image(fail, 300,150, 500,500);
    }
  }
}
    

  drawSprites();
  
  textSize(10)
  text(mouseX +" "+ mouseY,20,20);
  

}

function flechas(){
  linea1 = createSprite(500,570,1000,5);
  linea1.shapeColor = "white"
  
  
  alazar = Math.round(random(1,4));
  if (frameCount % moref== 0){
    
    cantflechas = cantflechas + 1
    switch (alazar){
        
        
      case 1: 
  abajo = createSprite(700, 0);
  abajo.addAnimation("Flecha Abajo",Abajo);
  abajo.scale = 0.22;
  abajo.velocityY = velocidad
        ab.add(abajo);
  
    break;
    
    case 2:
  arriba = createSprite(500, 0);
  arriba.addAnimation("Flecha Arriba",Arriba);
  arriba.scale = 0.22;
  arriba.velocityY = velocidad
        ar.add(arriba);
          if (ar.get(0).y > 600){
     ar.get(0).destroy();
      }
    break;
    
    case 3:
  derecha = createSprite(900, 0);
  derecha.addAnimation("Flecha Derecha",Derecha);
  derecha.scale = 0.22;
  derecha.velocityY = velocidad
        de.add(derecha);
      break;
      
      case 4:
  izquierda = createSprite(300, 0);
  izquierda.addAnimation("Flecha Izquierda",Izquierda);
  izquierda.scale = 0.22;
  izquierda.velocityY = velocidad
   izquierda.lifetime = 260 
iz.add(izquierda)
        break;
    }
  }
}

function Score(){
    
  fill("white");
  textSize(20);
  text("Score: " + score,9,64)
}

function Tres(){
  fill("white");
  textSize(150);
text ("3", 500, 350)

}
function Dos(){
  fill("white");
  textSize(150);
text ("2", 500, 350)

}
function Uno(){
  fill("white");
  textSize(150);
text ("1", 500, 350)
 
}
function Start(){
  fill("white")
  textSize(150);
  text ("¡Start!", 300,350)
}

function keyPressed(){
if (keyCode == 40){
  sf4.play();
         if(linea1.overlap(ab)){
    score = score + 100   
           ab.get(0).destroy()
  } 
         else{
           if(ab.length > 0){
           score = score - 50
 ab.get(0).destroy()
           }
         }
  }

  if (keyCode == 37){
      sf.play();
         if(linea1.overlap(iz)){
    score = score + 100   
            iz.get(0).destroy()
  } 
         else{
            if(iz.length > 0){
           score = score - 50
            iz.get(0).destroy()
         }
         }
  }
  if (keyCode == 38){
      sf2.play();
         if(linea1.overlap(ar)){
    score = score + 100  
            ar.get(0).destroy()
  } 
         else{
            if(ar.length > 0){
           score = score - 50
            ar.get(0).destroy()
            }
         }
  }
       if (keyCode == 39){
           sf3.play();
         if(linea1.overlap(de)){
    score = score + 100    
            de.get(0).destroy()
  } 
         else{
           if(de.length > 0){
           score = score - 50
            de.get(0).destroy()
          
         }
         }
  } 
  
}

  


