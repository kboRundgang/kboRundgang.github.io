var Station;
var Scene;
var i;

function SetStation(selected){
    Scene = 1;
    Station = selected;
    UpdatePath();
    DisableMap();
}

function NextScene(){
    Scene++;
    if(Scene >= 9){
        Scene = 1;
    }
    if(Scene == 6 && Station == 6){
        Scene = 7;
    }
    UpdatePath();
}

function LastScene(){
    Scene--;
    if(Scene <= 0){
        Scene = 8;
    }
    if(Scene == 6 && Station == 6){
        Scene = 5;
    }
    UpdatePath();
}

function UpdatePath(){
    document.getElementById("frame").src = "img/" + Station.toString() + "-" + Scene.toString() + ".jpeg";
}

function DisableMap(){
    document.getElementById("MapButtons1").style.display = "none";
    document.getElementById("MapButtons2").style.display = "none";
    document.getElementById("MapButtons3").style.display = "none";
    document.getElementById("MapButtons4").style.display = "none";
    document.getElementById("MapButtons5").style.display = "none";
    document.getElementById("MapButtons6").style.display = "none";
    document.getElementById("MapButtons7").style.display = "none";

    document.getElementById("SceneButtons1").style.display = "inline";
    document.getElementById("SceneButtons2").style.display = "inline";
    document.getElementById("SceneButtons3").style.display = "inline";
    
}

function EnableMap(){
    document.getElementById("MapButtons1").style.display = "inline";
    document.getElementById("MapButtons2").style.display = "inline";
    document.getElementById("MapButtons3").style.display = "inline";
    document.getElementById("MapButtons4").style.display = "inline";
    document.getElementById("MapButtons5").style.display = "inline";
    document.getElementById("MapButtons6").style.display = "inline";
    document.getElementById("MapButtons7").style.display = "inline";

    document.getElementById("SceneButtons1").style.display = "none";
    document.getElementById("SceneButtons2").style.display = "none";
    document.getElementById("SceneButtons3").style.display = "none";
    document.getElementById("frame").src = "map.png";
}