Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#camera");
function click_pic(){
    Webcam.snap(function(img){
        document.getElementById("result").innerHTML = '<img id="result_pic" src="'+ img +'"/>';
    });
    text_to_speech();
}
model=ml5.imageClassifier("",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}