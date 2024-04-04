export function fetchUserProfile(username) {
    var userURL = `https://api.ashcon.app/mojang/v2/user/${username}`;
    fetch(userURL)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404 || response.status === 400) {
                    results.innerText = "Username not found";
                    results.style.color = "red";
                }
                return null;
            }
            return response.json();
        })
        .then(data => {
            if (!data) return;
            results.innerText = username;
            results.style.color = "white";

            var skinImg = document.getElementById("skin");
            skinImg.src = data.textures.skin.url;

            if (data.textures.cape) {
                var capeImg = document.getElementById("cape");
                capeImg.src = data.textures.cape.url;
                capeImg.style.display = ""; // Make sure the cape image is visible
            } else {
                document.getElementById("cape").style.display = "none";
            }
        });
}