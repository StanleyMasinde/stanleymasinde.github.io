<template>
  <nav id="top" class="flex justify-between py-2 px-3 sm:py-4 sm:px-20 md:px-40">
    <div>
      <h1 class="font-extrabold text-3xl">Stanley</h1>
    </div>
    <ul class="hidden sm:flex gap-3">
      <li class="cursor-pointer font-bold">
        <a href="#about">About</a>
      </li>
      <li class="cursor-pointer font-bold">
        <a href="#skills">Skills</a>
      </li>
      <li class="cursor-pointer font-bold">
        <a href="#projects">Projects</a>
      </li>
      <li class="cursor-pointer font-bold">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <button @click="showSideBar = !showSideBar" class="sm:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-10 h-10 active:bg-transparent focus:bg-transparent">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
    </button>
  </nav>

  <Transition enter-active-class="duration-300 ease-out" enter-from-class="transform -translate-x-10"
    leave-active-class="-translate-x-3/4" leave-to-class="transform -translate-x-3/4">
    <div v-show="showSideBar" :class="{ 'bg-black/20': showSideBar }" class="sm:hidden inset-y-0 fixed w-full">
      <div class="fixed z-50 rounded-r-3xl backdrop-brightness-75 h-full w-3/4 bg-bgl">
        <div class="grid place-items-center my-5">
          <div class="rounded-full border-2 border-secondary aspect-square h-28"></div>
          <div class="text-center">
            <h1 class="font-extrabold text-2xl uppercase">Stanley Masinde</h1>
            <h5 class="text-lg">Fullstack Developer</h5>
          </div>
        </div>
        <hr class="border-secondary">
        <ul class="ml-3 mt-5">
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0"
              stroke="currentColor" class="h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <a href="#about">
              <h1 class="text-2xl font-bold mb-2">About</h1>
            </a>
          </li>
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0"
              stroke="currentColor" class="h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
            </svg>
            <a class="text-2xl font-bold mb-2" href="#projects">Projects</a>
          </li>
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <a class="text-2xl font-bold mb-2" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div @click="showSideBar = false" class="h-full"></div>
    </div>
  </Transition>

  <div
    class="bg-[url('https://res.cloudinary.com/streetcoder/image/upload/v1591363274/empty-wooden-table-with-smoke-float-up-dark-background_68495-135_jtslrn.jpg')] bg-cover bg-center bg-no-repeat h-72">
    <div class="bg-black/50 h-full px-3 text-white flex flex-col gap-5 justify-around sm:mx-20 md:mx-40">
      <div>
        <h1 class="text-3xl font-bold mb-5">Hi 👋🏾, I am <span class="font-mono font-light text-secondary">Stanley
            🙂</span>
        </h1>
        <h5 class="text-lg font-semibold">I am a <span class="text-tertiary font-mono underline">full-stack
            developer</span> from <span>Kenya</span> I'm also a <span
            class="font-mono text-tertiary underline">technical writer</span> and a <span
            class="font-mono text-tertiary underline">content creator</span>
        </h5>
      </div>
      <div class="flex gap-2 self-baseline">
        <button class="bg-tertiary p-2 rounded-lg font-bold text-white">Learn more</button>
        <button class="border-2 border-tertiary rounded-lg px-3 text-tertiary">Get in touch</button>
      </div>
    </div>
  </div>

  <div class="bg-cover bg-no-repeat my-4 mx-2 sm:mx-20 md:mx-40">
    <div class="bg-primary text-white w-full px-3 py-5 rounded-tr-3xl rounded-bl-3xl">
      <h1 id="about" class="font-bold text-2xl text-secondary">About <span class="text-tertiary">Stanley</span></h1>
      <p class="font-semibold">
        A <span class="text-tertiary font-mono">full-stack developer</span> with over <span
          class="text-tertiary font-mono">5 years of
          experience</span> building products, I have extensive knowledge of
        web application and <span class="italic text-tertiary font-mono">mobile web</span> development. I have proven
        experience in
        both endpoints as well as between them puts him in a unique position to
        deliver work that meets your team’s deadlines and exceeds your expectations.
      </p>
    </div>
  </div>

  <div class="bg-cover bg-no-repeat my-4 mx-2 sm:mx-20 md:mx-40">
    <div class="">
      <h1 id="about" class="font-bold text-3xl text-secondary">Skills</h1>
    </div>

    <div class="sm:flex">
      <div class="bg-primary text-white px-9 py-1 text-center rounded-bl-xl rounded-tr-xl mt-2 sm:flex">
        <div class="sm:self-center">
          <h1 class=" text-7xl font-bold">5+</h1>
          <p>Years working experience</p>
        </div>
      </div>

      <div class="my-2 p-1 flex-col">
        <div class="p-4" v-for="skill in skills">
          <h1 class="font-bold text-2xl">{{ skill.title }}</h1>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </div>

  <div id="projects" class="px-2 mx-2 sm:mx-20 md:mx-40">
    <h1 id="about" class="font-bold text-3xl text-secondary">Featured <span class="text-tertiary">Projects</span></h1>
    <div class="sm:flex sm:overflow-x-scroll gap-2">
      <div v-for="p in featuredProjects"
        class="bg-primary flex-1 text-white shadow-md shadow-bgl border border-bgl mt-2 mb-3 rounded-3xl">
        <div
          class="bg-[url('https://res.cloudinary.com/streetcoder/image/upload/v1591363274/empty-wooden-table-with-smoke-float-up-dark-background_68495-135_jtslrn.jpg')] rounded-t-3xl h-48 bg-cover bg-no-repeat aspect-video w-full">
        </div>
        <div class="px-3 mt-3">
          <div>
            <h1 class="text-2xl font-bold">{{ p.title }}</h1>
            <p class="">{{ p.description }}</p>
          </div>
          <div class="flex justify-center gap-3 mt-2 py-4 rounded-lg">
            <a class=" transition-all delay-150 border rounded-lg px-2 py-1 hover:bg-tertiary hover:border-tertiary"
              :href="p.link" target="_blank" rel="noopener noreferrer">Live link</a>
            <a class="border rounded-lg px-2 py-1 hover:bg-tertiary hover:border-tertiary" :href="p.sourceCode"
              target="_blank" rel="noopener noreferrer">Source code</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="contact" class="px-2 mx-2 sm:mx-20 md:mx-40">
    <h1 class="font-bold text-3xl text-secondary">Get in touch!</h1>
    <p>Have an idea or just wanna say hi?</p>
    <div class="sm:grid grid-rows-1 grid-cols-2">
      <div>
        <form action="/" method="post" class="flex flex-col gap-2">
          <label for="name">Your name</label>
          <input required placeholder="John Doe" class="w-full rounded-lg" type="text" name="name" id="name"
            autocomplete="name">

          <label for="email">Your E-mail</label>
          <input required placeholder="john@example.com" class="w-full rounded-lg" type="email" name="email" id="email">

          <label for="message">Your message</label>
          <textarea required placeholder="What's on your mind?" class="w-full rounded-lg" name="message" rows="2"
            id="message"></textarea>

          <button class=" bg-tertiary text-white rounded-lg py-2">Send Message</button>
        </form>
      </div>
      <div></div>
    </div>
  </div>

  <footer class="bg-primary text-white mt-3 py-2 text-center">
    <div>&COPY; Stanley {{ new Date().getFullYear() }}</div>
    <div>
      <ul class="flex gap-1 justify-center underline">
        <li>
          <a class="cursor-pointer" href="https://twitter.com/StanleyMasinde_" target="_blank"
            rel="noopener noreferrer">Twitter</a>
        </li>
        <li>
          <a class="cursor-pointer" href="http://github.com/StanleyMasinde" target="_blank"
            rel="noopener noreferrer">Github</a>
        </li>
      </ul>
    </div>
    <div class="flex justify-center align-middle">
      <a href="#top">Back to top</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
interface FeaturedProject {
  title: string,
  description: string,
  image?: string,
  link?: string,
  sourceCode?: string
}
interface Skill {
  title: string,
  description: string
}
const showSideBar: Ref<boolean> = ref(false)
const featuredProjects: Ref<Array<FeaturedProject>> = ref([
  {
    title: 'Notes',
    description: 'A simple notes application built using indexed DB and works fully offline. Inspired by Samsung notes',
    sourceCode: 'https://github.com/stanleymasinde/notes',
    link: 'https://notes-n.netlify.app/'
  },
  {
    title: 'Gumzo',
    description: 'Gumzo is Swahili for conversation. A pointless chat application built on Firebase. No account needed dive in and chat with random strangers',
    sourceCode: 'https://github.com/stanleymasinde/gumzo',
    link: 'https://stanleymasinde.github.io/gumzo/'
  },
  {
    title: 'Mock API',
    description: 'A tool that returns fake JSON data on endpoint calls. It is ideal for frontend testing',
    sourceCode: 'https://github.com/opensource254/mock-api'
  }
])
const skills: Ref<Array<Skill>> = ref([
  {
    title: 'Backend development',
    description: 'I\'ve been building backend solutions for over 4 years. My main tools of trade are Node.js, Laravel, MySQL, Redis and more'
  },
  {
    title: 'Frontend development',
    description: 'I build high performant frontend applications using Vue.Js, Nuxt and tailwind. My applications work both online and offline'
  },
  {
    title: 'Data engineering',
    description: 'I have experience in building data collection architectures. From advanced SQL, graph databases and more. Data will always be ready for scientists'
  }
]);
</script>
