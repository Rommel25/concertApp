<template>
    <ion-header>
      <ion-toolbar>
        <ion-title>Bienvenue sur l'application My Concert</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="logoutUser">Se déconnecter</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <router-link to="/createConcert"> <ion-button expand="full">Créer un concert</ion-button> </router-link>
      <router-link to="/seeConcert"> <ion-button expand="full">Voir les concerts</ion-button> </router-link>
    </ion-content>
  <router-view></router-view>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonButton,
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/vue";
import { defineComponent,computed } from "vue";
export default {
  name: 'UserMainPage',

  methods: {
    logoutUser() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques à la page Main */
</style>
