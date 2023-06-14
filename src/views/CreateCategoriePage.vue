<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/admin" />
        </ion-buttons>
        <ion-title>Créer une catégorie</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="logout">Se déconnecter</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item>
        <ion-label position="floating">Intitulé de la catégorie</ion-label>
        <ion-input v-model="categoryName" type="text"></ion-input>
      </ion-item>

      <ion-button expand="full" @click="createCategory">Valider</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'CreateCategoryPage',

  data() {
    return {
      categoryName: '',
    };
  },

  methods: {
    createCategory() {
      // Logique de création de la catégorie avec this.categoryName

      // Redirection vers la page de gestion des catégories
      this.$router.push('/admin/categories');
    },

    logout() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques à la page de création de catégorie */
</style>
