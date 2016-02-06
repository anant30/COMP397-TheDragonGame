var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
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
            //add the background image
            this._slide3Image = new createjs.Bitmap("../../Assets/images/House3.gif");
            this.addChild(this._slide3Image);
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("YOOHoo! we found scooby snack in kitchen.. eat it?", "25px Consolas", "#ffffff");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y + 60;
            this.addChild(this._playLabel);
            // add the NEXT button to the PLAY scene
            this._nextButton = new objects.Button("YesButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 140);
            this.addChild(this._nextButton);
            // NEXT Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button("NoButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 140);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Slide3.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Slide3.prototype._nextButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.SLIDE4;
            changeScene();
        };
        // BACK Button click event handler
        Slide3.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER3;
            changeScene();
        };
        return Slide3;
    })(objects.Scene);
    scenes.Slide3 = Slide3;
})(scenes || (scenes = {}));
//# sourceMappingURL=slide3.js.map