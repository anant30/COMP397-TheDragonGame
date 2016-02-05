// SLIDE1 SCENE
module scenes {
    export class Slide1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: createjs.Text;
        
        private _oneButton: objects.Button;
        private _twoButton: objects.Button;
        private _threeButton: objects.Button;
        
        private _backButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            // add the SLIDE1 label to the scene
            this._playLabel = new createjs.Text("Choose a Number", "60px Consolas", "#000000");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);



            // add the ONE button to the SLIDE1 scene ----------------------------------
            this._oneButton = new objects.Button(
                "OneButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._oneButton);
           
            // ONE Button event listener
            this._oneButton.on("click", this._oneButtonClick, this);
            
            
            // add the TWO button to the SLIDE1 scene ----------------------------------
            this._twoButton = new objects.Button(
                "TwoButton",
                config.Screen.CENTER_X + 120,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._twoButton);
           
            // TWO Button event listener
            this._twoButton.on("click", this._twoButtonClick, this);
            
            
            // add the THREE button to the SLIDE1 scene ----------------------------------
            this._threeButton = new objects.Button(
                "ThreeButton",
                config.Screen.CENTER_X + 140,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._threeButton);
           
            // THREE Button event listener
            this._threeButton.on("click", this._threeButtonClick, this);





            // add the BACK button to the SLIDE1 scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // SLIDE1 Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // NEXT Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        }
        
        // ONE Button click event handler
        private _oneButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.SLIDE2;
            changeScene();
        }
        
         // ONE Button click event handler
        private _twoButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.SLIDE2;
            changeScene();           
        }
        
         // ONE Button click event handler
        private _threeButtonClick(event: createjs.MouseEvent) {
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