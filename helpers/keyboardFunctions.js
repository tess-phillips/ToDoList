export function simulateReverseTabNavigation(currentIndex,elementsArray) {  
    // Calculate the previous element index in a circular manner
    const previousIndex = (currentIndex - 1 + elementsArray.length) % elementsArray.length;
    // Focus the previous element
    elementsArray[previousIndex].focus();
  }
  
export function simulateTabNavigation(currentIndex,elementsArray) {
    // Calculate the next element index in a circular manner
    const nextIndex = (currentIndex + 1) % elementsArray.length;
    // Focus the next element
    elementsArray[nextIndex].focus();
  }