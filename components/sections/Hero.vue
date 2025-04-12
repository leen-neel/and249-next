<template>
  <section
    class="relative mx-auto h-screen w-full overflow-hidden flex justify-center items-center"
  >
    <FlickeringGrid
      class="absolute inset-0 flex items-center justify-center px-8 -z-40"
      :square-size="4"
      :grid-gap="6"
      color="#60A5FA"
      :max-opacity="0.4"
      :flicker-chance="0.5"
    />
    <div class="flex size-full max-w-6xl flex-col md:flex-row">
      <div
        class="flex size-full h-[36rem] flex-col items-center justify-center md:h-full md:items-start md:p-8"
      >
        <p
          class="inline-block gap-2 text-white text-center text-3xl font-bold text-transparent md:text-left md:text-6xl leading-7"
        >
          Greetings! I'm Neel <span class="wave">👋🏻</span>
        </p>

        <p class="mt-4 w-3/4">
          Hey there! I am Anindo Neel Dutta! I hail from 🇮🇳. I am a full-stack
          web developer who's always either coding or sleeping.
        </p>

        <p class="mt-4 w-3/4">
          I've written my first lines of code at 6. Programming has been an
          essential part of my life. Learning about new technology and building
          apps that find solutions to make life easier has always been a passion
          of mine.

          <span
            class="flex w-full flex-row py-6 justify-start md:justify-start"
          >
            <AnimatedTooltip :items="people" class="w-6" />
          </span>

          <NuxtLink to="/contact">
            <Button as="a" class="mt-5 btn-cta focus:outline-none focus:ring-0"
              >Contact Me</Button
            >
          </NuxtLink>
        </p>
      </div>
      <div
        class="relative flex flex-col items-center justify-center md:max-w-96"
      >
        <div
          class="relative flex size-fit flex-col items-center justify-center rounded-full"
        >
          <BorderBeam
            color-from="#2dbeaf"
            color-to="#3983f7"
            :size="250"
            :duration="12"
            :delay="9"
            class="img-hover"
            :border-width="5"
          />

          <NuxtImg
            src="/images/Me.png"
            alt="Anindo"
            class="rounded-full img-hover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const people = [
  {
    id: 1,
    name: "Astro",
    designation: "Static Site Generator",
    image: "/images/stack/astro.png",
  },
  {
    id: 2,
    name: "VueJS",
    designation: "The Progressive JS Framework",
    image: "/images/stack/vue.png",
  },
  {
    id: 3,
    name: "Nuxt",
    designation: "The Progressive Web Framework",
    image: "/images/stack/nuxt.png",
  },
  {
    id: 4,
    name: "TypeScript",
    designation: "JavaScript on Steroids",
    image: "/images/stack/ts.png",
  },
  {
    id: 5,
    name: "Linux",
    designation: "It's GNU + Linux",
    image: "/images/stack/linux.png",
  },
  {
    id: 6,
    name: "and many more...",
    designation: "I love learning new things!",
    image: "/images/stack/more.png",
  },
];
</script>

<style lang="scss" scoped>
.img-hover:hover {
  @apply rotate-6 scale-105 transition-all delay-150;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(10deg);
  }

  50% {
    transform: rotate(0deg);
  }
}

.wave {
  display: inline-block;
  animation: wave 0.8s infinite;
  transform-origin: 70% 70%;
}
</style>
