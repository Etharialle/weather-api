import "./style.css";
import html from "./index.html";
import { getWeather } from "./api.js";
import { createApiKeyButton, displayWeather } from "./dom.js";


let currentWeather;

const enterKey = document.querySelector("#location");
enterKey.addEventListener("keypress", async (e) =>{
    if (e.key === 'Enter') {
        if (!localStorage.apiKey) {
            alert("Please Add API Key");
            return
        }
        const location = document.querySelector("#location").value;
        currentWeather = await getWeather(location);
        await console.log(currentWeather);
        await displayWeather(currentWeather);
    }
});
const fetchButton = document.querySelector("#fetch");
fetchButton.addEventListener("click", async (e) => {
    if (!localStorage.apiKey) {
        alert("Please Add API Key");
        return
    }
    const location = document.querySelector("#location").value;
    currentWeather = await getWeather(location);
    await console.log(currentWeather);
    await displayWeather(currentWeather);
    
});

createApiKeyButton();