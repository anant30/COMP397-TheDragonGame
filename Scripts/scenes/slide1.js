var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SLIDE1 SCENE
var scenes;
(function (scenes) {
    var Slide1 = (function (_super) {
        __extends(Slide1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Slide1() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Slide1.prototype.start = function () {
            // add the SLIDE1 label to the scene
            this._playLabel = new createjs.Text("Choose a Number", "60px Consolas", "#000000");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            // add the ONE button to the SLIDE1 scene ----------------------------------
            this._oneButton = new objects.Button("OneButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._oneButton);
            // ONE Button event listener
            this._oneButton.on("click", this._oneButtonClick, this);
            // add the TWO button to the SLIDE1 scene ----------------------------------
            this._twoButton = new objects.Button("TwoButton", config.Screen.CENTER_X + 120, config.Screen.CENTER_Y + 60);
            this.addChild(this._twoButton);
            // TWO Button event listener
            this._twoButton.on("click", this._twoButtonClick, this);
            // add the THREE button to the SLIDE1 scene ----------------------------------
            this._threeButton = new objects.Button("ThreeButton", config.Screen.CENTER_X + 140, config.Screen.CENTER_Y + 60);
            this.addChild(this._threeButton);
            // THREE Button event listener
            this._threeButton.on("click", this._threeButtonClick, this);
            // add the BACK button to the SLIDE1 scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // SLIDE1 Scene updates here
        Slide1.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Slide1.prototype._nextButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        };
        // ONE Button click event handler
        Slide1.prototype._oneButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.SLIDE2;
            changeScene();
        };
        // ONE Button click event handler
        Slide1.prototype._twoButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.SLIDE2;
            changeScene();
        };
        // ONE Button click event handler
        Slide1.prototype._threeButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        };
        // BACK Button click event handler
        Slide1.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Slide1;
    })(objects.Scene);
    scenes.Slide1 = Slide1;
})(scenes || (scenes = {}));
//# sourceMappingURL=slide1.js.map