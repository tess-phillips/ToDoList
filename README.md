# ToDoList

This project is a simple web application that allows users to create and manage their to-do list. It provides basic functionalities such as adding tasks, marking tasks as completed, editing tasks, and sorting tasks by date or completion status.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Learning Outcomes](#outcomes)
- [Credits](#credits)
- [License](#license)

## User Story <a name="user-story"></a>

As a busy person I want to:

- Add tasks to a list so that I can keep track of them
- Check tasks off my list to see what I've done
- Delete tasks from the list if I don't need to do them anymore
- Use all the features of the app without relying on a mouse.

## Acceptance Criteria <a name="criteria"></a>

- A working to-do list
- Tests for (at least) each user story
- A responsive, mobile-first design
- Ensure your app is accessible to as many different users as possible

## Installation <a name="installatoin"></a>

To run it locally:

1. Clone the repository: `git clone https://github.com/tess-phillips/ToDoList.git`
2. Navigate to the project directory: `cd ToDoList`
3. Open the index.html file in a web browser
4. Use the application to add, track, complete, and delete tasks in the to-do list
5. Review the automated tests in the test.js file to ensure the functionality is covered

## Usage <a name="usage"></a>

The **To Do List** project is built using modular JavaScript files that work together to provide a comprehensive task management solution. The project structure promotes code organization, reusability, and testability.

### File Structure Overview:

- **createElements.js**: this file handles the creation of new tasks by cloning an HTML template and assigning unique IDs and attributes
- **editDelete.js**: contains functions for editing and deleting tasks, allowing users to modify task content and mark tasks as completed
- **keyboardFunctions**.js: provides utility functions for simulating keyboard navigation, enhancing accessibility for motor-impaired users
- **sort.js** and **sortCompleted.js**: these files offer functions for sorting tasks by date and completion status, respectively
- **testHelpers.js**: contains helpful functions for writing automated tests, ensuring the reliability of the application's functionality
- **main.js**: serves as the entry point, handling user interactions, such as adding tasks, sorting, and saving edits
- **test.js**: includes automated tests covering the main user stories and additional functionality

The modular design enables independent development and maintenance of each module, enhancing code readability and facilitating future enhancements. The project also includes a suite of automated tests to validate the application's behavior and ensure its robustness.

## Learning Outcomes <a name="outcomes"></a>

### Testing

- Check that passing a given input into our tests returns the expected output
- Write tests to mimic the behaviour of a user performing different actions

### JavaScript

- Write testable, modular functions
- Write functions that add, remove or modify DOM nodes
- Apply event listeners to HTML form elements
- Use scope to control what variables are accessible inside functions and blocks

### CSS

- Use CSS grid to create complex layouts
- Use CSS grid to make layouts that adapt to the viewport size

## Credits <a name="credits"></a>

This project was created and maintained by [Tess Phillips](https://github.com/tess-phillips) and [Tommaso Orlandi](https://github.com/benante). We both contributed equally to the development of this project.
<a name=""></a>

## License <a name="license"></a>

The ToDo List website is open source and released under the [MIT License](https://mit-license.org/). Feel free to use, modify, and distribute the code as needed.
