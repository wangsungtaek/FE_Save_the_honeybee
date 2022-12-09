<template>
  <v-app-bar>
    <v-container class="d-flex align-center py-0">
      <v-app-bar-title class="pl-0">
        <div class="d-flex justify-space-between align-center">
          <router-link to="/">
            <v-avatar
              rounded="0"
              class="mr-3"
              image="https://cdn.vuetifyjs.com/docs/images/logos/v.png"
            />
          </router-link>
          <div>So Wallet</div>
          <div class="">
            <router-link to="/dao">
              <v-btn variant="text">DAO</v-btn>
            </router-link>
            <router-link to="/docs">
              <v-btn variant="text">Docs</v-btn>
            </router-link>
            <router-link to="/discourse">
              <v-btn variant="text">Discourse</v-btn>
            </router-link>
          </div>
          <v-btn variant="outlined">
            Connect
          </v-btn>
        </div>
      </v-app-bar-title>
    </v-container>
  </v-app-bar>
</template>

<script>
  export default {

  }
</script>

<style>

</style>