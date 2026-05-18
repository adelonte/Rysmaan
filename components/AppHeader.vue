<script setup lang="ts">
const isSignInOpen = ref(false);
const { isModalOpen: isEarlyAccessOpen } = useEarlyAccess();
const route = useRoute();

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Roadmap", to: "/roadmap" },
];

function isActiveLink(to: string) {
  return to === "/" ? route.path === "/" : route.path.startsWith(to);
}
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800"
  >
    <nav class="container px-4 md:px-8 xl:px-16 sm:mx-auto">
      <div class="flex min-h-16 md:min-h-20 items-center justify-between gap-3 py-2">
        <div class="flex shrink-0 items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img src="/logo.png" alt="Rysmaan Logo" class="h-12 sm:h-16 dark:hidden" />
            <img
              src="/logo.png"
              alt="Rysmaan Logo"
              class="hidden dark:block h-12 sm:h-16 invert brightness-200"
            />
          </NuxtLink>
        </div>

        <div
          class="flex items-center rounded-full border border-gray-200 bg-gray-50 p-1 dark:border-gray-800 dark:bg-gray-950"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="rounded-full px-3 py-1.5 text-sm font-semibold transition-colors sm:px-4"
            :class="
              isActiveLink(link.to)
                ? 'bg-white text-primary-600 shadow-sm dark:bg-gray-900 dark:text-primary-300'
                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            "
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <div class="flex shrink-0 items-center gap-4">
          <!-- <UButton
            variant="ghost"
            color="gray"
            size="sm"
            class="font-medium"
            @click="isSignInOpen = true"
          >
            Sign In
          </UButton> -->
          <UButton
            color="primary"
            size="sm"
            icon="i-heroicons-arrow-right"
            aria-label="Get Early Access"
            class="rounded-full sm:hidden"
            @click="isEarlyAccessOpen = true"
          />
          <UButton
            color="primary"
            size="sm"
            class="hidden px-4 font-semibold rounded-full sm:inline-flex"
            @click="isEarlyAccessOpen = true"
          >
            Get Early Access
          </UButton>
        </div>
      </div>
    </nav>
    <SignInModal v-model:is-open="isSignInOpen" />
  </header>
</template>
