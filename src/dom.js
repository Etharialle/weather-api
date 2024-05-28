import weatherConditions from "./weatherConditions.json";
const conditionIcons = importAll(require.context('./assets/weather/64x64', true, /\.png$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

export function createApiKeyButton() {
    const mainTag = document.querySelector(".main");
    const apiKeyButton = document.createElement("button");
    apiKeyButton.textContent = "Add API Key";
    apiKeyButton.id = "api-key-button";
    apiKeyButton.addEventListener("click", () => {
        const apiKey = prompt("Enter API Key:");
        localStorage.apiKey = JSON.stringify(apiKey);
    });
    mainTag.appendChild(apiKeyButton);
}

export function displayWeather(currentWeather) {
    const mainTag = document.querySelector(".main");
    const bgColorTag = document.querySelector(".bg-color");
    if (mainTag.lastChild.id !== "api-key-button") {
        mainTag.removeChild(mainTag.lastChild);
    }
    const responseDiv = document.createElement("div");
    const currentWeatherDiv = document.createElement("div");
    const headingNow = document.createElement("h3");
    const leftWeather = document.createElement("div");
    const leftUpper = document.createElement("div");
    const leftLower = document.createElement("div");
    const rightWeather = document.createElement("div");
    const currentTemperature = document.createElement("p");
    const conditionImage = document.createElement("img");
    const highTemperature = document.createElement("p");
    const lowTemperature = document.createElement("p");
    const conditionText = document.createElement("div");
    const feelsLike = document.createElement("div");

    responseDiv.className = "response";
    currentWeatherDiv.className = "weather";
    headingNow.textContent = "Now";
    currentTemperature.textContent = `${Math.round(currentWeather.current.temp_f)} °F`;
    currentTemperature.className = "current";
    let timeOfDay;
    if (currentWeather.current.is_day === 1) {
        timeOfDay = "day";
    } else {
        timeOfDay = "night";
    }
    const conditionCode = currentWeather.current.condition.code;
    const codeArrayPosition = weatherConditions.findIndex(p => p.code === conditionCode);
    const conditionIcon = weatherConditions[codeArrayPosition].icon;
    conditionImage.src = conditionIcons[`${timeOfDay}/${conditionIcon}.png`];

    //highTemperature.textContent = `${Math.round(currentWeather.current.temp_f)} °F`;
    conditionText.textContent = currentWeather.current.condition.text;
    feelsLike.textContent = `${Math.round(currentWeather.current.feelslike_f)} °F`;
    

    leftLower.appendChild(highTemperature);
    leftLower.appendChild(lowTemperature);
    leftUpper.appendChild(currentTemperature);
    leftUpper.appendChild(conditionImage);
    leftWeather.appendChild(leftUpper);
    leftWeather.appendChild(leftLower);
    rightWeather.appendChild(conditionText);
    rightWeather.appendChild(feelsLike);
    currentWeatherDiv.appendChild(leftWeather);
    currentWeatherDiv.appendChild(rightWeather);
    responseDiv.appendChild(headingNow);
    responseDiv.appendChild(currentWeatherDiv);
    mainTag.appendChild(responseDiv);

    if (currentWeather.current.temp_f < 32) {
        mainTag.style.backgroundColor = "purple";
        bgColorTag.style.backgroundColor = "purple";
    } else if (currentWeather.current.temp_f >= 32 && currentWeather.current.temp_f < 60) {
        mainTag.style.backgroundColor = "rgb(20, 100, 195)";
        bgColorTag.style.backgroundColor = "rgb(20, 100, 195)";
    } else if (currentWeather.current.temp_f >= 60 && currentWeather.current.temp_f < 80) {
        mainTag.style.backgroundColor = "rgb(45, 196, 1)";
        bgColorTag.style.backgroundColor = "rgb(45, 196, 1)";
    } else if (currentWeather.current.temp_f >= 80 && currentWeather.current.temp_f < 90) {
        mainTag.style.backgroundColor = "rgb(255, 240, 0)";
        bgColorTag.style.backgroundColor = "rgb(255, 240, 0)";
    } else {
        mainTag.style.backgroundColor = "rgb(253, 160, 0)";
        bgColorTag.style.backgroundColor = "rgb(253, 160, 0)";
    }
    
}