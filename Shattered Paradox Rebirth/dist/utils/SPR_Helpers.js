// SPR_Helpers.ts - Updated Helper Functions
// Fade-in animation
export function fadeIn(element, duration) {
    return new Promise((resolve) => {
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = "1";
        setTimeout(() => resolve(), duration);
    });
}
// Fade-out animation
export function fadeOut(element, duration) {
    return new Promise((resolve) => {
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = "0";
        setTimeout(() => resolve(), duration);
    });
}
// Wait function
export function wait(duration) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), duration);
    });
}
// Debug Log for Module Loading
console.log('Helpers Module Loaded');
