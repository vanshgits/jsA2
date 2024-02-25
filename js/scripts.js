// Constants for query selector
const colorInput = document.getElementById('customNumber');
const customColourButton = document.querySelector('.custColor');
const randomColourButton = document.querySelector('.randColor');
const dropdownImage = document.getElementById('imageSelect');
const displayedImage = document.getElementById('images');
const studentID = document.getElementById('myStudentId');




// Function to change bg color from input
function changeCustomColor(){
    const userInput = parseInt(colorInput.value);
    changeColor(userInput);
}

// Function to change bg color from random no.
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    changeColor(randomNumber);
}


// Function to change color

function changeColor(Input) {
    

    // Update the displayed student ID with the user input
    studentID.textContent = "200556064";

    // Change the background color based on user input
    if (Input < 0 || Input > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (Input >= 0 && Input < 20) {
        document.body.style.backgroundColor = 'green';
    } else if (Input >= 20 && Input < 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (Input >= 40 && Input < 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (Input >= 60 && Input < 80) {
        document.body.style.backgroundColor = 'purple';
    } else {
        document.body.style.backgroundColor = 'yellow';
    }
}



// Array containing image data
const images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg","img/img4.jpg","img/img5.jpg"]; 

/// Function to generate options for select list
function addList() {
    // Clear existing options in the dropdown
    dropdownImage.innerHTML = '';

    // Create a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Please choose…';
    dropdownImage.appendChild(defaultOption);

    // Loop through the images array to create options
    images.forEach(source => {
        const option = document.createElement('option');
        option.value = source;
        option.textContent = source.split('/').pop(); 
        dropdownImage.appendChild(option);
    });
}
addList();



// Function to change image
function changeImage() {
    const selectedSrc = dropdownImage.value;
    displayedImage.src = selectedSrc;
}

// Event listeners for click events of buttons and select
customColourButton.addEventListener('click', changeCustomColor);
randomColourButton.addEventListener('click', changeRandomColor);
dropdownImage.addEventListener('change', changeImage);
