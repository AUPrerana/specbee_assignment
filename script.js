document.addEventListener("DOMContentLoaded", function() {
    const speakerCards = document.querySelectorAll(".speaker-card");
    const popover = document.getElementById("speakerPopover");
    const closeBtn = document.querySelector(".close-btn");
    const speakerDetails = document.getElementById("speakerDetails");

    speakerCards.forEach(card => {
        card.addEventListener("click", () => {
            const speakerId = card.getAttribute("data-speaker-id");
            speakerDetails.innerText = `Details for Speaker ${speakerId}`; // Replace with actual details
            popover.classList.remove("hidden");
        });
    });

    closeBtn.addEventListener("click", () => {
        popover.classList.add("hidden");
    });
});

