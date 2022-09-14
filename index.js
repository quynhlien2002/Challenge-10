// const inquirer = import('inquirer');
import inquirer from 'inquirer';
import fs from 'fs';


const promptUser = () => {
    return inquirer.prompt([
        {
            type:'list',
            name: 'roleM', 
            message: "What is you role?",
            choices: ["Manager"],
        },
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
            type:'list',
            name: 'roleE', 
            message: "What is you role?",
            choices: ["Engineer"],
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
            name: 'github', 
            message: 'What is your Github name?',
        },
        {
            type:'list',
            name: 'roleEm', 
            message: "What is you role?",
            choices: ["Employee"],
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
            type:'list',
            name: 'roleI', 
            message: "What is you role?",
            choices: ["Intern"],
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
    <link rel="stylesheet" href='./dist/style.css'>
    <script src="https://kit.fontawesome.com/751029ca13.js" crossorigin="anonymous"></script>
    <title>My Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid head-background">
  <div class="container">
    <h1 class="display-4 header">My Team    <i class="fa-solid fa-people-group"></i></h1>
  </div>
</div>

<div class="row row-cols-1 row-cols-md-2">
    <div class="col mb-4">
      <div class="card box">
        <div class="card-body">
          <h5 class="card-title title"><u>${roleM}</u>  <i class="fa-solid fa-house"></i></h5>
          <p class="card-text"> <b>Name:</b> ${nameM}</p>
          <p class="card-text"> <b>Id Number:</b> ${idM}</p>
          <p class="card-text"><a href = "mailto: ${emailM}">${emailM}</a></p>
          <p class="card-text"><b>Office Number:</b> ${office}</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card box">
        <div class="card-body">
          <h5 class="card-title title"><u>${roleE}</u>    <i class="fa-solid fa-display"></i></h5>
          <p class="card-text"><b>Name:</b> ${nameE}</p>
          <p class="card-text"><b>Id Number:</b> ${idE}</p>
          <p class="card-text"><a href = "mailto: ${emailE}">${emailE}</a></p>
          <p class="card-text"><b>Github:</b><a href ="https://github.com/${github}">${github}</a></p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card box">
        <div class="card-body">
          <h5 class="card-title title"><u>${roleEm}</u>    <i class="fa-solid fa-user"></i></h5>
          <p class="card-text"><b>Name:</b> ${nameEm}</p>
          <p class="card-text"><b>Id Number:</b> ${idEm}</p>
          <p class="card-text"><a href = "mailto: ${emailEm}">${emailEm}</a></p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card box">
        <div class="card-body">
          <h5 class="card-title title"><u>${roleI}</u>    <i class="fa-solid fa-graduation-cap"></i></h5>
          <p class="card-text"><b>Name:</b> ${nameI}</p>
          <p class="card-text"><b>Id Number:</b> ${idI}</p>
          <p class="card-text"><a href = "mailto: ${emailI}">${emailI}</a></p>
          <p class="card-text"><b>Current School:</b> ${school}</p>
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
.then(() => console.log("======== Success, you have created your team ========"))
.catch((err) => console.error(err));
}

init();