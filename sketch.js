var player,player_img

function preload(){
player_img = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png")
}
function setup (){
	createCanvas(displayWidth,displayHeight);

	player = createSprite(100,displayHeight/2, 50,50);
	player.addAnimation("running",player_img);

}
function draw(){
	background("black")
	drawSprites();
}