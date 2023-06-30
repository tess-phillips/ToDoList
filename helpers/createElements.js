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
  console.log("attributes ", attributes);
  // let count = 1;
  for (const attribute in attributes) {
    console.log("attribute: " + attribute);
    element[attribute] = attributes[attribute];
    // count++;
  }
  return element;
};
