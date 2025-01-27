const projects = [
  { name: 'Project Alpha', description: 'A groundbreaking AI project.' },
  { name: 'Project Beta', description: 'An innovative web development tool.' },
  { name: 'Project Gamma', description: 'A powerful data visualization library.' },
];

function addProject() {
  const projectList = document.getElementById('project-list');
  const randomIndex = Math.floor(Math.random() * projects.length);
  const project = projects[randomIndex];

  const projectDiv = document.createElement('div');
  projectDiv.className = 'project';
  projectDiv.innerHTML = `
    <h2>${project.name}</h2>
    <p>${project.description}</p>
  `;

  projectList.appendChild(projectDiv);
}
