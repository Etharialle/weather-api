const fetchButton = document.querySelector("#fetch");
fetchButton.addEventListener("click", () => {
    if (!localStorage.apiKey) {
        alert("Please Add API Key");
        return
    }
})