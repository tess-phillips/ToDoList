/**
 * creates DOM elements 
 * e.g. createElement('p',{id: "para3", innerHTML: "slay"})
 *  ^ creates: <p id="para3">slay</p>
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