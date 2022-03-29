Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality: 90 
})
camera = document.getElementById("capture");
Webcam.attach("#camera");

function capture()
{
    Webcam.snap(function(uri) {
    document.getElementById('identify').innerHTML ='< img id="img" src="'+data_img+'"/>'
    });
}

console.log('ml5 version', ml5.version)

classifer=ml5.imageClassifier