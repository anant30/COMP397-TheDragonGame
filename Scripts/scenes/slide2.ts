// SLIDE2 SCENE
module scenes {
    export class Slide2 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: createjs.Text;
        
        private _fourButton: objects.Button;
        private _fiveButton: objects.Button;
        private _sixButton: objects.Button;
        
        private _backButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("Choose a Number", "60px Consolas", "#000000");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);





            // add the FOUR button to the PLAY scene ----------------------------------
            this._fourButton = new objects.Button(
                "FourButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._fourButton);
           
            // four Button event listener
            this._fiveButton.on("click", this._fourButtonClick, this);
            
            // add the FIVE button to the PLAY scene ----------------------------------
            this._fiveButton = new objects.Button(
                "FiveButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._fiveButton);
           
            // FIVE Button event listener
            this._fiveButton.on("click", this._fiveButtonClick, this);
            
            // add the SIX button to the PLAY scene ----------------------------------
            this._sixButton = new objects.Button(
                "ThreeButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._fourButton);
           
            // SIX Button event listener
            this._fourButton.on("click", this._sixButtonClick, this);





            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 60);
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
            scene = config.Scene.OVER;
            changeScene();
        }
        
        // FOUR Button click event handler
        private _fourButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        }
        
         // FOUR Button click event handler
        private _fiveButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();           
        }
        
         // FOUR Button click event handler
        private _sixButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.SLIDE3;            
            changeScene();
        }
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}