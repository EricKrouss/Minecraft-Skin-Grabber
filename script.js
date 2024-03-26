/**
 * Event listener that triggers when the DOM content is loaded.
 * It retrieves the user profile data and displays the user's skin and cape images.
 */
document.addEventListener("DOMContentLoaded", function () {
    // Get the Search Button and Search Bar elements by their IDs
    var searchButton = document.getElementById("search-button");
    var searchBar = document.getElementById("search-bar");

    // Add a click event listener to the button
        function retrieveUserProfile(){
        //clears previous rsults
        let results = document.getElementById("results");
        document.getElementById("skin").src = "";
        document.getElementById("cape").src = "";
        var username = searchBar.value.trim();
        var userURL = `https://api.ashcon.app/mojang/v2/user/${username}`;

        // Use the Fetch API to retrieve the user profile data.
        fetch(userURL)
            .then((response) => {
                // Handle the response from the API
                if (!response.ok) {
                    // If the response is not successful
                    if (response.status === 404 || response.status === 400) {
                        // If the username is not found or there is a bad request
                        results.innerText = "Username not found"; // Display an error message in the results element
                        results.style.color = "red"; // Set the text color of the results element to red
                        document.getElementById("skin").src = ""; // Clear the source of the skin image
                        document.getElementById("cape").src = ""; // Clear the source of the cape image
                    }
                    return null; // Return null to indicate that there is no data
                }
                return response.json(); // Parse the response as JSON
            })
            .then((data) => {
                // Handle the data from the API
                if (!data) return;
                results.innerText = `${username}`; // Display the username in the results element
                results.style.color = "white"; // Set the text color of the results element to white
                var skinURL = data.textures.skin.url; // Get the URL of the user's skin
                if (data.textures.cape) {
                    var capeURL = data.textures.cape.url; // Get the URL of the user's cape
                    var capeImg = document.getElementById("cape"); // Get the cape image element
                    capeImg.src = capeURL; // Set the source of the cape image to the cape URL
                } else {
                    document.getElementById("cape").style.display = "none"; // Hide the cape image element if the user doesn't have a cape
                }
                console.log(skinURL); // For testing purposes, log the skin URL to the console
                console.log(capeURL); // For testing purposes, log the cape URL to the console

                var skinImg = document.getElementById("skin"); // Get the skin image element

                skinImg.src = skinURL; // Set the source of the skin image to the skin URL
                capeImg.src = capeURL; // Set the source of the cape image to the cape URL
            });
    } // Add closing parenthesis and semicolon here

    searchButton.addEventListener("click", retrieveUserProfile);

    searchBar.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            retrieveUserProfile();
        }

    });
}); // Add closing parenthesis here
