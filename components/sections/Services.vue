<template>

    <section class="md:px-[10vw] md:mt-32">

        <h3 class="heading-text">
            Services</h3>

        <ul
            class="grid grid-cols-1 grid-rows-none gap-4 overflow-auto xl:max-h-[56rem] xl:grid-rows-2 lg:gap-4 md:grid-cols-3 md:grid-rows-3 text-white">
            <li v-for="item in gridItems" :key="item.title" :class="cn('min-h-[14rem] list-none')">
                <div class="rounded-2.5xl relative h-full border p-2 md:rounded-3xl md:p-3">
                    <GlowingEffect :spread="40" :glow="true" :disabled="false" :proximity="64" :inactive-zone="0.01" />
                    <div
                        class="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                        <div class="relative flex flex-1 flex-col justify-between gap-3">
                            <div class="w-fit rounded-lg border border-gray-600 p-2">
                                <Icon class="size-4 text-white" :name="item.icon"></Icon>
                            </div>
                            <div class="space-y-3">
                                <h3
                                    class="-tracking-4 text-balance pt-0.5 font-sans text-xl/[1.375rem] font-semibold md:text-2xl/[1.875rem] text-white">
                                    {{ item.title }}
                                </h3>
                                <h2
                                    class="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                    {{ item.description }}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </section>

</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";

const gridItems = [
    {
        icon: "lucide:box",
        title: "Promote Your Business",
        description:
            "Transform your brand's first impression with captivating landing page designs. Engage visitors, drive conversions, and leave a lasting impact with aesthetics and user-centric layouts.",
    },
    {
        icon: "lucide:settings",
        title: "Build Your Products",
        description:
            "Crafting innovative web solutions. Elevate your online presence with responsive design, seamless functionality, and tailored user experiences. Empower your business digitally."
    },
    {
        icon: "lucide:users",
        title: "Collaborate With Me",
        description:
            "Elevate your digital strategy with expert web development consultancy. Tailored solutions, technology insights, and a roadmap for online success. Let's innovate together."
    },

];
</script>