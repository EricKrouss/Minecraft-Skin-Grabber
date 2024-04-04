export function clearPreviousResults() {
    results.innerText = "";
    document.getElementById("skin").src = "";
    document.getElementById("cape").src = "";
    document.getElementById("cape").style.display = ""; // Ensure cape image element is visible for new searches
}