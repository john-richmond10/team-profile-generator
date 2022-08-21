const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const path = require('path');
const output = path.resolve(__dirname, 'output');
const outputpath = path.join(output, 'myteam.html');
const generateTeam = require('./utils/generateHTML');

teamArray = [];

const manager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of the Manager?'
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'What is the managers ID?'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the managers email?'
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the managers office number?'
            },
            {
                type: 'list',
                name: 'addTeamMember',
                message: 'More team members?',
                choices: ['Engineer', 'Intern', 'Done adding team members']
            }
        ])
        .then(answers => {
            const {managerName, managerID, managerEmail, managerOfficeNumber} = answers;

            const manager = new Manager (managerName, managerID, managerEmail, managerOfficeNumber);

            teamArray.push(manager)

            if(answers.addTeamMember === 'Engineer') {
                engineer();
            } else if(answers.addTeamMember === 'Intern') {
                intern();
            } else {
                renderPage();
            };
        });
};

const engineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of the engineer?'
            },
            {
                type: 'input',
                name: 'engineerID',
                message: 'What is the engineers ID?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the engineers email?'
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: 'What is the engineers GitHub username?'
            },
            {
                type: 'list',
                name: 'addTeamMember',
                message: 'Add team members?',
                choices: ['Engineer', 'Intern', 'Done adding team members']
            }
        ])
        .then(answers => {
            const {engineerName, engineerID, engineerEmail, engineerGitHub} = answers;

            const engineer = new Engineer (engineerName, engineerID, engineerEmail, engineerGitHub);

            teamArray.push(engineer);

            if(answers.addTeamMember === 'Engineer') {
                engineer();
            } else if(answers.addTeamMember === 'Intern') {
                intern();
            } else {
                renderPage();
            };
        });        
};

const intern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the interns name?'
            },
            {
                type: 'input',
                name: 'internID',
                message: 'What is the interns ID?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the interns email?'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What school does the intern attend?'
            },
            {
                type: 'list',
                name: 'addTeamMember',
                message: 'Add team members?',
                choices: ['Engineer', 'Intern', 'Done adding team members']
            }
        ])
        .then(answers => {
            const {internName, internID, internEmail, internSchool} = answers;

            const intern = new Intern (internName, internID, internEmail, internSchool);

            teamArray.push(intern)

            if(answers.addTeamMember === 'Engineer'){
                engineer();
            } else if(answers.addTeamMember === 'Intern'){
                intern();
            } else {
                renderPage();
            };
        });
};

function renderPage () {
    fs.writeFileSync(outputpath, generateTeam(teamArray), 'utf-8');

    console.log('Team Created!!');
};

manager();

