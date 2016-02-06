var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// WIN SCENE
var scenes;
(function (scenes) {
    var Win = (function (_super) {
        __extends(Win, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Win() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Win.prototype.start = function () {
            this._winImage = new createjs.Bitmap("../../Assets/images/Win.png");
            this.addChild(this._winImage);
            // add the WIN label to the scene
            this._overLabel = new createjs.Text("YOU WON", "60px Consolas", "#ffffff");
            this._overLabel.regX = this._overLabel.getMeasuredWidth() * 0.5;
            this._overLabel.regY = this._overLabel.getMeasuredHeight() * 0.5;
            this._overLabel.x = config.Screen.CENTER_X;
            this._overLabel.y = config.Screen.CENTER_Y + 60;
            this.addChild(this._overLabel);
            // add the BACK button to the WIN scene
            this._backButton = new objects.Button("HomeButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 140);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // WIN Scene updates here
        Win.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        Win.prototype._backButtonClick = function (event) {
            // Switch to the WIN Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Win;
    })(objects.Scene);
    scenes.Win = Win;
})(scenes || (scenes = {}));
//# sourceMappingURL=win.js.map