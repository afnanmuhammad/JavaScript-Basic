// Arrary is collecation of items and store a single variable

let array = [3, 6, 8, 2, 9,]
console.log(array);


// ***************************************
// looping array

let provenceName = ["Khyber Pakhtunkhwa", "Balochistan", "Panjab", "Sindh"]

for (let i = 0; i < provenceName.length; i++) {

    // console.log(provenceName[i]);
}


// ************************************
// for of loop

for (let city of provenceName) {
    console.log(city.toUpperCase());
}

//************************************************** */
// in loop in Array

for (let ciTy in provenceName) {
    console.log(ciTy); // that will print index
    console.log(provenceName[ciTy].toUpperCase());
}

// ********************************************
// Example

let marks = [46, 67, 27, 86, 4, 90, 35, 56, 89]
let sum = 0;
for (let PlasMarks of marks) {
    sum += PlasMarks; // sum = sum + PlasMarks
}
console.log("Total Marks", sum);



let manfee = sum - marks.length;
console.log(`the manfee marks of the class ${manfee}`);



let avrege = sum / marks.length;
console.log(`The averge maeks of the class ${avrege}`);


let divid = sum * marks.length;
console.log(`THe % of the class ${divid}`);