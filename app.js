// Removing the trial popup from the page

const popup = document.querySelector(".trial-popup")
const removeBtn = document.querySelector(".remove-popup-wrapper img")


removeBtn.addEventListener("click", function() {
    popup.remove()
})


// loading and removing the content for set up guide

const setupGuideAccordion = document.querySelector(".setup-guide-list-wrapper")
console.log(setupGuideAccordion)

setupGuideAccordion.addEventListener("click", function(event) {
    if(event.target.className == "setup-guide-label") {
        event.target.parentElement.classList.toggle("active")
    } else if (event.target.className == "dropdown-icon") {
        event.target.parentElement.parentElement.parentElement.classList.toggle("active")
    }
})