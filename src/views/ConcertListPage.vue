<template>
  <div class="concert-list">
    <div class="header">
      <router-link :to="`/login`"><button>Se déconnecter</button> </router-link>
      <router-link :to="`/createConcert`"><button>Ajouter un concert</button> </router-link>
    </div>
    <h1>Liste des concerts</h1>
<!--    <div v-if="loading">Chargement en cours...</div>-->

      <div v-for="concert in concerts" :key="concert.id" class="concert-card">
        <div class="concert-details">
          <h2 class="concert-title">{{ concert.nom }}</h2>
          <p class="concert-info">Catégorie : {{ concert.categorie }}</p>
          <p class="concert-info">Date : {{ concert.date }}</p>
          <p class="concert-info">Heure : {{ concert.heure }}</p>
          <p class="concert-info">Description : {{ concert.description }}</p>
        </div>
        <div class="concert-buttons">
          <router-link :to="`/concert`">Détails</router-link>
          <router-link :to="`/editConcert/${concert.id}`">Éditer</router-link>
          <button @click="deleteConcert(concert.id)">Supprimer</button>
        </div>
      </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';

export default {
  name: "ConcertListPage",


  setup() {
    const concerts = ref([]);
    const loading = ref(false);

    onMounted(() => {
      loading.value = true;

      // Exemple de fausses données
      const fakeData = [
        {
          id: 1,
          nom: "Concert 1",
          categorie: "Rock",
          date: "2023-06-01",
          heure: "20:00",
          description: "Description du concert 1",
        },
        {
          id: 2,
          nom: "Concert 2",
          categorie: "Pop",
          date: "2023-06-02",
          heure: "18:30",
          description: "Description du concert 2",
        },
      ];

      // Assigner les fausses données aux concerts
      concerts.value = fakeData;

      loading.value = false;
    });



    function deleteConcert(concertId) {
      store.dispatch("deleteConcert", concertId);
      console.log("Supprimer le concert", concertId);
    }

    function addConcert() {
      // Logique pour ajouter un concert
      console.log("Ajouter un concert");
    }

    function logout() {
      this.$router.push('/login');
    }

    return {
      concerts,
      loading,
      deleteConcert,
      logout,
      addConcert,
    };
  },
};
</script>

<style>
.concert-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

}

.header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.concert-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #f8f8f8;
}

.concert-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.concert-info {
  font-size: 16px;
  margin-bottom: 10px;
}

.concert-buttons {
  display: flex;
  gap: 10px;
}
</style>
