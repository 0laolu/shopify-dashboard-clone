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
    console.log(event.target)

    // improving ux by displaying dropdown when any element is clicked

    if(event.target.className == "setup-guide-label") {
        event.target.parentElement.classList.toggle("active")
    } else if(event.target.className == "setup-guide-description") {
        event.target.parentElement.parentElement.classList.toggle("active")
    } else if(event.target.className == "content-description" || event.target.className == "description-header") {
        event.target.parentElement.parentElement.parentElement.classList.toggle("active")
    } else if (event.target.className == "dropdown-icon" || event.target.className == "form-progress") {
        event.target.parentElement.parentElement.parentElement.classList.toggle("active")
    } else if (event.target.className == "progress-count" || event.target.className == "progress-indicator") {
        event.target.parentElement.parentElement.parentElement.parentElement.classList.toggle("active")
    } else if (event.target.className == "progress-bar-container") {
        event.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle("active")
    } else if (event.target.className == "progress-bar") {
        event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle("active")
    }
})