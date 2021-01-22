let capture;

function setup() {
    capture = createCapture(VIDEO);
    capture.size(windowWidth/2, windowHeight/2);
    capture.position(windowWidth/2-capture.width/2,windowHeight/2-capture.height/2);
    capture.style("background-color", "rgba(53, 102, 9, 0)");




    text = createElement('span',"Look at you! You need to get bored!");
    text.position(windowWidth/2 -180, windowHeight/7);
    text.style("color:white; font-size:25px;");

    //submit
    button = createButton('Try me!');
    button.position(button.center(), windowHeight-130);
    button.mousePressed(outLink);
    button.style("color:indigo; background-color:yellow",);
}

function draw() {
}


function outLink(){

    window.open("https://www.youtube.com/watch?v=Jk71bPz5VLo", "_self");

}
