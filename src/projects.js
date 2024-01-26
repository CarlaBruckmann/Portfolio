const projects = [
  {
    title: "Bruma",
    text: "Landing Page",
    description: "Wix",
    img: "assets/img/img-cards/BrigaderiaBruma.png",
    link_live: "https://www.brigaderiabruma.com.br/",
    link_code: "",
  },
  {
    title: "Carrot",
    text: "Landing Page",
    description: "HTML5, CSS3 and JavaScript",
    img: "assets/img/img-cards/CarrotFarm.png",
    link_live:
      "https://carlabruckmann.github.io/product-landing-page-FreeCodeCamp/",
    link_code:
      "https://github.com/CarlaBruckmann/product-landing-page-FreeCodeCamp",
  },
  {
    title: "Black Friday",
    text: "Landing Page",
    description: "HTML, CSS and JavaScript",
    img: "assets/img/img-cards/BlackFriday.png",
    link_live: "https://carlabruckmann.github.io/landingPage-HiringCoders/",
    link_code: "https://github.com/CarlaBruckmann/landingPage-HiringCoders",
  },
  {
    title: "Survey Form",
    text: "Form",
    description: "HTML5 and CSS3",
    img: "assets/img/img-cards/SurveyForm.png",
    link_live: "https://carlabruckmann.github.io/survey-form-FreeCodeCamp/",
    link_code: "https://github.com/CarlaBruckmann/survey-form-FreeCodeCamp",
  },
  {
    title: "Let's Dev",
    text: "Project",
    description: "ReactJs, TypeScript, HTML5, CSS3, Vite and API",
    img: "assets/img/img-cards/LetsDev.png",
    link_live: "",
    link_code:
      "https://github.com/CarlaBruckmann/projeto-de-conclusao_frontend_lets-dev",
  },
  {
    title: "GamaGit",
    text: "Project",
    description: "ReactJs and API",
    img: "assets/img/img-cards/GamaGit.png",
    link_live: "",
    link_code: "https://github.com/CarlaBruckmann/React-GamaGit",
  },
  {
    title: "Management",
    text: "System",
    description: "Bulma, HTML5, CSS3 and JavaScript",
    img: "assets/img/img-cards/GestãoDeCadastros.png",
    link_live:
      "https://carlabruckmann.github.io/GestaoDeCadastros-HiringCoders/",
    link_code:
      "https://github.com/CarlaBruckmann/GestaoDeCadastros-HiringCoders",
  },
  {
    title: "Vought",
    text: "System",
    description: "VueJs",
    img: "assets/img/img-cards/Relatorio.png",
    link_live: "https://jazztech-test.netlify.app/",
    link_code: "https://github.com/CarlaBruckmann/jazztech-test",
  },
  {
    title: "Documentation",
    text: "Page",
    description: "HTML5, CSS3, CSS Houdini and JavaScript",
    img: "assets/img/img-cards/Documentacao.png",
    link_live:
      "https://carlabruckmann.github.io/technical-documentation-page-FreeCodeCamp/",
    link_code:
      "https://github.com/CarlaBruckmann/technical-documentation-page-FreeCodeCamp",
  },
  {
    title: "SoundTracx",
    text: "Page",
    description: "HTML5, CSS3, JavaScript and jQuery",
    img: "assets/img/img-cards/SoundTracx.png",
    link_live: "https://carlabruckmann.github.io/soundtracx/",
    link_code: "https://github.com/CarlaBruckmann/soundtracx",
  },
  {
    title: "IgniteLab Event",
    text: "Page",
    description:
      "ReactJs, Vite, TypeScript, TailwindCSS, GraphQL, Apollo Client, GraphCMS and GraphQL CodeGen",
    img: "assets/img/img-cards/IgniteEvent.png",
    link_live: "",
    link_code:
      "https://github.com/CarlaBruckmann/eventPlataform-IgniteLab-Rocketseat",
  },
  {
    title: "To-do",
    text: "List",
    description: "ReactJs, Axios and API",
    img: "assets/img/img-cards/ListaDeTarefas.png",
    link_code:
      "https://github.com/CarlaBruckmann/ListaDeTarefas-React-DicasParaDevs",
  },
];
const cardProjects = document.querySelector("#list-projects");
projects.forEach((project) => {
  console.log(project.title);
  if (!project.link_code && !project.link_live) {
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
                <p class="project-description">Role: ${project.description}.</p>
            </div>
                <img src=${project.img}>
        </section>
        </div>
    `;
  } else if (!project.link_live) {
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
            <p class="project-description">Role: ${project.description}.</p>
        </div>
            <img src=${project.img}>
    </section>
    </div>
`;
  } else if (!project.link_code) {
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
                <p class="project-description">Role: ${project.description}.</p>
            </div>
                <img src=${project.img}>
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
                <p class="project-description">Role: ${project.description}.</p>
            </div>
                <img src=${project.img}>
        </section>
        </div>
    `;
  }
});
