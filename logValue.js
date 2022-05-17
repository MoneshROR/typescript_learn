function logvalue(x) {
    if (x instanceof Date) {
        console.log("Date " + x.toUTCString());
    }
    else {
        console.log("string" + x.toUpperCase());
    }
}
logvalue(new Date(2022, 20, 12));
