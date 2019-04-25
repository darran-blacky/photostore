
<template>
  <v-btn
    fab
    small
    color="primary"
    :style="styles"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script lang='ts'>
  export default {
    name: 'BaseBtn',
    inheritAttrs: false,
    props: {
      square: Boolean,
    },
    computed: {
      styles(): string {
        return {
          borderRadius: this.square ? '2px' : undefined,
        };
      },
    },
  };
</script>