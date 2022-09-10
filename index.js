const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'nameM', 
            message: "What is your name?",
        },
        {
            type: 'input', 
            name: 'idM', 
            message: "What is your id?",
        },
        {
            type: 'input', 
            name: 'emailM', 
            message: "What is your email?", 
        },
        {
            type: 'input', 
            name: 'office',
            message: 'What is your office number?',
        },
        {
            type:'input',
            name: 'roleM', 
            message: "Manager",
        },
        {
            type: 'input',
            name: 'nameE', 
            message: "What is your name?",
        },
        {
            type: 'input', 
            name: 'idE', 
            message: "What is your id?",
        },
        {
            type: 'input', 
            name: 'emailE', 
            message: "What is your email?", 
        },
        {
            type: 'input', 
            name: 'githubE', 
            message: 'What is your Github name?',
        },
        {
            type:'input',
            name: 'roleE', 
            message: "Engineer",
        },
        {
            type: 'input',
            name: 'nameEm', 
            message: "What is your name?",
        },
        {
            type: 'input', 
            name: 'idEm', 
            message: "What is your id?",
        },
        {
            type: 'input', 
            name: 'emailEm', 
            message: "What is your email?", 
        },
        {
            type:'input',
            name: 'roleEm', 
            message: "Employee",
        },
        {
            type: 'input',
            name: 'nameI', 
            message: "What is your name?",
        },
        {
            type: 'input', 
            name: 'idI', 
            message: "What is your id?",
        },
        {
            type: 'input', 
            name: 'emailI', 
            message: "What is your email?", 
        },
        {
            type:'input',
            name: 'roleI', 
            message: "Intern",
        },
        {
            type: 'input', 
            name: 'school', 
            message: 'What is your school?',
        },
    ])
}

const generateHTML = ({ nameM, idM, emailM, office, roleM, nameE, idE, emailE, github, roleE, nameEm, idEm, emailEm, roleEm, nameI, idI, emailI, school, roleI }) =>

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset = "UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>My Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My Team</h1>
  </div>
</div>

<div class="row row-cols-1 row-cols-md-2">
    <div class="col mb-4">
      <div class="card card-">
        <div class="card-body">
          <h5 class="card-title">${roleM}</h5>
          <p class="card-text">${nameM}</p>
          <p class="card-text">${idM}</p>
          <p class="card-text">${emailM}</p>
          <p class="card-text">${office}</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${roleE}</h5>
          <p class="card-text">${nameE}</p>
          <p class="card-text">${idE}</p>
          <p class="card-text">${emailE}</p>
          <p class="card-text">${github}</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${roleEm}</h5>
          <p class="card-text">${nameEm}</p>
          <p class="card-text">${idEm}</p>
          <p class="card-text">${emailEm}</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${roleI}</h5>
          <p class="card-text">${nameI}</p>
          <p class="card-text">${idI}</p>
          <p class="card-text">${emailI}</p>
          <p class="card-text">${school}</p>
        </div>
      </div>
    </div>
  </div>


</body>
</html>

`

const init = () => {
promptUser()
.then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
.then(() => console.log("Success, you have created your team"))
.catch((err) => console.error(err));
}

init();