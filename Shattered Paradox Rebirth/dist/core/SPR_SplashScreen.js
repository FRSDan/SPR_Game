var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fadeIn, fadeOut, wait } from "../utils/SPR_Helpers.js";
import { SPR_CONSTANTS } from "../utils/SPR_Constants.js";
export function initializeSplashScreen() {
    console.log("initializeSplashScreen() called!");
    const splashScreen = document.getElementById("splash-screen");
    if (!splashScreen) {
        console.error("Splash screen element not found!");
        return;
    }
    // Assert that the element is always an HTMLElement
    const splashScreenElement = splashScreen;
    function playSplashSequence() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Splash Screen: Starting fade-in...");
                yield fadeIn(splashScreenElement, SPR_CONSTANTS.SPLASH_FADE_DURATION);
                console.log("Splash Screen: Displaying...");
                yield wait(SPR_CONSTANTS.SPLASH_DISPLAY_DURATION);
                console.log("Splash Screen: Starting fade-out...");
                yield fadeOut(splashScreenElement, SPR_CONSTANTS.SPLASH_FADE_DURATION);
                console.log("Splash Screen: Redirecting to Main Menu...");
                window.location.href = "./index.html"; // Or dynamically load the next screen
            }
            catch (error) {
                console.error("Splash Screen Error:", error);
            }
        });
    }
    playSplashSequence();
}
