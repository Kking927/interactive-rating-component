// 1. DOM Selections (Moved to the top)
const container = document.querySelector('.container');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const ratingBtns = document.querySelectorAll('.number-btn');
const submitBtn = document.querySelector('.submit-btn');
const ratingValue = document.getElementById('rating-value');

let selectedRating = null;

// 2. Rating Button Logic
ratingBtns.forEach((button) => { // FIXED: Changed parameter 'btn' to 'button'
  button.addEventListener('click', (e) => {
    e.stopPropagation(); 

    const isAlreadySelected = e.target.classList.contains('selected');
    
    // Clear selections from all buttons
    ratingBtns.forEach((clearBtn) => clearBtn.classList.remove('selected')); // FIXED: Changed 'btn' to 'clearBtn'

    if (isAlreadySelected) {
      selectedRating = null;
    } else {
      e.target.classList.add('selected');
      selectedRating = e.target.textContent;
    }
  });
});

// 3. Handle Submit Button
submitBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (selectedRating) {
    ratingValue.textContent = selectedRating;
    
    ratingState.classList.add('display-none');
    thankYouState.classList.remove('display-none');
    container.classList.add('clickable-bg');
  } else {
    alert('Please select a rating before submitting!');
  }
});

// 4. Reset Logic
container.addEventListener('click', (e) => {
  if (e.target === container) {
    selectedRating = null;
    
    // Clear selections on reset
    ratingBtns.forEach((resetBtn) => resetBtn.classList.remove('selected')); // FIXED: Changed 'btn' to 'resetBtn'

    ratingState.classList.remove('display-none');
    thankYouState.classList.add('display-none');
    container.classList.remove('clickable-bg');
  }
});
