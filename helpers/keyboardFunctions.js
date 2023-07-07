// Function to simulate tab navigation forward
export function simulateTabNavigation() {
    // Find the currently focused element
    const focusedElement = document.activeElement;
  
    // Check if the focused element is within the tasksSection
    if (tasksSection.contains(focusedElement)) {
      // Find the next focusable element within the tasksSection
      const nextElement = focusedElement.nextElementSibling;
      if (nextElement) {
        nextElement.focus();
      } else {
        // If no next element found, focus the first element in tasksSection
        const firstElement = tasksSection.querySelector('input, button');
        if (firstElement) {
          firstElement.focus();
        }
      }
    }
  }
  
// Function to simulate reverse tab navigation backward
export function simulateReverseTabNavigation() {
// Find the currently focused element
const focusedElement = document.activeElement;

// Check if the focused element is within the tasksSection
if (tasksSection.contains(focusedElement)) {
    // Find the previous focusable element within the tasksSection
    const previousElement = focusedElement.previousElementSibling;
    if (previousElement) {
    previousElement.focus();
    } else {
    // If no previous element found, focus the last element in tasksSection
    const lastElement = tasksSection.querySelector('input, button:last-child');
    if (lastElement) {
        lastElement.focus();
    }
    }
}
}