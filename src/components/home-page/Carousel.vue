<template>
    <v-container
    >
    <v-carousel
      delimiter-icon="stop"
      prev-icon="mdi-arrow-left"
      next-icon="mdi-arrow-right"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>
<script lang='ts'>
export default {
  props: {
    items: Array,
  },
};
</script>