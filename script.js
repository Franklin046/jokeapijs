const jokeApiUrl = "https://official-joke-api.appspot.com/random_joke";

document.getElementById("get-joke").addEventListener("click", () => {
  fetch(jokeApiUrl)
    .then((response) => response.json())
    .then((data) => {
      const jokeDiv = document.getElementById("joke");
      jokeDiv.innerHTML = `
                <p>Setup: ${data.setup}</p>
                <p>Punchline: ${data.punchline}</p>
            `;
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
    });
});
