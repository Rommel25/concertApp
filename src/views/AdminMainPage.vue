<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Bienvenue sur l'application My Concert (Admin)</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="logoutUser">Se déconnecter</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <router-link to="/createConcert"> <ion-button expand="full">Créer un concert</ion-button> </router-link>
      <router-link to="/seeConcert"> <ion-button expand="full">Voir les concerts</ion-button> </router-link>
      <router-link to="/listCategorie"><ion-button expand="full">Gérer les catégories</ion-button></router-link>
      <router-link to="/listUsers"><ion-button expand="full">Gérer les utilisateurs</ion-button></router-link>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'AdminMainPage',

  methods: {
    logoutUser() {
      this.$router.push('/login');
    },

  },
};
</script>

<style scoped>
/* Styles spécifiques à la page Admin */
</style>
