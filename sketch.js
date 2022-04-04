//Variables

var virusLeft, VirusRight, virusGroup , virus_anim;
var misil, misl_img, misilGroup;
var player
var standUp, standDown, standLeft, standRight, walkUp, walkDown, walkLeft, walkRight;

var lives = 5;
var heart1, heart2, heart3, heart4, heart5, heart_img;

var lab_bg;
var wheel, wheel_Img;
var Y2020, Y2021,Y2022, Y2023, Y2024, Y2025, Y2026, Y2027, Y2028, Y2029;
var I2020, I2021,I2022, I2023, I2024, I2025, I2026, I2027, I2028, I2029;
var slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9, slot10, slot11, slot12;
var slot_img;

var valor = [Y2020, Y2022];

function preload() {
  virus_anim = loadAnimation("Assets/Virus1.png", "Assets/Virus2.png");
  walkUp = loadAnimation("Assets/CaminaArriba1.png", "Assets/ParadoArriba.png", "Assets/CaminaArriba2.png");
  walkDown = loadAnimation("Assets/CaminaAbajo1.png", "Assets/ParadoAbajo.png", "Assets/CaminaAbajo2.png");
  walkLeft = loadAnimation("Assets/CaminaIzquierda1.png", "Assets/ParadoIzquierda.png", "Assets/CaminaIzquierda2.png");
  walkRight = loadAnimation("Assets/CaminaDerecha1.png", "Assets/ParadoDerecha.png", "Assets/CaminaDerecha2.png");
  
  lab_bg = loadImage("Assets/Escenario.png");
  wheel_Img = loadImage("Assets/Vacia.png");
  I2020 = loadImage("Assets/2020.png");
  I2021 = loadImage("Assets/2021.png");
  I2022 = loadImage("Assets/2022.png");
  I2023 = loadImage("Assets/2023.png");
  I2024 = loadImage("Assets/2024.png");
  I2025 = loadImage("Assets/2025.png");
  I2026 = loadImage("Assets/2026.png");
  I2027 = loadImage("Assets/2027.png");
  I2028 = loadImage("Assets/2028.png");
  I2029 = loadImage("Assets/2029.png");
  heart_img = loadImage("Assets/Vida.png");
  misil_img = loadImage("Assets/Misil.png");

  standUp = loadImage("Assets/ParadoArriba.png");
  standDown = loadImage("Assets/ParadoAbajo.png");
  standLeft = loadImage("Assets/ParadoIzquierda.png");
  standRight = loadImage("Assets/ParadoDerecha.png");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = createSprite(width/2, height/2, 50, 50);
  player.addImage(standDown);
  player.addAnimation("Izquierda", walkLeft);
  player.addAnimation("Derecha", walkRight);
  player.addAnimation("Arriba", walkUp);
  player.addAnimation("Abajo", walkDown);
  player.scale = 0.25;
  
  heart1 = createSprite(width/2 -200, height-800);
  heart1.addImage(heart_img);
  heart1.scale = 0.1;

  heart2 = createSprite(width/2 -150, height-800);
  heart2.addImage(heart_img);
  heart2.scale = 0.1;

  heart3 = createSprite(width/2 -100, height-800);
  heart3.addImage(heart_img);
  heart3.scale = 0.1;

  heart4 = createSprite(width/2 -50, height-800);
  heart4.addImage(heart_img);
  heart4.scale = 0.1;

  heart5 = createSprite(width/2, height-800);
  heart5.addImage(heart_img);
  heart5.scale = 0.1;

  virusGroup = new Group();
  misilGroup = new Group();



}

function draw() {
    background(lab_bg);
    console.log(lives);
    //player.collide(virusGroup);

    if(keyIsDown(LEFT_ARROW)){
      player.x -= 5;
      player.changeAnimation("Izquierda", walkLeft);
    }

    if(keyIsDown(RIGHT_ARROW)){
      player.x += 5;
      player.changeAnimation("Derecha", walkRight);
    }

    if(keyIsDown(UP_ARROW)){
      player.y -= 5;
      player.changeAnimation("Arriba", walkUp);
    }

    if(keyIsDown(DOWN_ARROW)){
      player.y += 5;
      player.changeAnimation("Abajo", walkDown);
    }


  if(lives === 0){
    textSize(100);
    text("FIN DE LA PARTIDA", width/2, height/2,);
  }

  if(lives === 5){
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
    heart4.visible = true;
    heart5.visible = true;
  }

  if(lives === 4){
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
    heart4.visible = true;
    heart5.visible = false;
  }

  if(lives === 3){
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
    heart4.visible = false;
    heart5.visible = false;
  }

  if(lives === 2){
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = false;
    heart4.visible = false;
    heart5.visible = false;
  }

  if(lives === 1){
    heart1.visible = true;
    heart2.visible = false;
    heart3.visible = false;
    heart4.visible = false;
    heart5.visible = false;
  }

  if(lives === 0){
    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;
    heart4.visible = false;
    heart5.visible = false;
  }

  event2020();
  drawSprites();
}


function event2020() {

  if(frameCount%125 === 0){
    virusLeft = createSprite(width-2000, height, 50, 50);
    virusRight = createSprite(width+50, height, 50, 50);

    virusLeft.y = Math.round(random(height-50, height-1000));
    virusLeft.addAnimation("virus", virus_anim);
    virusLeft.scale = 0.3;
    virusLeft.velocityX = +2.5;
    virusLeft.lifetime = 1000;
    virusLeft.debug = false;
    virusGroup.add(virusLeft);

    virusRight.y = Math.round(random(height-50, height-1000));
    virusRight.addAnimation("virus", virus_anim);
    virusRight.scale = 0.3;
    virusRight.velocityX = -2.5;
    virusRight.lifetime = 1000;
    virusRight.debug = false;
    virusGroup.add(virusRight);

    if(virusGroup.isTouching(player)){
      console.log("Jugador infectado");
      lives -= 1;
      player.x = player.x+50;
    }
  }
}

function event2021() {

}

function event2022(){

  if(frameCount%125 === 0){
    Misil = createSprite(width-2000, height, 50, 50);


    virusLeft.x = Math.round(random(width-50, width-1000));
    Misil.addImage(misil_img);
    Misil.scale = 0.3;
    Misil.velocityY = +10;
    Misil.lifetime = 1000;
    Misil.debug = false;
    misilGroup.add(Misil);


    if(misilGroup.isTouching(player)){
      console.log("Jugador golpeado por el misil");
      lives -= 1;
      player.x = player.x+250;
    }
  }
}

function event2023() {

}

function event2024() {

}

function event2025(){

}

function event2026() {

}

function event2027(){

}

function event2028(){

}

function event2029(){

}