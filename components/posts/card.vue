<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

const props = defineProps({
  post: {
    type: Object as PropType<ParsedContent>,
    required: true,
  },
});
</script>

<template>
  <UCard
    :ui="{
      body: {
        padding: 0,
      },
    }"
    class="overflow-hidden"
  >
    <img
      :src="post.thumbnail"
      :alt="post.title"
      class="w-full h-64 object-cover"
    />
    <div class="px-4 py-5 sm:p-6 space-y-2">
      <div>
        <h3 class="text-2xl font-semibold">
          {{ post.title }}
        </h3>
        <span class="text-sm text-gray-600 dark:text-gray-400">{{
          post.date
        }}</span>
      </div>
      <p class="font-light">{{ post.description }}</p>
      <UButton :to="post._path" icon="i-tabler-circle-arrow-right" size="md">
        Read more
      </UButton>
    </div>
  </UCard>
</template>
