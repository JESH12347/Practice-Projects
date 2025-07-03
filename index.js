function rollDice() {
  randomNo1 = Math.random(); //will generate a random no.
  randomNo1 *= 6; //mul the no by 6(max no.s )
  n = Math.floor(randomNo1); //Roundin off the no to the nearest integer
  console.log(n); //to get the no of the dice rolled

  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + (n + 1) + ".png"); //changing the image source

  randomNo2 = Math.random(); //will generate a random no.
  randomNo2 *= 6; //mul the no by 6(max no.s )
  n2 = Math.floor(randomNo2); //Roundin off the no to the nearest integer
  console.log(n2);

  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + (n2 + 1) + ".png"); //changing the image source

  if (n > n2) {
    document.querySelector(".container h1").innerHTML = " 🚩Player 1 wins";
  } else if (n < n2) {
    document.querySelector(".container h1").innerHTML = " Player 2 wins🚩";
  } else {
    document.querySelector(".container h1").innerHTML = " Draw ";
  }
}

window.onload = function () {
  // Modern method
  const navEntries = performance.getEntriesByType("navigation");
  const isReload = navEntries.length > 0 && navEntries[0].type === "reload";

  // Fallback for older browsers
  const legacyReload = performance.navigation.type === 1;

  if (isReload || legacyReload) {
    rollDice(); // Only roll if refreshed
  }
};
