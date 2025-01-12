// SPR_Helpers.ts - Updated Helper Functions

// Fade-in animation
export function fadeIn(element: HTMLElement, duration: number): Promise<void> {
    return new Promise<void>((resolve) => {
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = "1";
        setTimeout(() => resolve(), duration);
    });
}

// Fade-out animation
export function fadeOut(element: HTMLElement, duration: number): Promise<void> {
    return new Promise<void>((resolve) => {
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = "0";
        setTimeout(() => resolve(), duration);
    });
}

// Wait function
export function wait(duration: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => resolve(), duration);
    });
}

// Debug Log for Module Loading
console.log('Helpers Module Loaded');
