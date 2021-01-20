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
  ask.position(windowWidth / 2 - 60, windowHeight/2-100);
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
  notBored.position(windowWidth/2-250, windowHeight/2);
  notBored.mousePressed(next_aNot);

  bored1= createP("Medium Bored");
  bored1.position(windowWidth/2-110, windowHeight/2);
  bored1.mousePressed(next_mBored);

  bored2= createP("Bored");
  bored2.position(windowWidth/2+50, windowHeight/2);
  bored2.mousePressed(next_bored);

  bored3= createP("You can't imagine");
  bored3.position(windowWidth/2+170, windowHeight/2);
  bored3.mousePressed(next_topBored);
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
