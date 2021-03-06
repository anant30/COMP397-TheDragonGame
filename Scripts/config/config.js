var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.PLAY = 1;
        Scene.SLIDE1 = 2;
        Scene.SLIDE2 = 3;
        Scene.SLIDE3 = 4;
        Scene.SLIDE4 = 5;
        Scene.SLIDE5 = 6;
        Scene.SLIDE6 = 7;
        Scene.SLIDE7 = 8;
        Scene.SLIDE8 = 9;
        Scene.SLIDE9 = 10;
        Scene.OVER = 11;
        Scene.OVER2 = 12;
        Scene.OVER3 = 13;
        Scene.WIN = 14;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//background-image: url("../../Assets/images/Background.jpg"); 
//# sourceMappingURL=config.js.map