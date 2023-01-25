//Code that iterates in multiples of A until X, 
//then in multiples of A + 1 until 2X, then multiples of A + 2 until 3X. 


//Create empty variables that will take the value of alert.

let a = 0;

let x = 0;

//Check that the incoming data is a number, positive, and without the floating point.

while (true) {
  a = +prompt("Please enter the value for A:", "");
  if (a > 0) {
    break;
  }
  if (a <= 0) {
    alert("The value cannot be negative. Try again...", "");
    a = +prompt("Please enter the value for A:", "");
  }
  if (a % 1 !== 0 && a !== Number.isNaN()) {
    alert("That wasn`t a whole number in digits. Try again...", "");
    a = +prompt("Please enter the value for A:", "");
  }
}

//Prepare variables for the loop from the entered data.

iter1 = a;
iter2 = a + 1;
iter3 = a + 2;

//Check that the incoming data is a number, positive, and without the floating point.

while (true) {
  x = +prompt("Please enter the value for B:", "");
  if (x > 0) {
    break;
  }
  if (x <= 0) {
    alert("The value cannot be negative. Try again...", "");
    x = +prompt("Please enter the value for B:", "");
  }
  if (x % 1 !== 0 && a !== Number.isNaN()) {
    alert("That wasn`t a whole number in digits. Try again...", "");
    x = +prompt("Please enter the value for B:", "");
  }
}

//Prepare variables for the loop from the entered data.

goal1 = x;
goal2 = x * 2;
goal3 = x * 3;

//Loops.

alert("Multiples of A until X");
while (iter1 <= goal1) {
  alert(iter1);
  iter1 = a + iter1;
}
alert("Multiples of A+1 until 2X");
while (iter2 <= goal2) {
  alert(iter2);
  iter2 = (a + 1) + iter2;
}
alert("Multiples of A+3 until 3X");
while (iter3 <= goal3) {
  alert(iter3);
  iter3 = (a + 2) + iter3;
}
