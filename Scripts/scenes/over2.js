var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// OVER SCENE
var scenes;
(function (scenes) {
    var Over2 = (function (_super) {
        __extends(Over2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Over2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Over2.prototype.start = function () {
            // adding background
            this._overImage = new createjs.Bitmap("../../Assets/images/Over2.gif");
            this.addChild(this._overImage);
            // add the PLAY label to the scene
            this._overLabel = new createjs.Text("You have been Lockedup inside the Haunted House", "30px Consolas", "#ffffff");
            this._overLabel.regX = this._overLabel.getMeasuredWidth() * 0.5;
            this._overLabel.regY = this._overLabel.getMeasuredHeight() * 0.5;
            this._overLabel.x = config.Screen.CENTER_X;
            this._overLabel.y = config.Screen.CENTER_Y + 60;
            this.addChild(this._overLabel);
            // add the BACK button to the OVER scene
            this._backButton = new objects.Button("HomeButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Over2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        Over2.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Over2;
    })(objects.Scene);
    scenes.Over2 = Over2;
})(scenes || (scenes = {}));
//# sourceMappingURL=over2.js.map