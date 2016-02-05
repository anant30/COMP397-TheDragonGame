var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SLIDE2 SCENE
var scenes;
(function (scenes) {
    var Slide2 = (function (_super) {
        __extends(Slide2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Slide2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Slide2.prototype.start = function () {
            this._slide2Image = new createjs.Bitmap("../../Assets/images/House2.png");
            // add the SLIDE2 label to the scene
            this._playLabel = new createjs.Text("Choose a Number", "60px Consolas", "#000000");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            // add the FOUR button to the SLIDE2 scene ----------------------------------
            this._fourButton = new objects.Button("FourButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._fourButton);
            // four Button event listener
            this._fourButton.on("click", this._fourButtonClick, this);
            // add the FIVE button to the SLIDE2 scene ----------------------------------
            this._fiveButton = new objects.Button("FiveButton", config.Screen.CENTER_X + 120, config.Screen.CENTER_Y + 60);
            this.addChild(this._fiveButton);
            // FIVE Button event listener
            this._fiveButton.on("click", this._fiveButtonClick, this);
            // add the SIX button to the SLIDE2 scene ----------------------------------
            this._sixButton = new objects.Button("SixButton", config.Screen.CENTER_X + 140, config.Screen.CENTER_Y + 60);
            this.addChild(this._sixButton);
            // SIX Button event listener
            this._sixButton.on("click", this._sixButtonClick, this);
            // add the BACK button to the SLIDE2 scene -----------------------------------
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // SLIDE2 Scene updates here
        Slide2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Slide2.prototype._nextButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        };
        // FOUR Button click event handler
        Slide2.prototype._fourButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        };
        // FIVE Button click event handler
        Slide2.prototype._fiveButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        };
        // SIX Button click event handler
        Slide2.prototype._sixButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.SLIDE3;
            changeScene();
        };
        // BACK Button click event handler
        Slide2.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Slide2;
    })(objects.Scene);
    scenes.Slide2 = Slide2;
})(scenes || (scenes = {}));
//# sourceMappingURL=slide2.js.map