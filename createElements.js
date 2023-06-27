/**
 * 
 * @param {*} tagName 
 * @param {*} attributes {attribute: the_attribute}
 * @returns 
 */
export const createElement = (tagName, attributes = {}) => {
  const element = document.createElement(tagName);

  for (const attribute in attributes) {
    element[attribute] = attributes[attribute];
  }

  return element;
};

/**
 * 
 * @param {*} parent element to append to
 * @param {*} elements child elements
 */
export const appendElements = (parent, elements) => {
  elements.forEach((element) => parent.appendChild(element));
};