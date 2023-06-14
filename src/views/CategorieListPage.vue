<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/admin" />
        </ion-buttons>
        <ion-title>Liste des catégories</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="logout">Se déconnecter</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div v-if="loading">Chargement en cours...</div>
      <div v-else>
        <div v-for="category in categories" :key="category.id" class="category-card">
          <div class="category-details">
            <h2 class="category-title">{{ category.name }}</h2>
          </div>
          <div class="category-buttons">
            <router-link :to="`/editCategorie/${category.id}`"><ion-button @click="editCategory(category.id)">Modifier</ion-button></router-link>
            <ion-button @click="deleteCategory(category.id)">Supprimer</ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'CategoryListPage',

  data() {
    return {
      categories: [],
      loading: false,
    };
  },

  created() {
    this.fetchCategories();
  },

  methods: {
    fetchCategories() {
      this.loading = true;

      // Exemple de fausses données
      const fakeData = [
        { id: 1, name: 'Rock' },
        { id: 2, name: 'Pop' },
        { id: 3, name: 'Jazz' },
      ];

      this.categories = fakeData;
      this.loading = false;
    },

    editCategory(categoryId) {
      // Logique pour éditer la catégorie
      console.log('Éditer la catégorie', categoryId);
    },

    deleteCategory(categoryId) {
      store.dispatch("deleteCategorie", categoryId);
      console.log('Supprimer la catégorie', categoryId);
    },

    logout() {
      this.$router.push('/login');
      },
  },
};
</script>

<style scoped>
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #f8f8f8;
}

.category-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.category-buttons {
  display: flex;
  gap: 10px;
}
</style>
