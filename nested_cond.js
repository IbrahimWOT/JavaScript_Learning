let marks = 39
if (marks < 0 || marks > 100) {
    console.log("Invalid Marks");
}
else if (marks >= 40) {
    console.log("Passed")
    if (marks <= 100 && marks >= 80) {
        console.log("A+")
    }
    else if (marks < 80 && marks >= 70) {
        console.log("A-")
    }
    else if (marks < 70 && marks >= 40) {
        console.log("D")
    }
}
else { console.log("Failed") }