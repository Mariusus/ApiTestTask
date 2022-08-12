<template>
  <v-app>
 <HomeComponent>
   <router-view></router-view>
 </HomeComponent>
  </v-app>
</template>

<script>
import HomeComponent from "./components/HomeComponent";

export default {
  components: {
    HomeComponent,
  },
}
</script>
