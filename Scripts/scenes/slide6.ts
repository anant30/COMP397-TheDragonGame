// PLAY SCENE
module scenes {
    export class Slide6 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: createjs.Text;
        private _nextButton: objects.Button;
        private _backButton: objects.Button;
        private _slide6Image: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //add the background image
            this._slide6Image = new createjs.Bitmap("../../Assets/images/House6.gif");
            this.addChild(this._slide6Image);  
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("Scooby is on Board.. Should he chase deamon to save shaggy??", "35px Consolas", "#ffffff");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y+60;
            this.addChild(this._playLabel);

            // add the NEXT button to the PLAY scene
            this._nextButton = new objects.Button(
                "YesButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._nextButton);
           
            // NEXT Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);

            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button(
                "NoButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 140);
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
        
        // NEXT Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.SLIDE7;
            changeScene();
        }
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER3;
            changeScene();
        }
    }
}