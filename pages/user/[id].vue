<template>
  <section>
    <h2>Info about user:</h2>
    <p>ID: {{ user.id }}</p>
    <p>Full name: {{ user.name }}</p>
    <p>Phone: {{ user.phone }}</p>
    <p class="mb-5">Company name: {{ user.company.name }}</p>

    <NuxtLink class="text-blue-900 hover:underline"to="/">
      Back to Users
    </NuxtLink>

  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();

const usersStore = useUsersStore();

await usersStore.getUser(route.params.id);
const user = computed(() => usersStore.user);
</script>
