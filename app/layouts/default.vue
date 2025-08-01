<script setup lang="ts">
const mobileSideBar = ref < Boolean > (false)
</script>

<template>
  <div class="bg-bgl scroll-smooth">
    <nav
      id="top"
      class="flex justify-between px-3 py-2 sm:px-20 sm:py-4 md:px-40"
    >
      <div>
        <h1 class="text-3xl font-extrabold">
          Stanley
        </h1>
      </div>
      <ul class="hidden gap-3 sm:flex">
        <li class="cursor-pointer font-bold">
          <a href="#about">About</a>
        </li>
        <li class="cursor-pointer font-bold">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button
        id="toggleSideBarButton"
        class="sm:hidden"
        @click="mobileSideBar = !mobileSideBar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-10 w-10 focus:bg-transparent active:bg-transparent"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>
    </nav>

    <div
      v-show="mobileSideBar"
      id="navigationDrawer"
      class="fixed inset-y-0 w-full backdrop-brightness-50"
    >
      <div class="bg-bgl fixed z-1000 h-full w-3/4 rounded-r-3xl">
        <div class="my-5 grid place-items-center">
          <div
            class="border-secondary aspect-square h-28 rounded-full border-2"
          />
          <div class="text-center">
            <h1 class="text-2xl font-extrabold uppercase">
              Stanley Masinde
            </h1>
            <h5 class="text-lg">
              Fullstack Developer
            </h5>
          </div>
        </div>
        <hr class="border-secondary">
        <ul class="mt-5 ml-3">
          <li class="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.0"
              stroke="currentColor"
              class="h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <a href="#about">
              <h1 class="mb-2 text-2xl font-bold">About</h1>
            </a>
          </li>
          <li class="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <a
              class="mb-2 text-2xl font-bold"
              href="#contact"
            >Contact</a>
          </li>
        </ul>
      </div>
      <div
        id="sideNavShade"
        class="h-full"
        @click="mobileSideBar = false"
      />
    </div>
    <slot />

    <footer class="bg-primary mt-3 py-2 text-center text-white">
      <div>&COPY; Stanley <span id="copyright" />{{ new Date().getFullYear() }}</div>
      <div>
        <ul class="flex justify-center gap-1 underline">
          <li>
            <a
              class="cursor-pointer"
              href="https://twitter.com/StanleyMasinde_"
              target="_blank"
              rel="noopener noreferrer"
            >Twitter</a>
          </li>
          <li>
            <a
              class="cursor-pointer"
              href="http://github.com/StanleyMasinde"
              target="_blank"
              rel="noopener noreferrer"
            >Github</a>
          </li>
        </ul>
      </div>
      <div class="flex justify-center align-middle">
        <a href="#top">Back to top</a>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
