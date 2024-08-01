document.addEventListener("DOMContentLoaded", function() {
    const monthlyBtn = document.getElementById("monthly-btn");
    const yearlyBtn = document.getElementById("yearly-btn");
    const cards = document.querySelectorAll(".card");
  
    monthlyBtn.addEventListener("click", function() {
      cards.forEach(card => {
        if (card.classList.contains("monthly")) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
      monthlyBtn.classList.add("active-btn");
      yearlyBtn.classList.remove("active-btn");
    });
  
    yearlyBtn.addEventListener("click", function() {
      cards.forEach(card => {
        if (card.classList.contains("yearly")) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
      yearlyBtn.classList.add("active-btn");
      monthlyBtn.classList.remove("active-btn");
    });
  
    // Default to showing monthly cards
    monthlyBtn.click();
  });

// Select all cards
const cards = document.querySelectorAll('.card');

// Iterate over each card to attach event listeners
cards.forEach((card) => {
  const credits = card.querySelectorAll('.credits > div');
  const priceDisplay = card.querySelector('.credit-price-yearly');
  const creditDisplay = card.querySelector('.cr');
  const price = card.querySelector('.price');

  if (price) {
    // Extract the base monthly price from the card's price element
    const baseMonthlyPrice = parseFloat(price.textContent.replace(/[^0-9.]/g, ''));

    credits.forEach((credit) => {
      credit.addEventListener('click', (e) => {
        // Remove 'activeredit' class from all credits in this card
        credits.forEach((item) => {
          item.classList.remove('activeredit');
        });

        // Add 'activeredit' class to the clicked credit
        e.target.classList.add('activeredit');

        // Get the number of credits from the clicked element
        const selectedCredits = parseInt(e.target.getAttribute('data-credits'));

        // Calculate the main price based on credits
        let mainPrice = baseMonthlyPrice;
        switch (selectedCredits) {
          case 15:
            mainPrice = baseMonthlyPrice; // No change
            break;
          case 30:
            mainPrice = baseMonthlyPrice*2 // Square
            break;
          case 60:
            mainPrice = baseMonthlyPrice*3; // Cube
            break;
          case 90:
            mainPrice = baseMonthlyPrice*4; // Cube
            break;
          case 180:
            mainPrice = baseMonthlyPrice; // No change
            break;
          case 360:
            mainPrice = baseMonthlyPrice*2; // Square
            break;
          case 720:
            mainPrice = baseMonthlyPrice*3; // Cube
            break;
          case 1080:
            mainPrice = baseMonthlyPrice*4; // Cube
            break;
          default:
            mainPrice = baseMonthlyPrice; // No change
        }

        // Calculate the yearly price based on mainPrice
        const yearlyPrice = mainPrice * 12;

        // Update the yearly price display for this card
        priceDisplay.textContent = `$${yearlyPrice.toFixed(2)} Billed yearly`;
        creditDisplay.textContent = selectedCredits;
        price.textContent = `$${mainPrice.toFixed(0)}/mo`;
      });
    });
  }
});



// document.querySelectorAll(".credits > div").forEach((item) => {
//     item.addEventListener("click", (e) => {
//       // Remove 'active' class from all credits
//       document.querySelectorAll(".credits > div").forEach((credit) => {
//         credit.classList.remove("activecredit");
//       });
  
//       // Add 'active' class to the clicked credit
//       e.target.classList.add("activecredit");
  
//       // Get the number of credits from the clicked element
//       const credits = parseInt(e.target.getAttribute("data-credits"));
      
//       // Define the base monthly price
//       const baseMonthlyPrice = 48;
  
//       // Calculate the yearly price based on credits
//       let yearlyPrice = 0;
//       switch(credits) {
//         case 180:
//           yearlyPrice = baseMonthlyPrice * 12;
//           break;
//         case 360:
//           yearlyPrice = baseMonthlyPrice * 1.5 * 12;
//           break;
//         case 720:
//           yearlyPrice = baseMonthlyPrice * 2 * 12;
//           break;
//         default:
//           yearlyPrice = baseMonthlyPrice * 12;
//       }
  
//       // Update the yearly price display
//       document.querySelector(".yearly-price").textContent = `$${yearlyPrice} Billed yearly`;
//     });
//   });