var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
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
            //add the background image
            this._slide2Image = new createjs.Bitmap("../../Assets/images/House2.gif");
            this.addChild(this._slide2Image);
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("Woah!! this house is Haunted.. we need to get outta here..", "20px Consolas", "#ffffff");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y + 60;
            this.addChild(this._playLabel);
            this._playLabel1 = new createjs.Text("But seems like we lost the key of our car.. wanna go back inside?", "20px Consolas", "#ffffff");
            this._playLabel1.regX = this._playLabel1.getMeasuredWidth() * 0.5;
            this._playLabel1.regY = this._playLabel1.getMeasuredHeight() * 0.5;
            this._playLabel1.x = config.Screen.CENTER_X;
            this._playLabel1.y = config.Screen.CENTER_Y + 90;
            this.addChild(this._playLabel1);
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
        Slide2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Slide2.prototype._nextButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.SLIDE3;
            changeScene();
        };
        // BACK Button click event handler
        Slide2.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        };
        return Slide2;
    })(objects.Scene);
    scenes.Slide2 = Slide2;
})(scenes || (scenes = {}));
//# sourceMappingURL=slide2.js.map