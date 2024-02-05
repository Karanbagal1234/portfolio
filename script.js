document.addEventListener('DOMContentLoaded', function() {
  // Get all flip-card-back elements
  const cardBacks = document.querySelectorAll('.flip-card-back');

  cardBacks.forEach(cardBack => {
      const percentageElement = cardBack.querySelector('p');
      const percentageText = percentageElement.innerText;
      const percentage = parseInt(percentageText, 10);

      // Set the gradient background
      cardBack.style.backgroundImage = `
          linear-gradient(
              to top, 
              #25D366 ${percentage}%, 
              transparent ${percentage}% 100%
          )`;

      // Change the text color based on the percentage
      if (percentage <= 50) { // You can adjust this threshold as per your requirement
          percentageElement.style.color = 'white';
      } else {
          percentageElement.style.color = 'black';
      }
  });
});
im=document.getElementsByClassName("div2")[0];
s=im.classList;
function cane(){
    if(window.innerWidth<992){
        im.src="me1.png"
    }
}
cane();

function fs() {
    // Use camelCase for fontSize
    let x = document.querySelector("body > div.portfolio-container > div > div > h3").style.fontSize;
    return x;
 }
 
 let nav = document.querySelector("#navbarNav > ul > li:nth-child(5) > a");
 // Assign the font size to the innerText property
 nav.innerText = fs();
 