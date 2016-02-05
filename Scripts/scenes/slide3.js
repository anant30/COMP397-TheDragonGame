var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SLIDE3 SCENE
var scenes;
(function (scenes) {
    var Slide3 = (function (_super) {
        __extends(Slide3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Slide3() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Slide3.prototype.start = function () {
            this._slide3Image = new createjs.Bitmap("../../Assets/images/House3.png");
            this.addChild(this._slide3Image);
            // add the SLIDE3 label to the scene
            this._playLabel = new createjs.Text("Choose a Number", "60px Consolas", "#000000");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            // add the SEVEN button to the SLIDE3 scene ----------------------------------
            this._sevenButton = new objects.Button("SevenButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._sevenButton);
            // seven Button event listener
            this._sevenButton.on("click", this._sevenButtonClick, this);
            // add the EIGHT button to the SLIDE3 scene ----------------------------------
            this._eightButton = new objects.Button("EightButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._eightButton);
            // EIGHT Button event listener
            this._eightButton.on("click", this._eightButtonClick, this);
            // add the NINE button to the SLIDE3 scene ----------------------------------
            this._nineButton = new objects.Button("NineButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._nineButton);
            // NINE Button event listener
            this._nineButton.on("click", this._nineButtonClick, this);
            // add the BACK button to the SLIDE3 scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // SLIDE3 Scene updates here
        Slide3.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // SEVEN Button click event handler
        Slide3.prototype._sevenButtonClick = function (event) {
            // Switch to the SLIDE4 Scene
            scene = config.Scene.SLIDE4;
            changeScene();
        };
        // EIGHT Button click event handler
        Slide3.prototype._eightButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        };
        // NINE Button click event handler
        Slide3.prototype._nineButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        };
        // BACK Button click event handler
        Slide3.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Slide3;
    })(objects.Scene);
    scenes.Slide3 = Slide3;
})(scenes || (scenes = {}));
//# sourceMappingURL=slide3.js.map