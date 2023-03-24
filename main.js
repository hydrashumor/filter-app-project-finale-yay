noseX =0;
noseY=0;
function preload(){
    hat = loadImage('https://i.postimg.cc/BbNt7KCf/cowboyhat-removebg-preview.png');

}
function setup(){
canvas = createCanvas(800,500);
canvas.center();
video = createCapture(VIDEO);
video.size(800,500);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
image(video, 0,0,800,500);
image(hat,noseX-180,noseY-300,400,300);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x ="+ results[0].pose.nose.x);
        console.log("nose y ="+results[0].pose.nose.y);
    }
}