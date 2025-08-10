<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
// Global meta
useHead({
  titleTemplate: '%s - Work with AI',
  meta: [
    { name: 'description', content: 'Cloud Application Feature Gateway' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<style>
/* Ensure consistent rendering */
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style>