/*
let happy;
let sad;
let soso;
*/


function preload(){

}

function setup() {

  //write your name
  myName = createInput();
 /* myName.position((windowWidth / 2), windowHeight/2);*/
  myName.position(myName.center(), windowHeight/2);

  ask = createElement('span',"who are you?");
  ask.position(windowWidth / 2 - 80, windowHeight/2-100);
  ask.style("color:white; font-size:25px;");

  //submit
  button = createButton('here I am!');
  button.position(button.center(), windowHeight-350);
  button.mousePressed(name);


}

function draw() {

}

function name(){

  //creating new paragraph
  bored = createP("Hi "+ myName.value()+", how much are you bored?");
  bored.position(windowWidth / 2 - 150, windowHeight/2-100);
  bored.style("color:white; font-size:25px;");


  //hiding previous input and button
  myName.hide();
  ask.hide();
  button.hide();

  //emoticons
  notBored = createP("Actually not");
  notBored.position(windowWidth/2-390, windowHeight/2+30);
  notBored.mousePressed(next_aNot);
  notBored.style("cursor:pointer");
  notBored.addClass("rotate1");

  bored1= createP("Medium Bored");
  bored1.position(windowWidth/2-160, windowHeight/2);
  bored1.mousePressed(next_mBored);
  bored1.style("cursor:pointer");
  bored1.addClass("colorate");


  bored2= createP("Bored");
  bored2.position(windowWidth/2+40, windowHeight/2);
  bored2.mousePressed(next_bored);
  bored2.style("color:peachpuff","cursor:pointer");
  bored2.addClass("sizeate");

  bored3= createP("You can't imagine");
  bored3.position(windowWidth/2+250, windowHeight/2);
  bored3.mousePressed(next_topBored);
  bored3.style("color:Indigo","cursor:pointer");
  bored3.addClass("rotate2")
}

function next_aNot(){

  window.open("aNot.html", "_self");

}

function next_bored(){

  window.open("bored.html", "_self");

}

function next_mBored(){

  window.open("mBored.html", "_self");

}

function next_topBored(){

  window.open("topBored.html", "_self");

}
