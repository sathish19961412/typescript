export class Point{
    constructor(private x?:number,public y?:number,public z?:number)
    {
       
    }
    private draw=():any=>{
        console.log('X:'+ this.x + 'Y:' + this.y + 'Z:' + this.z );
    }
    drawRectangle=():any=>{
        console.log("Drawing Rectangle");
        this.draw()
    }
    get X(){
        return this.x;
    }
    set X(value)
    {
        this.x=value;
    }
}