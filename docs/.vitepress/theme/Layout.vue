<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const route = useRoute()

// Show phone simulator only on component pages
const showPhone = computed(() => {
  return route.path.includes('/components/')
})
</script>

<template>
  <Layout>
    <template #aside-outline-before>
    </template>
  </Layout>
</template>

<style scoped>
.mobile-preview-wrapper {
  margin-bottom: 20px;
}

/* Override fixed positioning for aside slot integration if we want it to flow with scroll, 
   BUT standard is fixed. The style.css defines .mobile-preview-container as fixed. */
</style>
