interface Circle {
    kind: string;
    radius: number;
}

function my_func(x:Circle){
    // if(x.n<=120){
    //     console.log("This is match");
    // }else{
    //     console.log("value not matche");
    // }
    if(x.radius<15){
        console.log("value is less than given "+x.radius);
    }else{
        console.log("something else");
    }
    // console.log(x.kind);
    // console.log(x.radius);

}
my_func({kind:"ani",radius:10});


console.log("PI value "+Math.PI);