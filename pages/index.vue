<script setup lang="ts">
useSeoMeta({
  title: 'Home',
  description: 'Home page',
});
</script>

<template>
  <div>
    <ContentList
      path="/posts"
      :query="{
        draft: false,
        sort: [
          {
            date: -1,
          },
        ],
      }"
      v-slot="{ list }"
    >
      <div class="flex flex-col gap-4">
        <PostsCard v-for="post in list" :key="post.slug" :post="post" />
      </div>
    </ContentList>
  </div>
</template>
