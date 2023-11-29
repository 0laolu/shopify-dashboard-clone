// Removing the trial popup from the page

const popup = document.querySelector(".trial-popup")
const removeBtn = document.querySelector(".remove-popup-wrapper img")


removeBtn.addEventListener("click", function() {
    popup.remove()
})


// loading and removing the content for set up guide

const setupGuideAccordion = document.querySelector(".setup-guide-list-wrapper")
console.log(setupGuideAccordion)

const firstListAccordion = document.querySelectorAll(".setup-guide-content")

setupGuideAccordion.addEventListener("click", function(event) {
    // console.log(event.)

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


// checking and unchecking the checkbox

const emptyCheckboxes = document.querySelectorAll(".checkbox.empty")

const checkedCheckboxes = document.querySelectorAll(".checkbox.checked")
const checkboxLoader = document.createElement("img")

checkboxLoader.src = "./images/checkbox-loader.svg"
checkboxLoader.classList.add("checkbox-loader")
checkboxLoader.alt = "checkbox loader"

// getting the list wrapper for the list accordion
const listsAccordion = document.querySelectorAll(".setup-guide-content")

// adjusting the progress bar based on if checked or not 
let progressCount = document.querySelector(".progress-count")
let count = document.querySelector(".count").textContent
// console.log(progressCount)
// let count = 0

emptyCheckboxes.forEach(emptyCheckbox => {
    // console.log(emptyCheckbox)
    emptyCheckbox.addEventListener("click", function(event) {
        // console.log(event.target)
        if(event.target.className == "checkbox empty") {
            emptyCheckbox.style.display = "none"
            checkboxLoader.classList.add("active")
            emptyCheckbox.parentElement.appendChild(checkboxLoader)
    
            setTimeout(function () {
                // Remove the loader image and show the checked checkbox
                checkboxLoader.remove();
                event.target.nextElementSibling.classList.add("active")
    
                count++
                console.log(count)
                progressCount.textContent = `${count} / 5 completed`
                
    
                listsAccordion.forEach((listAccordion, index) => {
                    if(index == 0) {
                        emptyCheckbox.parentElement.parentElement.parentElement.classList.add("active")
                    }

                    listsAccordion.forEach(list => {
                        if(list !== listAccordion) {
                            list.classList.remove("active");
                        }
                    })

                    if(listAccordion.classList.contains("active")) {
                        return
                    } else {
                        emptyCheckbox.parentElement.parentElement.parentElement.classList.add("active")
                        
                    }
                })

                
            }, 500);
            
        }
    })
})

checkedCheckboxes.forEach(checkedCheckbox => {
    checkedCheckbox.addEventListener("click", function(event) {
        // console.log(event)
        if(event.target.className == "checkbox checked active") {
            event.target.classList.remove("active")
            event.target.previousElementSibling.style.display = "block"
    
            count-- 
            progressCount.textContent = `${count} / 5 completed`
            checkedCheckbox.parentElement.parentElement.parentElement.classList.remove("active")
            
        }
    })
})

