import { clearPreviousResults } from "./clearResults.js";
import { fetchUserProfile } from "./fetchProfile.js";
export function retrieveUserProfile() {
    var searchButton = document.getElementById("search-button");
    var searchBar = document.getElementById("search-bar");
    var results = document.getElementById("results");

    clearPreviousResults();
    var username = searchBar.value.trim();
    if (username) {
        fetchUserProfile(username);
    }
}