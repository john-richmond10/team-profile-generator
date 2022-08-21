const generateTeam = team => {
    const generateManager = manager => {
        return `
<div class="card employeeCard">
    <div class="card-header bg-dark text-danger">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getID()}</li>
            <li class="list-group-item>Email: ${manager.getEmail()}</li>
            <li class="list-group-item>Office Number: ${manager.getOfficNumber()}</li>
        </ul>
    </div>
</div>
        `;
    };
     const generateEngineer = engineer => {
        return `
<div class="card employeeCard">
    <div class="card-header bg-success text-white">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getID()}</li>
            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item">GitHub Profile: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
        </ul>
    </div>
</div>
        `;
     };
     const generateIntern = intern => {
        return `
<div class="card employeeCard">
    <div class="card-header bg-warning text-white">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getID()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
     };

     const html = [];

     html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join('')
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join('')
    );

    return html.join('');
};

module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Our Work Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-dark">
                <h1 class="text-center text-danger">Our Work Team!</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};


