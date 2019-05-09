<template>
  <v-app id="sandbox" :dark="dark">
       <v-toolbar clipped-left app absolute>
      <router-link to="Projects" class="ma-2">Projects</router-link>
      <router-link to="/Photography" class="ma-2">Photography</router-link>
      <v-spacer></v-spacer>
        <router-link to="/">
          <img src="./assets/logo.png" height="40px" alt="" srcset="">
        </router-link>
        <v-spacer></v-spacer>
        <router-link to="/Contact" class="ma-2">Contact</router-link>
        <router-link to="/About" class="ma-2">About me</router-link>
      </v-toolbar>
  <v-content>
   <router-view>
     
   </router-view>
  </v-content>

    <v-footer inset app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dark: true,
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false
      },
      footer: {
        inset: false
      }
    })
  }
  import header from './components/header.vue'
import content from './components/content.vue'

</script>

<style scoped>
 .ma-2 {
   text-decoration: none;
   color: white;
   font-size: 1.5vh !important;
 }
</style>


