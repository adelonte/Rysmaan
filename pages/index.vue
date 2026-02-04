<template>
  <div class="space-y-0 bg-white dark:bg-gray-900">
    <!-- 1. Intro Section -->
    <div class="py-24 sm:py-32 lg:py-40">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900 dark:text-white mb-8 leading-[1.1]">
          Simplified software for project managers in solo, small, and mid-sized firms, along with service providers across all engineering disciplines.
        </h1>
        <p class="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Meet the next-generation system for modern project management and project discovery—designed to take your company to the next level.
        </p>
      </div>
    </div>

    <!-- 2. Big Image Placeholder -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-40">
      <div class="aspect-[16/10] bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center group cursor-pointer hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-500">
        <div class="text-center">
          <UIcon name="i-heroicons-play-circle" class="w-24 h-24 text-gray-300 dark:text-gray-600 group-hover:text-primary-500 transition-colors mb-4 mx-auto" />
          <p class="text-gray-400 dark:text-gray-500 font-medium text-lg">Main Product Interface Screenshot / Video</p>
        </div>
      </div>
    </div>

    <!-- 3. Core Value Text Section -->
    <div class="py-24 sm:py-40 bg-gray-50 dark:bg-gray-950/50">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-10 leading-tight">
          Made for Project Managers and Service Providers
        </h2>
        <p class="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed font-normal max-w-3xl mx-auto">
          Rysmaan is built by engineers who have managed real-world projects and faced the challenge of finding qualified vendors. It provides practical tools that effectively streamline workflows and strengthen your teams.
        </p>
      </div>
    </div>

    <!-- 4. Triple Feature Cards -->
    <div class="py-24 sm:py-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          <!-- Card 1 -->
          <div class="flex flex-col gap-8">
            <div class="flex items-center gap-5">
              <div class="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-2xl">
                <UIcon name="i-heroicons-briefcase" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                Purpose-built for Project Managers
              </h3>
            </div>
            <p class="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Rysmaan was developed to empower project managers in small- to mid-sized firms to do their best work. Every feature is intentionally designed to help teams focus on what they do best: building on budget/schedule projects.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="flex flex-col gap-8">
            <div class="flex items-center gap-5">
              <div class="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-2xl">
                <UIcon name="i-heroicons-sparkles" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                Purpose-built for Service Providers
              </h3>
            </div>
            <p class="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Rysmaan enables you to showcase your expertise and capabilities to those who looking for it at the right time. It is designed to help your team to focus on what really matters: delivering quality work.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="flex flex-col gap-8">
            <div class="flex items-center gap-5">
              <div class="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-2xl">
                <UIcon name="i-heroicons-cpu-chip" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                Meticulously crafted
              </h3>
            </div>
            <p class="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Gone are the days of clunky, slow, and bloated tools. Rysmaan is snappy, speedy, and a pleasure to use. It's intuitive and easy to learn, but flexible enough to adapt to your team’s unique way of working.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 5. All Features Section (Alternating) -->
    <div class="bg-gray-50 dark:bg-gray-950/50 py-24 sm:py-40 space-y-32 sm:space-y-48">
      <div v-for="(feature, index) in detailedFeatures" :key="index" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:items-center gap-16 lg:gap-24" :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
          <!-- Text Content -->
          <div class="flex-1 space-y-8">
            <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              {{ feature.title }}
            </h2>
            <p class="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
          
          <!-- Image Placeholder -->
          <div class="flex-1">
            <div class="aspect-[16/10] bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-200 dark:border-gray-800 shadow-2xl flex items-center justify-center p-12">
              <div class="text-center">
                <UIcon :name="feature.icon" class="w-20 h-20 text-gray-100 dark:text-gray-800 mb-6 mx-auto" />
                <p class="text-lg text-gray-400 dark:text-gray-500 font-medium leading-relaxed">Visual representation for <br/> {{ feature.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 6. Footer CTA -->
    <div class="py-24 sm:py-40 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-10 leading-[1.1]">
          Ready to take your company to the next level?
        </h2>
        <p class="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 mb-14 max-w-2xl mx-auto">
          Join project managers and service providers who are modernizing their workflows with Rysmaan.
        </p>
        <UButton size="xl" color="primary" class="rounded-full px-16 py-5 text-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1" @click="isModalOpen = true">
          Request Early Access
        </UButton>
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
    description: "Don’t worry about missing deadlines to send out RFQs, submit quotes, or award contracts. Rysmaan has your back, helping both project managers and service providers stay on track while managing multiple projects.",
    icon: "i-heroicons-exclamation-triangle"
  },
  {
    title: "Central Repository",
    description: "Gone are the days of storing contracts and important documents across a web of emails, shared drives, or project servers. Rysmaan enables you to centrally store contracts and supporting documents in one place.",
    icon: "i-heroicons-folder-open"
  }
]
</script>
