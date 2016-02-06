// WIN SCENE
module scenes {
    export class Win extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _overLabel: createjs.Text;
        private _backButton: objects.Button;
        private _winImage: createjs.Bitmap;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            this._winImage = new createjs.Bitmap("../../Assets/images/Win.png");
            this.addChild(this._winImage);    
            // add the WIN label to the scene
            this._overLabel = new createjs.Text("YOU WON", "60px Consolas", "#000000");
            this._overLabel.regX = this._overLabel.getMeasuredWidth() * 0.5;
            this._overLabel.regY = this._overLabel.getMeasuredHeight() * 0.5;
            this._overLabel.x = config.Screen.CENTER_X;
            this._overLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._overLabel);

            // add the BACK button to the WIN scene
            this._backButton = new objects.Button(
                "HomeButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // WIN Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the WIN Scene
            scene = config.Scene.SLIDE1;
            changeScene();
        }
    }
}