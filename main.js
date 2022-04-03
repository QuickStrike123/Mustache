NoseX = 0;

NoseY = 0;

function preload() {

    Mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    
}

function setup() {

    Canvas = createCanvas(300, 300);

    Canvas.position(620, 300);

    video = createCapture(VIDEO);

    video.size(300,300);

    video.hide();

    PoseNet = ml5.poseNet(video, modelLoaded);

    PoseNet.on('pose', PoseLoaded);
    
}

function draw() {

    image(video, 0, 0, 300, 300);

    image(Mustache, NoseX - 20, NoseY - 5, 50, 50);
    
}

function TakeSnapshot() {

    save("Picture.png");
    
}

function modelLoaded() {

    console.log('PoseNet Is Initiated'); 
    
}

function PoseLoaded(results) {

    if (results.length > 0) {

        console.log(results);

        NoseX = results[0].pose.nose.x;

        NoseY = results[0].pose.nose.y;

        console.log("Nose X = " + NoseX);

        console.log("Nose Y = " + NoseY);
        
    }
    
}