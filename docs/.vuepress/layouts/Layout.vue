<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { version } from '../../../package.json'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="site-footer">{{ `Version: ${version} | © JaylyMC 2024` }}</div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.site-footer {
  text-align: center;
}
</style>