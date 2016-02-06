/// <reference path = "_reference.ts" />
// global variables
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var menu;
var play;
var win;
var over;
var over2;
var over3;
var slide1;
var slide2;
var slide3;
var slide4;
var slide5;
var slide6;
var slide7;
var slide8;
var slide9;
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.SLIDE1:
            // show the SLIDE1 scene
            stage.removeAllChildren();
            slide1 = new scenes.Slide1();
            currentScene = slide1;
            console.log("Starting SLIDE1 Scene");
            break;
        case config.Scene.SLIDE2:
            // show the SLIDE2 scene
            stage.removeAllChildren();
            slide2 = new scenes.Slide2();
            currentScene = slide2;
            console.log("Starting SLIDE2 Scene");
            break;
        case config.Scene.SLIDE3:
            // show the SLIDE3 scene
            stage.removeAllChildren();
            slide3 = new scenes.Slide3();
            currentScene = slide3;
            console.log("Starting SLIDE3 Scene");
            break;
        case config.Scene.SLIDE4:
            // show the SLIDE4 scene
            stage.removeAllChildren();
            slide4 = new scenes.Slide4();
            currentScene = slide4;
            console.log("Starting SLIDE4 Scene");
            break;
        case config.Scene.SLIDE5:
            // show the SLIDE5 scene
            stage.removeAllChildren();
            slide5 = new scenes.Slide5();
            currentScene = slide5;
            console.log("Starting SLIDE5 Scene");
            break;
        case config.Scene.SLIDE6:
            // show the SLIDE6 scene
            stage.removeAllChildren();
            slide6 = new scenes.Slide6();
            currentScene = slide6;
            console.log("Starting SLIDE6 Scene");
            break;
        case config.Scene.SLIDE7:
            // show the SLIDE7 scene
            stage.removeAllChildren();
            slide7 = new scenes.Slide7();
            currentScene = slide7;
            console.log("Starting SLIDE7 Scene");
            break;
        case config.Scene.SLIDE8:
            // show the SLIDE8 scene
            stage.removeAllChildren();
            slide8 = new scenes.Slide8();
            currentScene = slide8;
            console.log("Starting SLIDE8 Scene");
            break;
        case config.Scene.SLIDE9:
            // show the SLIDE9 scene
            stage.removeAllChildren();
            slide9 = new scenes.Slide9();
            currentScene = slide9;
            console.log("Starting SLIDE9 Scene");
            break;
        case config.Scene.OVER:
            // show the game OVER scene
            stage.removeAllChildren();
            over = new scenes.Over();
            currentScene = over;
            console.log("Starting OVER Scene");
            break;
        case config.Scene.OVER2:
            // show the game OVER scene
            stage.removeAllChildren();
            over2 = new scenes.Over2();
            currentScene = over2;
            console.log("Starting OVER2 Scene");
            break;
        case config.Scene.OVER3:
            // show the game OVER scene
            stage.removeAllChildren();
            over3 = new scenes.Over3();
            currentScene = over3;
            console.log("Starting OVER3 Scene");
            break;
        case config.Scene.WIN:
            // show the game OVER scene
            stage.removeAllChildren();
            win = new scenes.Win();
            currentScene = win;
            console.log("Starting WIN Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map