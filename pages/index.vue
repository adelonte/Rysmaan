<template>
  <div class="flex flex-col gap-12 md:gap-20 lg:gap-32">
    <EarlyAccessModal v-model:is-open="isModalOpen" />

    <!-- 1. Intro Section -->
    <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto flex flex-col gap-20 md:gap-32 pt-8 md:pt-12">
      <div class="flex flex-col gap-6 text-left md:text-center max-w-5xl mx-auto">
        <h1 class="text-[32px] md:text-[48px] leading-[1.15] font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
          <span class="text-primary-500">Simplified</span> software for project managers in solo, small, and mid-sized firms, along with service providers across all engineering disciplines.
        </h1>
        <p class="text-[18px] leading-[1.6] text-gray-500 dark:text-gray-400 max-w-4xl mx-auto">
          Meet the next-generation system for modern project management and project discovery—designed to take your company to the next level.
        </p>
        <div class="flex justify-start md:justify-center mt-6">
          <UButton size="lg" color="black" class="rounded-full px-6 py-2.5 font-medium text-[15px]" @click="isModalOpen = true">
            See it in action
            <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4 ml-1.5" />
          </UButton>
        </div>
      </div>
    </div>

    <!-- 2. Big Image Placeholder -->
    <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto">
      <div class="aspect-[16/9] bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden flex items-center justify-center group cursor-pointer hover:border-primary-300 dark:hover:border-primary-700 transition-all">
        <div class="text-center">
          <UIcon name="i-heroicons-play-circle" class="w-16 h-16 text-gray-300 dark:text-gray-600 group-hover:text-primary-500 transition-colors mb-4 mx-auto" />
          <p class="text-gray-400 dark:text-gray-500 font-medium">Main Product Interface Screenshot / Video</p>
        </div>
      </div>
    </div>

    <!-- 3. Core Value Text Section -->
    <div class="bg-gray-50 dark:bg-gray-950/50">
      <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto py-20 md:py-28">
        <div class="flex flex-col gap-6 text-left max-w-4xl">
          <h2 class="text-[28px] md:text-[40px] leading-[1.2] font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
            Made for Project Managers and Service Providers
          </h2>
          <p class="text-[18px] leading-[1.6] text-gray-500 dark:text-gray-400">
            Rysmaan is built by engineers who have managed real-world projects and faced the challenge of finding qualified vendors. It provides practical tools that effectively streamline workflows and strengthen your teams.
          </p>
        </div>
      </div>
    </div>

    <!-- 4. Triple Feature Cards -->
    <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        <!-- Card 1 -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
              <UIcon name="i-heroicons-briefcase" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-[16px] font-bold text-gray-900 dark:text-white">
              Purpose-built for Project Managers
            </h3>
          </div>
          <p class="text-[15px] text-gray-500 dark:text-gray-400 leading-[1.6]">
            Rysmaan was developed to empower project managers in small- to mid-sized firms to do their best work. Every feature is intentionally designed to help teams focus on what they do best: building on budget/schedule projects.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
              <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-[16px] font-bold text-gray-900 dark:text-white">
              Purpose-built for Service Providers
            </h3>
          </div>
          <p class="text-[15px] text-gray-500 dark:text-gray-400 leading-[1.6]">
            Rysmaan enables you to showcase your expertise and capabilities to those who looking for it at the right time. It is designed to help your team to focus on what really matters: delivering quality work.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
              <UIcon name="i-heroicons-cpu-chip" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-[16px] font-bold text-gray-900 dark:text-white">
              Meticulously crafted
            </h3>
          </div>
          <p class="text-[15px] text-gray-500 dark:text-gray-400 leading-[1.6]">
            Gone are the days of clunky, slow, and bloated tools. Rysmaan is snappy, speedy, and a pleasure to use. It's intuitive and easy to learn, but flexible enough to adapt to your team's unique way of working.
          </p>
        </div>
      </div>
    </div>

    <!-- 5. All Features Section (Alternating) -->
    <div class="bg-gray-50 dark:bg-gray-950/50 py-20 md:py-28">
      <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto flex flex-col gap-20 md:gap-28">
        <div v-for="(feature, index) in detailedFeatures" :key="index" class="flex flex-col gap-10 md:gap-16" :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
          <!-- Text Content -->
          <div class="flex-1 flex flex-col gap-4 justify-center">
            <h2 class="text-[24px] md:text-[32px] leading-[1.2] font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
              {{ feature.title }}
            </h2>
            <p class="text-[16px] leading-[1.6] text-gray-500 dark:text-gray-400">
              {{ feature.description }}
            </p>
          </div>
          
          <!-- Image Placeholder -->
          <div class="flex-1">
            <div class="aspect-[16/10] bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg flex items-center justify-center p-8">
              <div class="text-center">
                <UIcon :name="feature.icon" class="w-14 h-14 text-gray-200 dark:text-gray-700 mb-4 mx-auto" />
                <p class="text-sm text-gray-400 dark:text-gray-500 font-medium">Visual for {{ feature.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 6. Footer CTA -->
    <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto pb-20 md:pb-28">
      <div class="flex flex-col gap-6 text-left md:text-center max-w-4xl mx-auto">
        <h2 class="text-[28px] md:text-[40px] leading-[1.2] font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
          Ready to take your company to the next level?
        </h2>
        <p class="text-[18px] leading-[1.6] text-gray-500 dark:text-gray-400">
          Join project managers and service providers who are modernizing their workflows with Rysmaan.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-start md:justify-center mt-6">
          <UButton size="lg" color="primary" class="rounded-full px-6 py-2.5 font-medium text-[15px]" @click="isModalOpen = true">
            Request Early Access
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isModalOpen } = useEarlyAccess()

const detailedFeatures = [
  {
    title: "Project-Centric Platform",
    description: "An all-in-one place to procure your projects, with a level of detail tailored to your needs.",
    icon: "i-heroicons-rectangle-stack"
  },
  {
    title: "Tender and Vendor Management",
    description: "Create RFQs, deliver them to your trusted vendors, receive quotes, communicate, compare proposals, evaluate vendors, and award services within a single platform. No more buried and scattered emails or messages.",
    icon: "i-heroicons-document-check"
  },
  {
    title: "Vendors Visibility",
    description: "Let your preferred vendors keep their services and qualifications up to date. Project managers always have real-time visibility into the most current vendor information.",
    icon: "i-heroicons-eye"
  },
  {
    title: "Risk Identification",
    description: "Don't worry about missing deadlines to send out RFQs, submit quotes, or award contracts. Rysmaan has your back, helping both project managers and service providers stay on track while managing multiple projects.",
    icon: "i-heroicons-exclamation-triangle"
  },
  {
    title: "Central Repository",
    description: "Gone are the days of storing contracts and important documents across a web of emails, shared drives, or project servers. Rysmaan enables you to centrally store contracts and supporting documents in one place.",
    icon: "i-heroicons-folder-open"
  }
]
</script>
