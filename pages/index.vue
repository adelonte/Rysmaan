<template>
  <div class="space-y-0 bg-white dark:bg-gray-900">
    <!-- 1. Intro Section -->
    <div class="py-20 sm:py-28 lg:py-32">
      <div class="text-center max-w-5xl mx-auto px-4">
        <h1 class="text-3xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-white mb-8 leading-[1.2]">
          Simplified software for project managers in solo, small, and mid-sized firms, along with service providers across all engineering disciplines.
        </h1>
        <p class="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Meet the next-generation system for modern project management and project discovery—designed to take your company to the next level.
        </p>
      </div>
    </div>

    <EarlyAccessModal v-model:is-open="isModalOpen" />

    <!-- 2. Big Image Placeholder -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
      <div class="aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center group cursor-pointer hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
        <div class="text-center">
          <UIcon name="i-heroicons-play-circle" class="w-20 h-20 text-gray-300 dark:text-gray-600 group-hover:text-primary-500 transition-colors mb-4 mx-auto" />
          <p class="text-gray-400 dark:text-gray-500 font-medium">Main Product Interface Screenshot / Video</p>
        </div>
      </div>
    </div>

    <!-- 3. Core Value Text Section -->
    <div class="py-20 sm:py-32 bg-gray-50 dark:bg-gray-950/50">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
          Made for Project Managers and Service Providers
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
          Rysmaan is built by engineers who have managed real-world projects and faced the challenge of finding qualified vendors. It provides practical tools that effectively streamline workflows and strengthen your teams.
        </p>
      </div>
    </div>

    <!-- 4. Triple Feature Cards -->
    <div class="py-20 sm:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Card 1 -->
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-4">
              <div class="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <UIcon name="i-heroicons-briefcase" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                Purpose-built for Project Managers
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Rysmaan was developed to empower project managers in small- to mid-sized firms to do their best work. Every feature is intentionally designed to help teams focus on what they do best: building on budget/schedule projects.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-4">
              <div class="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <UIcon name="i-heroicons-sparkles" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                Purpose-built for Service Providers
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Rysmaan enables you to showcase your expertise and capabilities to those who looking for it at the right time. It is designed to help your team to focus on what really matters: delivering quality work.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-4">
              <div class="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <UIcon name="i-heroicons-cpu-chip" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                Meticulously crafted
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Gone are the days of clunky, slow, and bloated tools. Rysmaan is snappy, speedy, and a pleasure to use. It's intuitive and easy to learn, but flexible enough to adapt to your team’s unique way of working.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 5. All Features Section (Alternating) -->
    <div class="bg-gray-50 dark:bg-gray-950/50 py-20 sm:py-28 space-y-24 sm:space-y-32">
      <div v-for="(feature, index) in detailedFeatures" :key="index" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:items-center gap-12 lg:gap-20" :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
          <!-- Text Content -->
          <div class="flex-1 space-y-6">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ feature.title }}
            </h2>
            <p class="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
          
          <!-- Image Placeholder -->
          <div class="flex-1">
            <div class="aspect-[4/3] bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl flex items-center justify-center p-8">
              <div class="text-center">
                <UIcon :name="feature.icon" class="w-16 h-16 text-gray-200 dark:text-gray-700 mb-4 mx-auto" />
                <p class="text-sm text-gray-400 dark:text-gray-500 font-medium">Visual representation for <br/> {{ feature.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 6. Footer CTA -->
    <div class="py-20 sm:py-32 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Ready to take your company to the next level?
        </h2>
        <p class="text-xl text-gray-500 dark:text-gray-400 mb-10">
          Join project managers and service providers who are modernizing their workflows with Rysmaan.
        </p>
        <UButton size="xl" color="primary" class="rounded-full px-12 py-4 text-lg font-semibold" @click="isModalOpen = true">
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
