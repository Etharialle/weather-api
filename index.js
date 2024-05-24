const fetchButton = document.querySelector("#submit");
fetchButton.addEventListener("click", (e) => {
    if (!localStorage.apiKey) {
        alert("Please Add API Key");
        return
    }
    const city = document.querySelector("#city").value;
    getWeather(city);
    e.preventDefault();
});

const mainTag = document.querySelector("main");
//if (!localStorage.apiKey) {}
const apiKeyButton = document.createElement("button");
apiKeyButton.textContent = "Add API Key";
apiKeyButton.id = "api-key-button";
apiKeyButton.addEventListener("click", () => {
    const apiKey = prompt("Enter API Key:");
    localStorage.apiKey = JSON.stringify(apiKey);
});
mainTag.appendChild(apiKeyButton);

async function getWeather(city) {
    const apiKey = JSON.parse(localStorage.apiKey);
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    console.log(apiUrl);
    try {
        const response = await fetch(apiUrl, {mode: 'cors'});
        const weather = await response.json();
        console.log(weather);
    } catch (error) {
        console.error(`API Error: ${error.message}`);
    }
}