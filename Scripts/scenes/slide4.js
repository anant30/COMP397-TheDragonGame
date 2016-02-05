var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SLIDE4 SCENE
var scenes;
(function (scenes) {
    var Slide4 = (function (_super) {
        __extends(Slide4, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Slide4() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Slide4.prototype.start = function () {
            this._slide4Image = new createjs.Bitmap("../../Assets/images/House4.png");
            // add the SLIDE4 label to the scene
            this._playLabel = new createjs.Text("Choose a Number", "60px Consolas", "#000000");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            // add the TEN button to the SLIDE4 scene ----------------------------------
            this._tenButton = new objects.Button("TenButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._tenButton);
            // ten Button event listener
            this._tenButton.on("click", this._tenButtonClick, this);
            // add the ELEVEN button to the SLIDE4 scene ----------------------------------
            this._elevenButton = new objects.Button("ElevenButton", config.Screen.CENTER_X + 120, config.Screen.CENTER_Y + 60);
            this.addChild(this._elevenButton);
            // ELEVEN Button event listener
            this._elevenButton.on("click", this._elevenButtonClick, this);
            // add the TWELVE button to the SLIDE4 scene ----------------------------------
            this._twelveButton = new objects.Button("TwelveButton", config.Screen.CENTER_X + 140, config.Screen.CENTER_Y + 60);
            this.addChild(this._twelveButton);
            // TWELVE Button event listener
            this._twelveButton.on("click", this._twelveButtonClick, this);
            // add the BACK button to the SLIDE4 scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // SLIDE4 Scene updates here
        Slide4.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // TEN Button click event handler
        Slide4.prototype._tenButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        };
        // ELEVEN Button click event handler
        Slide4.prototype._elevenButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        };
        // TWELVE Button click event handler
        Slide4.prototype._twelveButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.SLIDE5;
            changeScene();
        };
        // BACK Button click event handler
        Slide4.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Slide4;
    })(objects.Scene);
    scenes.Slide4 = Slide4;
})(scenes || (scenes = {}));
//# sourceMappingURL=slide4.js.map