var randomNo1;
randomNo1 = Math.random(); //will generate a random no.
randomNo1 *= 6; //mul the no by 6(max no.s )
n = Math.floor(randomNo1); //Roundin off the no to the nearest integer
console.log(n);

document.querySelector(".img1").setAttribute("src", "images/dice" + n + ".png"); //changing the image source

var randomNo1;
randomNo1 = Math.random(); //will generate a random no.
randomNo1 *= 6; //mul the no by 6(max no.s )
n = Math.floor(randomNo1); //Roundin off the no to the nearest integer
console.log(n);

document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + (n + 1) + ".png"); //changing the image source
