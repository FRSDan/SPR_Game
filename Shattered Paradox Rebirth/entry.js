console.log("Entry Script Loaded!");

// Always ensure the splash screen plays on reload
console.log("Splash screen will always play on reload.");

// Clear session storage to ensure splash screen plays every time
sessionStorage.clear();

// Dynamically load the splash screen script
const splashScript = document.createElement("script");
splashScript.type = "module";
splashScript.src = "./dist/core/SPR_SplashScreen.js";
document.body.appendChild(splashScript);

splashScript.onload = () => {
    console.log("Splash Screen Script Loaded!");

    // Wait for the DOM elements to be ready
    const waitForElement = (selector, callback, retries = 10, delay = 100) => {
        const element = document.querySelector(selector);
        if (element) {
            callback(element);
        } else if (retries > 0) {
            setTimeout(() => waitForElement(selector, callback, retries - 1, delay), delay);
        } else {
            console.error(`Element not found: ${selector}`);
        }
    };

    // Show the splash screen and add skip functionality
    waitForElement("#splash-screen", (splashScreen) => {
        splashScreen.style.display = "block";
        splashScreen.style.transition = "opacity 5s ease-in-out"; // Add transition
        splashScreen.style.opacity = "1"; // Start fade-in

        // Animate progress bar
        waitForElement("#skip-progress", (skipProgress) => {
            console.log("Animating skip progress bar...");
            skipProgress.style.transition = "width 5000ms linear";
            skipProgress.style.width = "100%";
        });

        // Show skip box and add event listeners
        waitForElement("#skip-box", (skipBox) => {
            skipBox.style.display = "block";

            // Skip on button click
            skipBox.addEventListener("click", () => {
                console.log("Splash screen skipped by user.");
                splashScreen.style.opacity = "0"; // Start fade-out
                setTimeout(() => {
                    splashScreen.style.display = "none"; // Hide after fade-out
                    console.log("Splash screen: Hidden. Proceeding to main menu...");
                    loadMainMenu(); // Proceed to main menu
                }, 5000); // Fade-out duration
            });

            // Skip on Escape key
            document.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    console.log("Splash screen skipped by user via Escape key.");
                    splashScreen.style.opacity = "0"; // Start fade-out
                    setTimeout(() => {
                        splashScreen.style.display = "none"; // Hide after fade-out
                        console.log("Splash screen: Hidden. Proceeding to main menu...");
                        loadMainMenu(); // Proceed to main menu
                    }, 5000); // Fade-out duration
                }
            });
        });

        // Fade out after display duration
        setTimeout(() => {
            console.log("Splash screen: Starting fade-out...");
            splashScreen.style.opacity = "0"; // Start fade-out
            setTimeout(() => {
                splashScreen.style.display = "none"; // Hide after fade-out
                console.log("Splash screen: Hidden. Proceeding to main menu...");
                loadMainMenu(); // Proceed to main menu
            }, 5000); // Fade-out duration
        }, 5000); // Display duration
    });
};

// Dynamically load the main menu script after the splash screen
function loadMainMenu() {
    console.log("Loading main menu...");
    const mainMenuScript = document.createElement("script");
    mainMenuScript.type = "module";
    mainMenuScript.src = "./dist/core/SPR_MainMenu.js";
    document.body.appendChild(mainMenuScript);
}
