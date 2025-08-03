<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Home',
      icon: 'i-lucide-house',
      to: '/',
    },
  ],
]);
</script>

<template>
  <UNavigationMenu
    color="neutral"
    :items="items"
    class="not-prose p-c w-full border-b"
  />
  <NuxtPage class="border article" />
  <footer class="border article">
    <p>This is the footer.</p>
  </footer>
</template>
