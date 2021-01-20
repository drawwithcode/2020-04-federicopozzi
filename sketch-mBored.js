let capture;

function setup() {
    capture = createCapture(VIDEO);
    capture.size(windowWidth/2, windowHeight/2);
    capture.position(windowWidth/2-capture.width/2,windowHeight/2-capture.height/2);
    capture.style("background-color", "red");




    text = createElement('span',"Look at you! You need to get bored!");
    text.position(windowWidth/2 -180, windowHeight/7);
    text.style("color:white; font-size:25px;");

    //submit
    button = createButton('Try me!');
    button.position(button.center(), windowHeight-130);
    button.mousePressed(outLink);
}

function draw() {

}


function outLink(){

    window.open("https://www.brade.zone/2008/09/13/boring/", "_self");

}
