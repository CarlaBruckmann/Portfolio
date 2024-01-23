const projects = [
  {
    title: "Survey Form",
    text: "Form",
    description: "HTML, CSS e JavaScript",
    img: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp/blob/master/preview/home.png?raw=true",
    link_live: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp",
    link_code: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp",
  },
  {
    title: "hahahah",
    text: "ihu",
    description: "HTML, CSS e JavaScript",
    img: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp/blob/master/preview/home.png?raw=true",
    link_live: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp",
  },
  {
    title: "Survey Form",
    text: "Form",
    description: "HTML, CSS e JavaScript",
    img: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp/blob/master/preview/home.png?raw=true",
    link_code: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp",
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
    link_code: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp",
  },
];
const cardProjects = document.querySelector("#list-projects");
projects.forEach((project) => {
  console.log(project.title);
  if (project.link_code === undefined && project.link_live === undefined) {
    cardProjects.innerHTML += `
     <div class="item">
        <section class="project-tile d-flex-row">
            <h4>${project.title}</h4>
            <p>${project.text}</p>
        </section>
        <section class="wrapper-card d-flex-column">
             <div class="buttons-card d-flex-row">
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
  } else if (project.link_live === undefined) {
    cardProjects.innerHTML += `
    <div class="item">
    <section class="project-tile d-flex-row">
        <h4>${project.title}</h4>
        <p>${project.text}</p>
    </section>
    <section class="wrapper-card d-flex-column">
         <div class="buttons-card d-flex-row">
            <button role="button-link" class="btn btn-2">
                <a href=${project.link_code} target="_blank">View Code</a>
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
  } else if (project.link_code === undefined) {
    cardProjects.innerHTML += `
     <div class="item">
        <section class="project-tile d-flex-row">
            <h4>${project.title}</h4>
            <p>${project.text}</p>
        </section>
        <section class="wrapper-card d-flex-column">
             <div class="buttons-card d-flex-row">
                <button role="button-link" class="btn btn-1">
                    <a href=${project.link_live} target="_blank">View Live</a>
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
  } else {
    cardProjects.innerHTML += `
     <div class="item">
        <section class="project-tile d-flex-row">
            <h4>${project.title}</h4>
            <p>${project.text}</p>
        </section>
        <section class="wrapper-card d-flex-column">
             <div class="buttons-card d-flex-row">
                <button role="button-link" class="btn btn-1">
                    <a href=${project.link_live} target="_blank">View Live</a>
                </button>
                <button role="button-link" class="btn btn-2">
                    <a href=${project.link_code} target="_blank">View Code</a>
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
  }
});
