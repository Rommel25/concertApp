<template>
  <div class="edit-concert">
    <h1>Éditer le concert</h1>
    <ion-buttons slot="end">
      <ion-button @click="logoutUser">Se déconnecter</ion-button>
    </ion-buttons>
    <form @submit.prevent="updateConcert">
      <div class="form-group">
        <label for="nom">Nom du concert</label>
        <input type="text" id="nom" v-model="editedConcert.nom" required>
      </div>
      <div class="form-group">
        <label for="categorie">Catégorie</label>
        <input type="text" id="categorie" v-model="editedConcert.categorie" required>
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" id="date" v-model="editedConcert.date" required>
      </div>
      <div class="form-group">
        <label for="heure">Heure</label>
        <input type="time" id="heure" v-model="editedConcert.heure" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="editedConcert.description" required></textarea>
      </div>
      <div class="form-group">
        <button type="submit">Enregistrer</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "EditConcertPage",
  setup() {
    const editedConcert = ref({
      nom: "",
      categorie: "",
      date: "",
      heure: "",
      description: "",
    });
    const router = useRouter();
    const { idConcert } = router.params;

    // Charger les données du concert à éditer
    // Vous pouvez utiliser la même logique que dans la page de détails pour récupérer les données du concert depuis l'API et les assigner à editedConcert.

    function updateConcert() {
      // Logique pour mettre à jour le concert
      // Vous pouvez utiliser une requête PUT vers l'API pour mettre à jour le concert avec les nouvelles valeurs dans editedConcert.
    }

    function logoutUser() {
      this.$router.push('/login');
    }

    function cancelEdit() {
      router.push(`/concerts/${idConcert}`);
    }

    return {
      editedConcert,
      updateConcert,
      cancelEdit,
      logoutUser
    };
  },
};
</script>

<style>
.edit-concert {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
}

label {
  font-size: 16px;
  margin-bottom: 5px;
}

input[type="text"],
input[type="date"],
input[type="time"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #008cba;
  margin-right: 10px;
}

button[type="submit"]:hover,
button[type="submit"]:focus,
button[type="submit"]:active {
  background-color: #005a75;
}

button[type="submit"]:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button[type="submit"]:disabled:hover,
button[type="submit"]:disabled:focus,
button[type="submit"]:disabled:active {
  background-color: #ccc;
}
</style>
