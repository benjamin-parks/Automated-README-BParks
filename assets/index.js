// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown")
// const badge = require("./utils/renderLicenseBadge");
// const link = require("./utils/renderLicenseLink");
// const renderlicense = require("./utils/renderLicenseSection");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of your repository?",
        name: "repoName"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "repoDesc"
    },
    {
        type: "input",
        message: "How do you install this program?",
        name: "repoInstall"
    },
    {
        type: "input",
        message: "How do I use this program?",
        name: "repoUsage"
    },
    {
        type: "list",
        message: "What license is used for this repo?",
        name: "repoLicense",
        choices: [
            "MIT", 
            "Mozilla Public License 2.0",
            "Apache 2.0", 
            "GNU General Public 3.0",
            "BSD-2 Clause Simplified",
            "BSD-3 Clause 'new or revised'",
            "Boost Software License",
            "Creative Commons Zero 1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License 3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License V2.1",
            "The Unlicense",
            "None"
        ] 
    },
    {
        type: "input",
        message: "Has anyone else contributed to this?",
        name: "repoContributions"
    },
    {
        type: "input",
        message: "Does this repo need additional testing?",
        name: "repoTests"
    },
    {
        type: "input",
        message: "Questions about repo?",
        name: "repoQuestions"
    }
    
];

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to the README Generator! Answer the questions for an automated README file!")
    // TODO: Create a function to write README file
    inquirer.prompt(questions).then(function(data){
        const readMeContent = markdown.generateMarkdown(data);
        fs.writeFile("README.md", readMeContent, function(err){
            console.log(err ? err : "Readme written successfully")
        });
    });
}


// Function call to initialize app
init();
