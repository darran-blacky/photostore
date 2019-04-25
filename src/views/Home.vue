<template>
  <div class="home">
    <Carousel :items="images"/> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Carousel from '@/components/home-page/Carousel.vue';
import {
    mapGetters,
    mapMutations,
  } from 'vuex';

export default (Vue as VueConstructor<Vue>).extend({
   components: {
    Carousel,
  },
  computed: {
     ...mapGetters(['images']),
  },
});
</script>

