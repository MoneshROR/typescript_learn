function or_operator(id) {
    if (typeof id === "string") {
        console.log("This string value " + id.toUpperCase());
    }
    else {
        console.log("Number is !" + id);
    }
    // console.log("Number "+id);
}
or_operator("azad");
