const enterKey = document.querySelector("#city");
enterKey.addEventListener("keypress", (e) =>{
    console.log("enter key pressed");
});
const fetchButton = document.querySelector("#fetch");
fetchButton.addEventListener("click", async (e) => {
    if (!localStorage.apiKey) {
        alert("Please Add API Key");
        return
    }
    const city = document.querySelector("#city").value;
    const currentWeather = await getWeather(city);
    console.log(currentWeather.current.condition.text);
    if (currentWeather.current.condition.text === "Sunny") {
        createSnow();
    }
    e.preventDefault();
});

const mainTag = document.querySelector(".main");
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
    let currentWeather;
    console.log(apiUrl);
    try {
        const response = await fetch(apiUrl, {mode: 'cors'});
        const weather = await response.json();
        currentWeather = weather;
        console.log(weather);
        
    } catch (error) {
        console.error(`API Error: ${error.message}`);
    }
    return currentWeather;
}



//createSnow();
function createSnow() {
    const numberOfSnowflakes = 300;
    const maxSnowflaskeSize = 5;
    const maxSnowflakeSpeed = 1;
    const snowflakeColor = "#EDEDED"
    const snowflakes  = [];
    
    const canvas = document.createElement("canvas");
    canvas.style.position ="absolute";
    canvas.style.top = "0px";
    canvas.style.pointerEvents = 'none';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //canvas.style.zIndex = "5";
    document.body.appendChild(canvas);
    
    const context = canvas.getContext("2d");
    
    const createSnowflake = () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.floor(Math.random() * maxSnowflaskeSize + 1),
        color: snowflakeColor,
        speed: Math.random() * maxSnowflakeSpeed + 2,
        sway: Math.random() - 0.5,
    });
    
    const drawSnowflake = snowflake => {
        context.beginPath();
        context.arc(snowflake.x, snowflake.y, snowflake.radius, 0, 2 * Math.PI);
        context.fillStyle = snowflake.color;
        context.fill();
        context.closePath();
    };
    drawSnowflake(createSnowflake());
    
    const updateSnowflake = snowflake => {
        snowflake.y += snowflake.speed;
        snowflake.x += snowflake.sway;
        if (snowflake.y > canvas.height) {
            Object.assign(snowflake, createSnowflake());
        }
    };
    
    const animate = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    
        snowflakes.forEach(snowflake => {
            updateSnowflake(snowflake);
            drawSnowflake(snowflake);
        });
    
        requestAnimationFrame(animate);
    };
    
    for (let i=0; i < numberOfSnowflakes; i++) {
        snowflakes.push(createSnowflake());
    }
    
    animate();
    
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    window.addEventListener("scroll", () => {
        canvas.style.top = `${window.scrollY}px`;
    });
}
// Snow animation



