<script setup>
const props = defineProps({
  class: {
    type: String,
    default: 'p-whole border',
  },
});
</script>

<template>
  <slot name="pre" mdc-unwrap="p" />
  <footer :class="['p-whole border', props.class]">
    <slot />
  </footer>
</template>
