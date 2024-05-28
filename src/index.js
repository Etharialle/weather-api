import "./style.css";
import html from "./index.html";
import { getWeather } from "./api.js";
import { createApiKeyButton } from "./dom.js";

const enterKey = document.querySelector("#location");
enterKey.addEventListener("keypress", (e) =>{
    if (e.key === 'Enter') {
        console.log("enter key pressed");
    }
});
const fetchButton = document.querySelector("#fetch");
fetchButton.addEventListener("click", async (e) => {
    if (!localStorage.apiKey) {
        alert("Please Add API Key");
        return
    }
    const location = document.querySelector("#location").value;
    const currentWeather = await getWeather(location);
    console.log(currentWeather.current.condition.text);
});



createApiKeyButton();