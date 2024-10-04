function goBack() {
    // Placeholder for back navigation
    alert("Back button clicked!");
}

function filterTournaments() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById("tournamentList");
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0];
        const txtValue = a.textContent || a.innerText;

        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function searchTournament() {
    const input = document.getElementById('search').value;
    alert("Searching for: " + input); // Placeholder for search action
}