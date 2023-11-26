// Removing the trial popup from the page

const popup = document.querySelector(".trial-popup")
const removeBtn = document.querySelector(".remove-popup-wrapper img")


removeBtn.addEventListener("click", function() {
    popup.remove()
})


