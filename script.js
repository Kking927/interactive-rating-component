// Select the container and cards
const container = document.querySelector('.container');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const ratingBtns = document.querySelectorAll('.number-btn');
const submitBtn = document.querySelector('.submit-btn');
const ratingValue = document.getElementById('rating-value');

let selectedRating = null;

// Rating Button Logic (unchanged)
ratingBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // Prevent the click from "bubbling up" to the container
    e.stopPropagation(); 

    const isAlreadySelected = e.target.classList.contains('selected');
    ratingBtns.forEach((btn) => btn.classList.remove('selected'));

    if (isAlreadySelected) {
      selectedRating = null;
    } else {
      e.target.classList.add('selected');
      selectedRating = e.target.textContent;
    }
  });
});

// Handle Submit Button
submitBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (selectedRating) {
    ratingValue.textContent = selectedRating;
    
    ratingState.classList.add('display-none');
    thankYouState.classList.remove('display-none');

    // ADD THIS: Make the background appear clickable
    container.classList.add('clickable-bg');
  } else {
    alert('Please select a rating before submitting!');
  }
});

// RESET LOGIC
container.addEventListener('click', (e) => {
  if (e.target === container) {
    selectedRating = null;
    ratingBtns.forEach((btn) => btn.classList.remove('selected'));

    ratingState.classList.remove('display-none');
    thankYouState.classList.add('display-none');

    // REMOVE THIS: Reset the cursor back to default
    container.classList.remove('clickable-bg');
  }
});
