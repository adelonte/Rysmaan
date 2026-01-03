<script setup lang="ts">
import { ref, watch } from 'vue'

const tabs = [
  {
    label: 'Project Manager Workspace',
    icon: 'i-heroicons-briefcase',
    content: [
      { id: 'pm-discovery', title: 'Vendor Discovery & Filtering', description: 'Find available vendors matched by expertise, qualifications, and compliance.' },
      { id: 'pm-rfq', title: 'RFQ Creation', description: 'Create and share RFQs based on your project scope, qualifications, and compliance needs.' },
      { id: 'pm-comparison', title: 'Quote Comparison', description: 'Evaluate proposals side by side using your preferred criteria.' },
      { id: 'pm-communication', title: 'Vendor Communication', description: 'Keep all vendor communication organized in one place.' }
    ]
  },
  {
    label: 'Vendor Workspace',
    icon: 'i-heroicons-building-office',
    content: [
      { id: 'vendor-profile', title: 'Vendor Profile', description: 'Showcase your services, qualifications, and compliance in a single profile.' },
      { id: 'vendor-opps', title: 'RFQ Opportunity View', description: 'Discover RFQ opportunities that match your expertise.' },
      { id: 'vendor-quotes', title: 'Quote Submission & Status', description: 'Prepare quotes, communicate, and track responses in one place.' }
    ]
  }
]

const activeTabIndex = ref(0)
const activeSubTabIndex = ref(0)

watch(activeTabIndex, () => {
  activeSubTabIndex.value = 0
})
</script>

<template>
  <div>
    <UContainer>
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          See Rysmaan in Action
        </h2>
      </div>

      <div class="flex flex-col items-center">
        <!-- Main Tabs -->
        <div class="flex p-1.5 bg-gray-100 dark:bg-gray-800 rounded-xl mb-8">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTabIndex = index"
            class="px-8 py-3 rounded-lg text-lg font-semibold transition-all"
            :class="activeTabIndex === index ? 'bg-white dark:bg-gray-700 shadow text-primary-600 dark:text-primary-400' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'"
          >
            <div class="flex items-center gap-3">
              <UIcon :name="tab.icon" class="w-6 h-6" />
              {{ tab.label }}
            </div>
          </button>
        </div>

        <!-- Sub Tabs -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="(subTab, index) in tabs[activeTabIndex].content"
            :key="subTab.id"
            @click="activeSubTabIndex = index"
            class="px-5 py-2 rounded-full text-sm font-semibold border transition-all"
            :class="activeSubTabIndex === index ? 'bg-primary-50 border-primary-200 text-primary-700 dark:bg-primary-900/30 dark:border-primary-800 dark:text-primary-400' : 'bg-transparent border-gray-200 text-gray-500 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600'"
          >
            {{ subTab.title }}
          </button>
        </div>

        <!-- Macbook Frame -->
        <div class="relative w-full max-w-5xl mx-auto">
          <!-- Screen Container -->
          <div class="relative bg-gray-800 rounded-[2.5rem] p-3 shadow-2xl border-[8px] border-gray-900 aspect-[16/10] overflow-hidden">
            <div class="absolute inset-0 bg-white dark:bg-gray-900 overflow-hidden flex flex-col">
              <!-- Browser Header -->
              <div class="h-8 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 gap-2">
                <div class="flex gap-1.5">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div class="mx-auto bg-white dark:bg-gray-700 rounded-md px-16 py-0.5 text-[10px] text-gray-400 truncate max-w-xs">
                  rysmaan.com/app/{{ tabs[activeTabIndex].content[activeSubTabIndex].id }}
                </div>
              </div>
              
              <!-- Content Placeholder -->
              <div class="flex-1 overflow-hidden relative">
                <!-- PM Screenshots -->
                <img v-if="activeTabIndex === 0 && activeSubTabIndex === 0" src="https://placehold.co/1600x1000/ffffff/004b8d?text=Vendor+Discovery" class="w-full h-full object-cover" />
                <img v-else-if="activeTabIndex === 0 && activeSubTabIndex === 1" src="https://placehold.co/1600x1000/ffffff/004b8d?text=RFQ+Creation" class="w-full h-full object-cover" />
                <img v-else-if="activeTabIndex === 0 && activeSubTabIndex === 2" src="https://placehold.co/1600x1000/ffffff/004b8d?text=Quote+Comparison" class="w-full h-full object-cover" />
                <img v-else-if="activeTabIndex === 0 && activeSubTabIndex === 3" src="https://placehold.co/1600x1000/ffffff/004b8d?text=Vendor+Communication" class="w-full h-full object-cover" />
                
                <!-- Vendor Screenshots -->
                <img v-else-if="activeTabIndex === 1 && activeSubTabIndex === 0" src="https://placehold.co/1600x1000/ffffff/004b8d?text=Vendor+Profile" class="w-full h-full object-cover" />
                <img v-else-if="activeTabIndex === 1 && activeSubTabIndex === 1" src="https://placehold.co/1600x1000/ffffff/004b8d?text=RFQ+Opportunities" class="w-full h-full object-cover" />
                <img v-else-if="activeTabIndex === 1 && activeSubTabIndex === 2" src="https://placehold.co/1600x1000/ffffff/004b8d?text=Quote+Submission" class="w-full h-full object-cover" />

                <!-- Fallback/Default Placeholder if image fails to load -->
                <div class="absolute inset-0 p-8 flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900/50">
                  <UIcon :name="tabs[activeTabIndex].icon" class="w-16 h-16 text-primary-200 dark:text-primary-800 mb-6" />
                  <h3 class="text-xl font-bold mb-2">{{ tabs[activeTabIndex].content[activeSubTabIndex].title }}</h3>
                  <p class="text-gray-500 dark:text-gray-400 max-w-md">{{ tabs[activeTabIndex].content[activeSubTabIndex].description }}</p>
                  
                  <div class="mt-8 w-full max-w-3xl space-y-4 opacity-20">
                    <div class="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mx-auto"></div>
                    <div class="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mx-auto"></div>
                    <div class="grid grid-cols-3 gap-4 pt-4">
                      <div class="aspect-video bg-gray-200 dark:bg-gray-800 rounded"></div>
                      <div class="aspect-video bg-gray-200 dark:bg-gray-800 rounded"></div>
                      <div class="aspect-video bg-gray-200 dark:bg-gray-800 rounded"></div>
                    </div>
                  </div>

                  <div class="absolute bottom-4 right-4 px-3 py-1 bg-primary-500/10 text-primary-500 text-[10px] font-mono rounded border border-primary-500/20">
                    SCREENSHOT_PLACEHOLDER
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Base/Hinge -->
          <div class="relative mx-auto h-3 w-[105%] -ml-[2.5%] bg-gray-900 rounded-b-xl shadow-lg"></div>
          <div class="relative mx-auto h-2 w-32 bg-gray-800 rounded-b-xl"></div>
        </div>

        <!-- Description beneath -->
        <div class="mt-12 text-center max-w-2xl px-4">
          <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 italic">
            "{{ tabs[activeTabIndex].content[activeSubTabIndex].description }}"
          </p>
        </div>
      </div>
    </UContainer>
  </div>
</template>