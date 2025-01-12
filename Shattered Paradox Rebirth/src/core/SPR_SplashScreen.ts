import { fadeIn, fadeOut, wait } from "../utils/SPR_Helpers.js";
import { SPR_CONSTANTS } from "../utils/SPR_Constants.js";

export function initializeSplashScreen(): void {
    console.log("initializeSplashScreen() called!");

    const splashScreen = document.getElementById("splash-screen");
    if (!splashScreen) {
        console.error("Splash screen element not found!");
        return;
    }

    // Assert that the element is always an HTMLElement
    const splashScreenElement = splashScreen as HTMLElement;

    async function playSplashSequence() {
        try {
            console.log("Splash Screen: Starting fade-in...");
            await fadeIn(splashScreenElement, SPR_CONSTANTS.SPLASH_FADE_DURATION);

            console.log("Splash Screen: Displaying...");
            await wait(SPR_CONSTANTS.SPLASH_DISPLAY_DURATION);

            console.log("Splash Screen: Starting fade-out...");
            await fadeOut(splashScreenElement, SPR_CONSTANTS.SPLASH_FADE_DURATION);

            console.log("Splash Screen: Redirecting to Main Menu...");
            window.location.href = "./index.html"; // Or dynamically load the next screen
        } catch (error) {
            console.error("Splash Screen Error:", error);
        }
    }

    playSplashSequence();
}
