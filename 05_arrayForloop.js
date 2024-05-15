let items = [43, 76, 24, 90, 45, 10, 76]
let i = 0; //this is for index to print

for (let val of items) {
    console.log(`value at index  ${i} = ${val}`);

    let offer = val / 10;
    items[i] = items[i] - offer; // go to items change the value in index(i) but dicrese the value form val
    console.log(`value ofter offer = ${items[i]}`);
    i++;
}


//for loop ************************************

let iTems = [43, 76, 24, 90, 45, 10, 76]

for (let value = 0; value < iTems.length; value++) {
    let oFFer = iTems[value] / 10;
    iTems[value] -= oFFer;
}
console.log(iTems);