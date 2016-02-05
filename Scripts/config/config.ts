﻿module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static PLAY: number = 1;
        
        public static SLIDE1: number = 2;
        public static SLIDE2: number = 3;
        public static SLIDE3: number = 4;
        public static SLIDE4: number = 5;
        public static SLIDE5: number = 6;
          
        public static OVER: number = 7;
        
        
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}