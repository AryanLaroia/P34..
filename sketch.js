  var dog, happyDog;
  var dogImg, happyDogImg;
  var database;
var dataRef;
var foodTan;
  function preload(){
    dogImg = loadImage("Dog.png");
    happyDogImg = loadImage("happydog.png");
  }

function setup(){
  var canvas = createCanvas(500,500);
  database = firebase.database();
  dataRef = database.ref('food');
  dataRef.on("value", readStock);
  dog = createSprite(200,200,20,20);
  dog.addImage("doggy",dogImg);
  dog.scale = 0.1;
}

function draw(){
background(46,139,187);
if(keyWentDown(UP_ARROW)){
 writeStock(foodTan);
  dog.changeImage("lol", happyDogImg);
}

  drawSprites();
}



function readStock(data){

foodTan = data.val();
}


function writeStock(x){
database.ref('/').update({
  Food :x
});
}







































// //Create variables here
// var dog, happyDog;
// var dogImage, happyDogImage;
// var database;
// var foodS, foodStock;
// function preload()
// {
//   dogImage = loadImage("images/dogImg.png");
//   happyDogImage = loadImage("images/dogImg1.png");
// }

// function setup() {
//   createCanvas(500, 500);
//   database = firebase.database();
//   foodStock = database.ref('food');
//   foodStock.on("value", readStock);
//    dog = createSprite(200,200,20,20);
//   dog.addImage("ok", dogImage);
//   dog.addImage("okay", happyDogImage);
//   dog.scale = 0.1;
// }


// function draw() {  
// background("green");

// if(keyWentDown(UP_ARROW)){
// writeStock(foodS);
// dog.changeImage("okay", happyDogImage);
// }
//   drawSprites();
  
// text("FOOD LEFT : " +foodS, 200,100);
// textSize(90);
// }


// function readStock(data){
// foodS = data.val();
// }
// function writeStock(x){
//   if(x<=0){
//     x=0;
//   }else{
//     x = x-1;
//   }
// database.ref('/').update({
//   food : x
// })
// }