<script lang="ts" setup>
import { cn } from "~/lib/utils";

const projects = await queryCollection("projects").order("title", "DESC").all();
</script>

<template>
  <section class="md:px-[10vw] md:mt-32">
    <h3 class="heading-text">Projects</h3>
    <ul
      class="grid grid-cols-1 grid-rows-none gap-4 overflow-auto xl:grid-rows-1 md:grid-cols-3 md:grid-rows-3 text-black"
    >
      <li v-for="item in projects" :key="item.id" :class="cn(' list-none')">
        <DirectionAwareHover
          :image-url="`/images/${item.image}`"
          image-class="scale-100 hover:scale-110"
        >
          <div class="bg-black/40 p-2 rounded-sm backdrop-blur-sm">
            <h4 class="text-2xl font-bold mb-1">
              {{ item.title }}
            </h4>

            <ContentRenderer :value="item.meta" />
          </div>
        </DirectionAwareHover>

        <!-- <div
          class="rounded-2.5xl relative h-full border p-2 md:rounded-3xl md:p-3"
        >
          <GlowingEffect
            :spread="40"
            :glow="true"
            :disabled="false"
            :proximity="64"
            :inactive-zone="0.01"
          />
          <div
            class="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]"
          >
            <div class="relative flex flex-1 flex-col justify-between gap-3">
              <div>

                <NuxtImg
                  :src="`/images/${item.image}`"
                  :alt="item.title"
                  class="max-w-full"
                />
              </div>
              <div class="space-y-3">
                <h3
                  class="-tracking-4 text-balance pt-0.5 font-sans text-xl/[1.375rem] font-semibold md:text-2xl/[1.875rem] text-white"
                >
                  {{ item.title }}
                </h3>
                <h2
                  class="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold"
                >
                  <ContentRenderer :value="item.meta" />
                </h2>
              </div>
            </div>
          </div>
        </div> -->
      </li>
    </ul>
  </section>
</template>
