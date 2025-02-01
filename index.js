
import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license is the project under?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('README file created successfully!');
    }
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadme(answers);
    writeToFile('README.md', readmeContent);
  });
}

function generateReadme(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Questions
If you have any questions, you can contact me at [${answers.email}](mailto:${answers.email}).
You can also find more of my work at [${answers.github}](https://github.com/${answers.github}).
  `;
}

// Function call to initialize app
init();
