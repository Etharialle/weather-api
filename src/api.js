export async function getWeather(location) {
    const apiKey = JSON.parse(localStorage.apiKey);
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    let currentWeather;
    try {
        const response = await fetch(apiUrl, {mode: 'cors'});
        currentWeather = await response.json();
    } catch (error) {
        console.error(`API Error: ${error.message}`);
    }
    return currentWeather;
}