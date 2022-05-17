interface Colorful {
    color: string;
 }
  interface Circle {
    radius: number;
 }
  interface ColorfulCircle extends Colorful, Circle {}
  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
 };

 function mul_infr(x:ColorfulCircle){
     console.log("color is ! "+x.color.toUpperCase()+" Radius is ! "+x.radius);
 }
 mul_infr({color:"red",radius:120});