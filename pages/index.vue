<script setup lang="ts">
</script>

<template>
	<div> 
    <div class="py-2">
      <div class="bg-gray-100 px-3 text-black sm:mx-20 md:mx-40">
        <div class="flex flex-col-reverse justify-end md:flex-row">
          <div class="flex flex-col justify-end">
            <div class="mb-5">
              <h1 class="mb-5 text-5xl font-extrabold">
                Hi, I'm Stanley
                <span
                  class="bg-tertiary rounded box-decoration-clone px-1 font-extrabold text-white hover:box-decoration-slice"
                  >Masinde</span
                >
              </h1>
            </div>
            <div>
              <h5 class="font-sans text-xl font-medium">
                Hi, I'm Stanley, a
                <span class="text-tertiary font-mono font-bold"
                  >Software Engineer
                </span>
                and
                <span class="text-tertiary">technical content creator</span>. I
                build tools that developers love. My tools of trade include
                <span class="text-tertiary font-mono font-bold">Rust</span>,
                <span class="text-tertiary font-mono font-bold">Laravel</span>,
                <span class="text-tertiary font-mono font-bold">NodeJS</span>
                and <span class="text-tertiary font-mono font-bold">VueJS</span>
              </h5>
              <div class="mt-5 flex gap-2 self-baseline">
                <a
                  href="#contact"
                  class="border-tertiary text-primary hover:bg-tertiary rounded border-2 px-3 py-2 transition duration-1000 ease-in-out hover:text-white"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
          <div class="hidden lg:block">
            <img
              class="saturate-100"
              src="/hero.png"
              alt="Photo of Stanley Masinde"
            >
          </div>
        </div>
      </div>
    </div>

    <div class="mx-2 my-4 bg-cover bg-no-repeat sm:mx-20 md:mx-40">
      <div
        class="bg-primary w-full rounded-tr-3xl rounded-bl-3xl px-3 py-5 text-white"
      >
        <h1 id="about" class="text-secondary text-2xl font-bold">
          About <span class="text-tertiary">Stanley</span>
        </h1>
        <p class="font-semibold">
          I'm Stanley, a
          <span class="text-secondary font-bold italic">Software Engineer</span>
          with over 7 years of experience building
          <span class="text-secondary font-bold italic"
            >scalable web applications</span
          >
          and
          <span class="text-secondary font-bold italic"
            >streamlined mobile web solutions</span
          >. I specialize in creating efficient, user-focused products and have
          expertise in backend systems like
          <span class="text-secondary font-bold italic">Laravel Octane</span>
          and <span class="text-secondary font-bold italic">Rust</span>, as well
          as frontend frameworks like
          <span class="text-secondary font-bold italic">Vue.js</span>. I'm
          passionate about solving real-world problems with technology and have
          a proven track record in developing tools like
          <span class="text-secondary font-bold italic">Farm Direct</span>
          and
          <span class="text-secondary font-bold italic">Lnky</span>. A strong
          communicator and collaborator, I go above and beyond to deliver
          impactful solutions. If you're looking for a reliable and experienced
          full-stack developer,
          <i>let's talk about your next project!</i>
        </p>
      </div>
    </div>

    <div id="contact" class="mx-2 px-2 sm:mx-20 md:mx-40">
      <h1 class="text-tertiary text-3xl font-bold">Get in touch!</h1>
      <p class="font-semibold">Have an idea or just wanna say hi?</p>
      <div class="grid-cols-2 grid-rows-1 sm:grid">
        <div>
          Email:
          <a class="text-tertiary" href="mailto:hello@stanleymasinde.com"
            >hello@stanleymasinde.com</a
          >
        </div>
        <div/>
      </div>
    </div>
	</div>
</template>

