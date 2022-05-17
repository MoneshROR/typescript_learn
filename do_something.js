function dosomething(name) {
    if (name == null) {
        console.log("This is null value " + name);
    }
    else {
        console.log("value is string " + name.toUpperCase());
    }
}
dosomething("null");
