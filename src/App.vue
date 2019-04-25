<template>
  <v-app>
    <core-header />


    <core-toolbar />

    <core-view />

    <core-footer />

  </v-app>
</template>

<script lang="ts">
import CoreFooter from '@/components/core/Footer.vue';
import CoreHeader from '@/components/core/Header.vue';
import CoreToolbar from '@/components/core/Toolbar.vue';
import CoreView from '@/components/core/View.vue';


export default {
  name: 'App',
  components: {
      CoreHeader,
      CoreFooter,
      CoreToolbar,
      CoreView,
  },
  data: () => {
    return {
      //
    };
  },
};
</script>
