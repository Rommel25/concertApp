<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Connexion</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label position="floating">Identifiant</ion-label>
          <ion-input v-model="login" type="text"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input v-model="password" type="password"></ion-input>
        </ion-item>
      </ion-list>

      <ion-button expand="full" @click="loginUser">Se connecter</ion-button>

      <div v-if="errorMessage" class="ion-padding" color="danger">
        {{ errorMessage }}
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage', // Renommage du composant

  data() {
    return {
      login: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('http://localhost:8082/api/user/login', {
          login: "client",
          password: "client",
        });
      console.log('test');
        // Vérification de la réponse
        if (response.data.error) {
          this.errorMessage = response.data.error;
        } else {
          // Connexion réussie
          const { role, id, token } = response.data;
          // Faire quelque chose avec les données de l'utilisateur connecté
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.ion-padding {
  padding: 16px;
}
</style>
