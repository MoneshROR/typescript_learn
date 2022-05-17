function printAll(strs) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                (parameter);
                strs: string[];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
    else {
        console.log("value is null");
    }
}
printAll("monesh");
