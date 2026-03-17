const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Change the position of no button on click
noBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent any default button behavior
  
  // Get container dimensions
  const containerWidth = questionContainer.offsetWidth;
  const containerHeight = questionContainer.offsetHeight;
  
  // Get button dimensions
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  
  // Calculate random position within container boundaries
  const maxX = Math.max(0, containerWidth - btnWidth);
  const maxY = Math.max(0, containerHeight - btnHeight);
  
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  
  // Position the button absolutely within the container
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});