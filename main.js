import "./style.css";

const navigationDrawer = document.getElementById("navigationDrawer");
const toggleSideBarButton = document.getElementById("toggleSideBarButton");
const sideNavShade = document.getElementById("sideNavShade");
const skillsSection = document.getElementById("skillsSection");

toggleSideBarButton.addEventListener("click", (event) => {
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
  console.log(skillsSection);
});
