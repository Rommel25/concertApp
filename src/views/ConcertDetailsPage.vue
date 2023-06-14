<template>
  <div class="concert-details">
    <h1>Détails du concert</h1>
    <div v-if="concert">
      <h2>{{ concert.nom }}</h2>
      <p>Catégorie : {{ concert.categorie }}</p>
      <p>Date : {{ concert.date }}</p>
      <p>Heure : {{ concert.heure }}</p>
      <p>Description : {{ concert.description }}</p>

      <!-- Ajoutez ici les autres éléments de la page détails -->
    <div class="concert-buttons">
      <router-link :to="`/editConcert/${concert.id}`">Éditer</router-link>
      <button @click="deleteConcert(concert.id)">Supprimer</button>
    </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "ConcertDetailsPage",



  setup() {
    const concert = ref(null);
    const loading = ref(false);
    const router = useRouter();
    // const { id } = router.params;

    onMounted(() => {

      // Assigner les fausses données aux concerts
      const fakeData = {
        id: 1,
        nom: "Concert 1",
        categorie: "Rock",
        date: "2023-06-01",
        heure: "20:00",
        description: "Description du concert 1",
      };

      concert.value = fakeData;
      loading.value = true;

      // Effectuez ici votre appel API pour récupérer les détails du concert
      // axios
      //     .get(`https://localhost:8082/api/concerts/${id}`)
      //     .then((response) => {
      //       // concert.value = response.data;
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     })
      //     .finally(() => {
      //       loading.value = false;
      //     });
    });

    function deleteConcert(concertId) {
      store.dispatch("deleteConcert", concertId);
      console.log("Supprimer le concert", concertId);
    }

    return {
      concert,
      loading,
      deleteConcert
    };
  },
};
</script>

<style>
.concert-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

/* Ajoutez ici les styles supplémentaires pour la mise en page de la page détails */
</style>
