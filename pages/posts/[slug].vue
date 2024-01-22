<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc">
      <header class="space-y-6">
        <div class="text-center space-y-2">
          <h1 class="text-3xl lg:text-4xl font-bold">{{ doc.title }}</h1>
          <span class="text-gray-500 text-sm">{{ doc.date }}</span>
        </div>
        <img :src="doc.thumbnail" class="w-full h-64 object-cover rounded-lg" />
      </header>
      <article class="prose text-justify max-w-none">
        <ContentRendererMarkdown :value="doc" />
      </article>
    </ContentRenderer>
  </ContentDoc>
</template>
