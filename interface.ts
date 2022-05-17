interface Point{
    x: number,
    y: string
}

function interface_func(pt:Point){
    console.log("Number is "+pt.x);
    console.log("string is "+pt.y);

}
interface_func({x:1000,y:"monesh soni"})