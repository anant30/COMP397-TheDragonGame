// SLIDE5 SCENE
module scenes {
    export class Slide5 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: createjs.Text;
        private _slide5Image: createjs.Bitmap;
        private _thirteenButton: objects.Button;
        private _fourteenButton: objects.Button;
        private _fifteenButton: objects.Button;
        
        private _backButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            this._slide5Image = new createjs.Bitmap("../../Assets/images/House5.gif");
            this.addChild(this._slide5Image);    
            // add the SLIDE5 label to the scene
            this._playLabel = new createjs.Text("Choose a Number", "60px Consolas", "#000000");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);





            // add the THIRTEEN button to the SLIDE5 scene ----------------------------------
            this._thirteenButton = new objects.Button(
                "ThirteenButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._thirteenButton);
           
            // THIRTEEN Button event listener
            this._thirteenButton.on("click", this._thirteenButtonClick, this);
            
            // add the FOURTEEN button to the SLIDE5 scene ----------------------------------
            this._fourteenButton = new objects.Button(
                "FourteenButton",
                config.Screen.CENTER_X + 120,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._fourteenButton);
           
            // FOURTEEN Button event listener
            this._fourteenButton.on("click", this._fourteenButtonClick, this);
            
            // add the FIFTEEN button to the SLIDE5 scene ----------------------------------
            this._fifteenButton = new objects.Button(
                "FifteenButton",
                config.Screen.CENTER_X + 140,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._fifteenButton);
           
            // FIFTEEN Button event listener
            this._fifteenButton.on("click", this._fifteenButtonClick, this);

            // add the BACK button to the SLIDE5 scene
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

        // SLIDE5 Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
       
        
        // THIRTEEN Button click event handler
        private _thirteenButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.WIN;            
            changeScene();
        }
        
         // FOURTEEN Button click event handler
        private _fourteenButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();           
        }
        
         // FIFTEEN Button click event handler
        private _fifteenButtonClick(event: createjs.MouseEvent) {
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