<template>
  <button :data="user?.id" class="border border-white rounded px-4 py-2" :class="getButtonStyles">
    <i class="icon-map" :style="{ color: 'red' }" />
    <slot>
      <span> Button </span>
    </slot>
  </button>
</template>

<script setup lang="ts">
const user = {};

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})

enum BUTTON_VARIANTS {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

const buttonStyles : Record<BUTTON_VARIANTS, string> = {
  [BUTTON_VARIANTS.PRIMARY]: 'bg-blue text-white hover:bg-blue/80',
  [BUTTON_VARIANTS.SECONDARY]: 'bg-gray text-white'
}

const getButtonStyles = computed(() => buttonStyles[props.variant])

const fetchUser = () => {};

onMounted(() => {
  fetchUser();
});
</script>
