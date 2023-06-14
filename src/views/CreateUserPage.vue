<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/admin/users" />
        </ion-buttons>
        <ion-title>Création d'un utilisateur</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="logout">Se déconnecter</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label position="floating">Nom</ion-label>
          <ion-input v-model="name" type="text"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input v-model="password" type="password"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Groupe</ion-label>
          <ion-select v-model="group">
            <ion-select-option value="admin">Admin</ion-select-option>
            <ion-select-option value="user">Utilisateur</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <ion-button expand="full" @click="createUser">Créer l'utilisateur</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'CreateUserPage',

  data() {
    return {
      name: '',
      password: '',
      group: 'user',
    };
  },

  methods: {
    createUser() {
      // Récupérer les données de l'utilisateur à partir des variables "name", "password" et "group"
      const user = {
        name: this.name,
        password: this.password,
        group: this.group,
      };

      store.dispatch("createUser", user);
      console.log('Créer l\'utilisateur', user);
    },

    logout() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques à la page de création d'un utilisateur */
</style>
