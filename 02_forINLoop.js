// for in loop it is used for object{a:1, b:5, c:6} and Array[4,7,2,"string"] that return keys

let student_data = {
    fullName: "M.Afnan",
    RollNo: 201155,
    Program: "4 Years",
    isPass: true

};

for (let key in student_data) {
    // console.log("It is all record of the object", student_data);
    // console.log(key);
    // console.log('Key =', key, "       ", 'Value =', student_data[key]);
}