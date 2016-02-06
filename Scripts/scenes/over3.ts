// OVER SCENE
module scenes {
    export class Over3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _overLabel: createjs.Text;
        private _backButton: objects.Button;
        private _overImage: createjs.Bitmap;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // adding background
            this._overImage = new createjs.Bitmap("../../Assets/images/Over.gif");
            this.addChild(this._overImage);
            // add the PLAY label to the scene
            this._overLabel = new createjs.Text("CRAP! we lost!", "30px Consolas", "#ffffff");
            this._overLabel.regX = this._overLabel.getMeasuredWidth() * 0.5;
            this._overLabel.regY = this._overLabel.getMeasuredHeight() * 0.5;
            this._overLabel.x = config.Screen.CENTER_X;
            this._overLabel.y = config.Screen.CENTER_Y+60;
            this.addChild(this._overLabel);

            // add the BACK button to the OVER scene
            this._backButton = new objects.Button(
                "HomeButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 90);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}