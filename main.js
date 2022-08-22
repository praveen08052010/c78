function preload()
{}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(muastach_ms, noseX - 10, noseY - 10, 30, 30);
}

noseX = 0
noseY = 0

function preload()
{
    muastach_ms = loadImage("https://i.postimg.cc/dtnr8nQt/beard-png-image-5a3a8f2ac40dc7-0551798615137871788031.jpg");
}





function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + results[0]. pose.nose.x)
        console.log("nose y =" + results[0].pose.nose.y)
       
    }
}


function modelLoaded()
{
    console.log("PoseNet Is Installized");
}



