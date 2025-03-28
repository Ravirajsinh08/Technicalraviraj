document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll("input[name='pricing']");
    const options = document.querySelectorAll(".options");
    const pricingBoxes = document.querySelectorAll(".pricing-box");

    radios.forEach((radio, index) => {
        radio.addEventListener("change", function () {
            options.forEach((opt) => (opt.style.display = "none")); // Hide all options
            pricingBoxes.forEach((box) => box.classList.remove("active")); // Remove active class

            const selectedOption = document.getElementById(`options${radio.id.replace("unit", "")}`);
            if (selectedOption) {
                selectedOption.style.display = "block"; // Show selected option
                pricingBoxes[index].classList.add("active"); // Add active class to selected box
            }
        });
    });
}); 
