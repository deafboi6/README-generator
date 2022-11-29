// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
        type: "input",
        name: "Title",
        message: "What is the title of your README?"
    },
    {
        type: "input",
        name: "Description",
        message: "Describe your project"
    },
    {
        type: "input",
        name: "TableOfContents",
        message: "List your Table of Contents"
    },
    {
        type: "input",
        name: "Installation",
        message: "Describe how to install your project"
    },
    {
        type: "input",
        name: "Usage",
        message: "Explain how your project would be used by the user"
    },
    {
        type: "list",
        name: "License",
        message: "What license(s) do you have on your project?",
        choices: [
            "MIT License",
            "Apache License 2.0",
            "Mozilla Public License 2.0",
            "The Unilicense",
            "GNU General Public License v3.0"
        ]
    },
    {
        type: "input",
        name: "Contributions",
        message: "Please name your collaborators"
    },
    {
        type: "input",
        name: "Tests",
        message: "Provide a link to your test, if any"
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email address"
    },
    {
        type: "input",
        name: "github",
        message: "Provide your GitHub username"
    }
])
.then((answers) => {
    const madeReadMe = generateReadMe(answers);

    fs.writeFile("README.md", madeReadMe, (err) =>
        err ? console.log(err) : console.log("README created!")
    );
});

// TODO: Create a function to write README file

//I want to add process.argv for table of contents and contributors
const generateReadMe = ({Title, Description, TableOfContents, Installation, Usage, License, Contributions, Tests, email, github}) =>
    `# ${Title}

## Description
${Description}

## Table of Contents
${TableOfContents}

## Installation
${Installation}

## Usage
${Usage}

## License
${License}

## Contributions
${Contributions}

## Tests
${Tests}

## Questions
You can reach me at ${email} or https://www.github.com/${github} with any questions!`;

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
