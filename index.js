const fetchButton = document.querySelector("#fetch");
fetchButton.addEventListener("click", () => {
    if (!localStorage.apiKey) {
        alert("Please Add API Key");
        return
    }
    console.log(JSON.parse(localStorage.apiKey));
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

