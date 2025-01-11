// Main Menu Initialization
document.addEventListener("DOMContentLoaded", () => {
    console.log("Main Menu Loaded");
    // Remove inline background setting to respect styles.css
    console.log("Main Menu background will use CSS rules.");
    // Create Menu Container
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    menuContainer.style.display = "flex";
    menuContainer.style.flexDirection = "column";
    menuContainer.style.alignItems = "center";
    menuContainer.style.justifyContent = "center";
    menuContainer.style.height = "100vh";
    menuContainer.style.gap = "20px";
    // Create Buttons
    const buttons = [
        { id: "new-game", text: "New Game", action: () => console.log("New Game Selected") },
        { id: "load-game", text: "Load Game", action: () => console.log("Load Game Selected") },
        { id: "settings", text: "Settings", action: () => console.log("Settings Selected") },
        { id: "exit", text: "Exit", action: () => console.log("Exit Selected") }
    ];
    buttons.forEach(buttonData => {
        const button = document.createElement("button");
        button.id = buttonData.id;
        button.innerText = buttonData.text;
        // Apply the new CSS class for styling
        button.classList.add("menu-button");
        // Button Click Action
        button.addEventListener("click", buttonData.action);
        // Append to container
        menuContainer.appendChild(button);
    });
    // Add Menu to Body
    document.body.appendChild(menuContainer);
});
export {};
