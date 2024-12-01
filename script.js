function swapImages() {
    const mobileImage = document.getElementById("mobileImage");
    const laptopImage = document.getElementById("laptopImage");
    
    // Define mobile breakpoint (768px or below)
    if (window.innerWidth <= 768) {
        // Show mobile image
        mobileImage.style.display = "block";
        mobileImage.style.width = "100%"
        laptopImage.style.display = "none";
        
    } else {
        // Show laptop image
        mobileImage.style.display = "none";
        laptopImage.style.display = "block";
    }
}
// document.getElementById("swapButton").addEventListener("click", () => {
//     const container = document.getElementById("swapContainer");
//     const text = document.getElementById("up");
//     const image = document.getElementById("down");

//     // Check current order and swap
//     if (window.innerWidth <= 768) {
//         container.appendChild(text); // Move text to the bottom
//     } else {
//         container.insertBefore(text, image); // Move text to the top
//     }
// });
function swapImages1() {
    const mobileImage = document.getElementById("mobileImage1");
    const laptopImage = document.getElementById("laptopImage1");
    
    // Define mobile breakpoint (768px or below)
    if (window.innerWidth <= 768) {
        // Show mobile image
        mobileImage.style.display = "block";
        laptopImage.style.display = "none";
    } else {
        // Show laptop image
        mobileImage.style.display = "none";
        laptopImage.style.display = "block";
    }
}
function swapImages2() {
    const mobileImage = document.getElementById("mobileImage2");
    const laptopImage = document.getElementById("laptopImage2");
    
    // Define mobile breakpoint (768px or below)
    if (window.innerWidth <= 768) {
        // Show mobile image
        mobileImage.style.display = "block";
        laptopImage.style.display = "none";
    } else {
        // Show laptop image
        mobileImage.style.display = "none";
        laptopImage.style.display = "block";
    }
}
function swapImages3() {
    const mobileImage = document.getElementById("mobileImage3");
    const laptopImage = document.getElementById("laptopImage3");
    
    // Define mobile breakpoint (768px or below)
    if (window.innerWidth <= 768) {
        // Show mobile image
        mobileImage.style.display = "block";
        laptopImage.style.display = "none";
    } else {
        // Show laptop image
        mobileImage.style.display = "none";
        laptopImage.style.display = "block";
    }
}
function swapImages4() {
    const mobileImage = document.getElementById("mobileImage4");
    const laptopImage = document.getElementById("laptopImage4");
    
    // Define mobile breakpoint (768px or below)
    if (window.innerWidth <= 768) {
        // Show mobile image
        mobileImage.style.display = "block";
        laptopImage.style.display = "none";
    } else {
        // Show laptop image
        mobileImage.style.display = "none";
        laptopImage.style.display = "block";
    }
}
function swapImages5() {
    const mobileImage = document.getElementById("mobileImage5");
    const laptopImage = document.getElementById("laptopImage5");
    
    // Define mobile breakpoint (768px or below)
    if (window.innerWidth <= 768) {
        // Show mobile image
        mobileImage.style.display = "block";
        laptopImage.style.display = "none";
    } else {
        // Show laptop image
        mobileImage.style.display = "none";
        laptopImage.style.display = "flex";
    }
}

// Call the function initially
swapImages();
swapImages1();
swapImages2();
swapImages3();
swapImages4();
swapImages5();

// Listen for window resize events
window.addEventListener("resize", swapImages);
window.addEventListener("resize", swapImages1);
window.addEventListener("resize", swapImages2);
window.addEventListener("resize", swapImages3);
window.addEventListener("resize", swapImages4);
window.addEventListener("resize", swapImages5);
