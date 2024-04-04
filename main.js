    import { clearPreviousResults } from "./clearResults.js";
    import { retrieveUserProfile } from "./retrieveUsername.js";
    export function getMinecraftProfile() {
        document.addEventListener("DOMContentLoaded", function () {
            var searchButton = document.getElementById("search-button");
            var searchBar = document.getElementById("search-bar");
            var results = document.getElementById("results");

            clearPreviousResults();
            
            searchButton.addEventListener("click", retrieveUserProfile);
            searchBar.addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                    retrieveUserProfile();
                }
            });
        });
    }
