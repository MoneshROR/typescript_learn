function typo(emp_number) {
    if (typeof emp_number === "string") {
        console.log("string value " + emp_number);
    }
    else if (typeof emp_number === "number") {
        console.log("ineger value " + emp_number);
    }
}
typo("12");
