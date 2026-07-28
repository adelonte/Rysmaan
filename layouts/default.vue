<template>
  <div class="flex min-h-screen flex-col bg-white dark:bg-gray-900">
    <AppHeader />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
