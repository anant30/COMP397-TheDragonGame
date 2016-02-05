module objects {
    export class Background extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES
        width: number;
        height: number;
        //CONSTRUCTOR
        constructor(pathString:string, x:number, y: number) {
            super("../../Assets/images/" + pathString + ".jpg");
            this.x = x;
            this.y = y; 

            this.width = 640;
            this.height = 480;


           
        }
    }
} 