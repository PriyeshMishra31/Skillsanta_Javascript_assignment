// Write a Javascript program to take three numbers from the user
// as input and print the largest number on the document.


let a = prompt("Enter the first Number");
let b = prompt("Enter the second nymber");
let c = prompt("Enter the third number");

if(a > b && b > c)
{
    document.write("A is the greater number");
}
else if (a > c && b > a ) {
    document.write("B is the greater number");
} 
else{
    document.write("C is the greater number");
}