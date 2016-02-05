// SLIDE3 SCENE
module scenes {
    export class Slide3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: createjs.Text;
        
        private _sevenButton: objects.Button;
        private _eightButton: objects.Button;
        private _nineButton: objects.Button;
        
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





            // add the SEVEN button to the PLAY scene ----------------------------------
            this._sevenButton = new objects.Button(
                "SevenButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._sevenButton);
           
            // seven Button event listener
            this._eightButton.on("click", this._sevenButtonClick, this);
            
            // add the EIGHT button to the PLAY scene ----------------------------------
            this._eightButton = new objects.Button(
                "EightButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._eightButton);
           
            // EIGHT Button event listener
            this._eightButton.on("click", this._eightButtonClick, this);
            
            // add the NINE button to the PLAY scene ----------------------------------
            this._nineButton = new objects.Button(
                "ThreeButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._sevenButton);
           
            // NINE Button event listener
            this._sevenButton.on("click", this._nineButtonClick, this);





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
        
        // SEVEN Button click event handler
        private _sevenButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.SLIDE4;            
            changeScene();
        }
        
         // SEVEN Button click event handler
        private _eightButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();           
        }
        
         // SEVEN Button click event handler
        private _nineButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;            
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