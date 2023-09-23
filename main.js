import "./style.css";

if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => {
      // TODO: #8 I'm not sure what to do here. This is to make sure the promise resolves for now.
    })
    .catch((error) => {
      console.error("Service worker registration failed due to:", error);
    });
}

const navigationDrawer = document.getElementById("navigationDrawer");
const toggleSideBarButton = document.getElementById("toggleSideBarButton");
const sideNavShade = document.getElementById("sideNavShade");
const skillsSection = document.getElementById("skillsSection");
const featuredProjectsSection = document.getElementById("featuredProjects");
const copyrightSpan = document.getElementById("copyright");

toggleSideBarButton.addEventListener("click", (event) => {
  event.preventDefault();
  navigationDrawer.classList.toggle("hidden");
});
sideNavShade.addEventListener("click", (event) => {
  event.preventDefault();
  navigationDrawer.classList.add("hidden");
});

const skills = [
  {
    title: "Backend development",
    description:
      "I've been building backend solutions for over 4 years. My main tools of trade are Node.js, Laravel, MySQL, Redis and more",
  },
  {
    title: "Frontend development",
    description:
      "I build high performant frontend applications using Vue.Js, Nuxt and tailwind. My applications work both online and offline",
  },
  {
    title: "Data engineering",
    description:
      "I have experience in building data collection architectures. From advanced SQL, graph databases and more. Data will always be ready for scientists",
  },
];

skills.forEach((skill) => {
  const childElement = document.createElement("div");
  const title = document.createElement("h1");
  const description = document.createElement("p");
  title.innerText = skill.title;
  description.innerText = skill.description;
  childElement.appendChild(title);
  childElement.appendChild(description);
  skillsSection.appendChild(childElement);
  childElement.classList.add("p-4");
  title.classList.add("font-bold", "text-2xl");
});

const featuredProjects = [
  {
    title: "Notes",
    description:
      "A simple notes application built using indexed DB and works fully offline. Inspired by Samsung notes",
    sourceCode: "https://github.com/stanleymasinde/notes",
    link: "https://notes-n.netlify.app/",
  },
  {
    title: "Gumzo",
    description:
      "Gumzo is Swahili for conversation. A pointless chat application built on Firebase. No account needed dive in and chat with random strangers",
    sourceCode: "https://github.com/stanleymasinde/gumzo",
    link: "https://stanleymasinde.github.io/gumzo/",
  },
  {
    title: "Mock API",
    description:
      "A tool that returns fake JSON data on endpoint calls. It is ideal for frontend testing",
    sourceCode: "https://github.com/opensource254/mock-api",
  },
];

featuredProjects.forEach((project) => {
  const childElement = document.createElement("div");
  childElement.innerHTML = `<div v-for="p in featuredProjects"
          class="bg-primary flex-1 text-white shadow-md shadow-bgl border border-bgl mt-2 mb-3 rounded-3xl">
          <div class="rounded-t-3xl h-48 bg-cover bg-no-repeat aspect-video w-full flex justify-center">
            <div class="text-center grid place-content-center">
              <h1 class="font-bold text-8xl">${project.title.charAt(0)}</h1>
            </div>
          </div>
          <div class="px-3 mt-3">
            <div>
              <h1 class="text-2xl font-bold">${project.title}</h1>
              <p class="">${project.description}</p>
            </div>
            <div class="flex justify-center gap-3 mt-2 py-4 rounded-lg">
              <a class=" transition-all delay-150 border rounded-lg px-2 py-1 hover:bg-tertiary hover:border-tertiary"
                :href="p.link" target="_blank" rel="noopener noreferrer">Live link</a>
              <a class="border rounded-lg px-2 py-1 hover:bg-tertiary hover:border-tertiary" :href="p.sourceCode"
                target="_blank" rel="noopener noreferrer">Source code</a>
            </div>
          </div>
        </div>`;
  featuredProjectsSection.appendChild(childElement);
});

copyrightSpan.innerText = new Date().getFullYear();
