var starImg,bgImg;
var star, starBody;
var ninfa,ninfaAmn
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
	ninfaAmn = loadAnimation("images/fairyImage1.png","images/fairyImages2.png")
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice

	//crea el sprite del hada, y agrega la animación para el hada
    ninfa = createSprite(650,230)
	ninfa.addAnimation("flying",ninfaAmn)
	ninfa.scale = 0.9
	ninfa.velocityX = 0

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	ninfa = createSprite(200,200,20,20)
	ninfa.addAnimation(ninfaAmn)

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 

	}
if(keyDown("right_arrow")){
	
ninfa.velocity = 3
	
}
if(keyDown("left_arrow")){

ninfa.velocity = -3

}
	//escribe el código para mover al hada a la izquierda y derecha
}
