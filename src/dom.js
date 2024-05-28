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