<template>
  <nav class="flex py-6 justify-between items-center flex-wrap">
    <div class="space-y-2">
      <NuxtLink to="/">
        <UAvatar icon="i-tabler-news" size="lg" />
      </NuxtLink>
      <div>
        <h1 class="text-2xl font-semibold hover:underline decoration-dashed">
          <NuxtLink to="/">Victor Bayas</NuxtLink>
        </h1>
        <p class="text-sm font-light text-gray-600 dark:text-gray-400">
          Welcome to my Nuxt Content blog
        </p>
      </div>
    </div>
    <div class="space-x-1">
      <UButton
        icon="i-tabler-brand-github"
        to="https://github.com/bayasdev"
        target="_blank"
        color="gray"
        variant="ghost"
        size="md"
        aria-label="GitHub"
      />
      <ColorMode />
    </div>
  </nav>
</template>
