var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            this._introImage = new createjs.Bitmap("../../Assets/images/Intro.gif");
            this.addChild(this._introImage);
            // add the MENU label to the scene
            this._gameLabel = new createjs.Text("Scooby Dooby Do.. where are you", "30px Consolas", "#ffffff");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X;
            this._gameLabel.y = config.Screen.CENTER_Y + 60;
            this.addChild(this._gameLabel);
            this._gameLabel1 = new createjs.Text("Go through the haunted houses to find the mystery", "20px Consolas", "#ffffff");
            this._gameLabel1.regX = this._gameLabel1.getMeasuredWidth() * 0.5;
            this._gameLabel1.regY = this._gameLabel1.getMeasuredHeight() * 0.5;
            this._gameLabel1.x = config.Screen.CENTER_X;
            this._gameLabel1.y = config.Screen.CENTER_Y + 90;
            this.addChild(this._gameLabel1);
            // add the START button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 60);
            this.addChild(this._startButton);
            // START Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // MENU Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Switch to the SLIDE1 Scene
            scene = config.Scene.SLIDE1;
            changeScene();
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map