function start() {
    navigator.mediaDevices.getUserMedia({
        Audio: true
    });
    classifier = ml5.soudClassifier("https://teachablemachine.withgoogle.com/models/90qLgxytM/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
} 

function gotResults(error, results) {
    if(error){
        console.error(error);
    }    

    else{
        console.log(results);
        sound = results[0].label;
        accuracy = results[0].confidence;
    }
}