const projects = [
  {
    title: "Survey Form",
    text: "Form",
    description: "HTML, CSS e JavaScript",
    img: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp/blob/master/preview/home.png?raw=true",
  },
  {
    title: "hahahah",
    text: "ihu",
    description: "HTML, CSS e JavaScript",
    img: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp/blob/master/preview/home.png?raw=true",
  },
  {
    title: "Survey Form",
    text: "Form",
    description: "HTML, CSS e JavaScript",
    img: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp/blob/master/preview/home.png?raw=true",
  },
  {
    title: "hahahah",
    text: "ihu",
    description: "HTML, CSS e JavaScript",
    img: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp/blob/master/preview/home.png?raw=true",
  },
  {
    title: "Survey Form",
    text: "Form",
    description: "HTML, CSS e JavaScript",
    img: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp/blob/master/preview/home.png?raw=true",
  },
  {
    title: "hahahah",
    text: "ihu",
    description: "HTML, CSS e JavaScript",
    img: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp/blob/master/preview/home.png?raw=true",
  },
];
const cardProjects = document.querySelector("#list-projects");
projects.forEach((project) => {
  console.log(project.title);
  cardProjects.innerHTML += `
     <div class="item">
        <section class="project-tile d-flex-row">
            <h4>${project.title}</h4>
            <p>${project.text}</p>
        </section>
        <section class="wrapper-card d-flex-column">
             <div class="buttons-card d-flex-row">
                <button role="button-link" class="btn btn-1">
                    <a href="https://carlabruckmann.github.io/survey-form-FreeCodeCamp/" target="_blank">View Live</a>
                </button>
                <button role="button-link" class="btn btn-2">
                    <a href="https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp" target="_blank">View Code</a>
                </button>
            </div>
            <div class="wrapper-description">
                <p class="project-description">Tecnologias: ${project.description}.</p>
            </div>
            <div class="img-card">
                <img src= ${project.img}
          alt="">
            </div>
        </section>
        </div>
    `;
});
