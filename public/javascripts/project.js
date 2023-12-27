const url =  window.location.href;
const projectID = url.split("#")[1];

console.log(projectID);

window.onload = function(){
    const servicesList = './images/projects.json'
        fetch(servicesList).then(response => response.json()).then(data => {
            console.log(data);
            data.projects.forEach(project => {
                if(project.id == projectID){
                    document.querySelector('.project-title').innerText = project.title;
                    document.querySelector('.project-description').innerText = project.description;
                    project.before.forEach(image => {
                        document.querySelector('.before').innerHTML += `<img src="${image.src}" alt="${image.alt}" class="project-image">`
                    })
                    project.after.forEach(image => {
                        document.querySelector('.after').innerHTML += `<img src="${image.src}" alt="${image.alt}" class="project-image">`
                    })
                }
        })
    })
}