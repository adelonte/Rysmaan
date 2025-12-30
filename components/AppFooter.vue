<script setup lang="ts">
const links = [
  {
    label: "Product",
    children: [
      { label: "Features", to: "/#features" },
      { label: "How It Works", to: "/#how-it-works" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Documentation", to: "/docs" },
      { label: "Support", to: "/support" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
];
</script>

<template>
  <UFooter :links="links">
    <template #left>
      <div class="flex flex-col gap-4">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Rysmaan Logo" class="h-10 w-auto" />
        </NuxtLink>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Streamline your RFQ process and connect with the right partners.
        </p>
      </div>
    </template>

    <template #right>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} Rysmaan. All rights reserved.
      </p>
    </template>
  </UFooter>
</template>
