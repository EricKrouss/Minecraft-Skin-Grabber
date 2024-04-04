import { clearPreviousResults } from "./clearResults.js";
import { fetchUserProfile } from "./fetchProfile.js";
export function retrieveUserProfile() {
    var searchBar = document.getElementById("search-bar");

    clearPreviousResults();
    var username = searchBar.value.trim();
    if (username) {
        fetchUserProfile(username);
    }
}