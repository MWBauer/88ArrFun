
var a = [1, 2, 3, 4, 5];
console.log("<h2>Effects of passing entire " +  "array by reference</h2>");
outputArray("Original array: ", a);
modifyArray(a);  //array a passed by reference
outputArray("Modified array: ", a);
document.writeln("<h2>Effects of passing array " + "element by value</h2>" + "The value stored at a[3] before modifyElement: " + a[3]);
modifyElement(a[3]); //array element a[3] passed by value
document.writeln("<br/>The value stored at a[3] after modifyElement: " + a[3]);

// outputs heading followed by the contents of "theArray"
function outputArray(heading, theArray) {
    document.writeln(heading + theArray.join("") + "<br/>");
}

//function that modifies the elements of an array
function modifyArray(theArray) {
    for (var j in theArray)
    theArray[j] *= 2;
}
//function that modifies the value passed
function modifyElement(e) {
    e *= 2;  //scales element e only for the duration of the function
    document.writeln("<br/>value in modifyElement: " + e);
}
