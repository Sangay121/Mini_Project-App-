// script.js

// Sample tournaments array
const tournaments = [
    "Football Tournament",
    "Basketball Tournament",
    "Volleyball Tournament",
    "Badminton Tournament",
    "Table Tennis Tournament"
];

// This function can be called on input to filter tournaments
function filterTournaments() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const gridItems = document.querySelectorAll(".grid-item");
    
    gridItems.forEach((item, index) => {
        const tournamentName = tournaments[index].toLowerCase();
        if (tournamentName.includes(searchValue)) {
            item.style.display = "block"; // Show matched item
        } else {
            item.style.display = "none"; // Hide non-matched item
        }
    });
}

// This function can be called when the Enter button is clicked
function searchTournament() {
    const searchValue = document.getElementById("search").value;
    alert(`You searched for: ${searchValue}`);
}