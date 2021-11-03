noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/4dwJtZs4/cloennss.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseY = results[0].pose.nose.y;
        noseX = results[0].pose.nose.x
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function modelLoaded() {
    console.log('posenet is initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    // fill(255,0,0);
    // stroke(111,203,71);
    // circle(noseX, noseY, 25);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save('mehar.png');
}