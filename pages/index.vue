<template>
  <div class="flex flex-col items-center">
    <h1 class="text-[30px] font-bold underline">Users List</h1>
    <User v-for="user of users" :user="user" />
  </div>
</template>

<script setup lang="ts">
const usersStore = useUsersStore();

await usersStore.getUsers();
const users = computed(() => usersStore.users);
</script>
