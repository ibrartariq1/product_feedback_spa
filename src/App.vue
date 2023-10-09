<template>
  <div id="app">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "./components/layouts/navbar.vue";
import util from '@/assets/js/util';


export default {
  name: 'App',
  components: {
    NavbarComponent,
  },
  watch: {
    $route(nval, oval) {
      let self = this;
      if (oval.path) {
        setTimeout(() => {
          util.auth_middleware(self);
        }, 500);
      }
    },
  },
  mounted() {
    
    util.auth_middleware(this);
  },
}
</script>

