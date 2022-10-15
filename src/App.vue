<template>
  <nav class="flex justify-between py-2 px-3 sm:py-4 sm:px-16">
    <div>
      <h1 class="font-extrabold text-3xl">Stanley</h1>
    </div>
    <ul class="hidden sm:flex gap-3">
      <li class="cursor-pointer font-bold">About</li>
      <li class="cursor-pointer font-bold">Projects</li>
      <li class="cursor-pointer font-bold">Contact</li>
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
    class="bg-[url('https://res.cloudinary.com/streetcoder/image/upload/v1591363274/empty-wooden-table-with-smoke-float-up-dark-background_68495-135_jtslrn.jpg')] aspect-video bg-cover bg-center bg-no-repeat">
    <div class="bg-black/50 h-full px-3 text-white flex flex-col gap-5 justify-around">
      <div>
        <h1 class="text-2xl font-bold">Hi 👋🏾, I am <span class="font-mono font-light text-secondary">Stanley 🙂</span>
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

  <div class="bg-cover bg-no-repeat my-4 mx-2">
    <div class="bg-primary text-white w-full px-3 py-5 rounded-tr-3xl rounded-bl-3xl ">
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


</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

const showSideBar: Ref<boolean> = ref(false)
</script>
