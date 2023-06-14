<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/admin" />
        </ion-buttons>
        <ion-title>Liste des utilisateurs</ion-title>
        <ion-buttons slot="end">
          <router-link to="/createUser"> <ion-button @click="openCreateUserPage">Créer un utilisateur</ion-button> </router-link>
            <ion-button @click="logout">Se déconnecter</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div v-if="loading">Chargement en cours...</div>
      <div v-else>
        <div v-for="user in users" :key="user.id" class="user-card">
          <div class="user-details">
            <h2 class="user-name">{{ user.name }}</h2>
            <p class="user-email">Email: {{ user.email }}</p>
          </div>
          <div class="user-buttons">
            <ion-button @click="deleteUser(user.id)">Supprimer</ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'UserListPage',

  data() {
    return {
      users: [],
      loading: false,
    };
  },

  created() {
    this.fetchUsers();
  },

  methods: {
    fetchUsers() {
      this.loading = true;

      // Exemple de fausses données
      const fakeData = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
      ];

      this.users = fakeData;
      this.loading = false;
    },

    deleteUser(userId) {
      store.dispatch("deleteUser", userId);
      console.log('Supprimer l\'utilisateur', userId);
    },

    openCreateUserPage() {
      // Logique pour ouvrir la page de création d'un utilisateur
    },

    logout() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #f8f8f8;
}

.user-name {
  font-size: 24px;
  margin-bottom: 10px;
}

.user-email {
  font-size: 16px;
  margin-bottom: 10px;
}

.user-buttons {
  display: flex;
  gap: 10px;
}
</style>
