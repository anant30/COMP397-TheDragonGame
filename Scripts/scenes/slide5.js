var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SLIDE5 SCENE
var scenes;
(function (scenes) {
    var Slide5 = (function (_super) {
        __extends(Slide5, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Slide5() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Slide5.prototype.start = function () {
            this._slide5Image = new createjs.Bitmap("../../Assets/images/House5.gif");
            // add the SLIDE5 label to the scene
            this._playLabel = new createjs.Text("Choose a Number", "60px Consolas", "#000000");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            // add the THIRTEEN button to the SLIDE5 scene ----------------------------------
            this._thirteenButton = new objects.Button("ThirteenButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._thirteenButton);
            // THIRTEEN Button event listener
            this._thirteenButton.on("click", this._thirteenButtonClick, this);
            // add the FOURTEEN button to the SLIDE5 scene ----------------------------------
            this._fourteenButton = new objects.Button("FourteenButton", config.Screen.CENTER_X + 120, config.Screen.CENTER_Y + 60);
            this.addChild(this._fourteenButton);
            // FOURTEEN Button event listener
            this._fourteenButton.on("click", this._fourteenButtonClick, this);
            // add the FIFTEEN button to the SLIDE5 scene ----------------------------------
            this._fifteenButton = new objects.Button("FifteenButton", config.Screen.CENTER_X + 140, config.Screen.CENTER_Y + 60);
            this.addChild(this._fifteenButton);
            // FIFTEEN Button event listener
            this._fifteenButton.on("click", this._fifteenButtonClick, this);
            // add the BACK button to the SLIDE5 scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // SLIDE5 Scene updates here
        Slide5.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // THIRTEEN Button click event handler
        Slide5.prototype._thirteenButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.WIN;
            changeScene();
        };
        // FOURTEEN Button click event handler
        Slide5.prototype._fourteenButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        };
        // FIFTEEN Button click event handler
        Slide5.prototype._fifteenButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        };
        // BACK Button click event handler
        Slide5.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Slide5;
    })(objects.Scene);
    scenes.Slide5 = Slide5;
})(scenes || (scenes = {}));
//# sourceMappingURL=slide5.js.map