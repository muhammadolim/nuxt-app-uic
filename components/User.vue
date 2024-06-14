<template>
  <NuxtLink
    class="flex cursor-pointer m-1 p-1 hover:text-white"
    :to="'/user/' + user.id"
  >
    <span>{{ user.id }}-</span>
    <h2>{{ user.name }}</h2>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TUserDetails } from "@/types/user";

defineProps<{ user: TUserDetails }>();
</script>
