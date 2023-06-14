<template>
  <form @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Nom du concert</ion-label>
        <ion-input required=true type="text" placeholder="Nom du concert" v-model="concert.nom"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Description du concert</ion-label>
        <ion-textarea required=true col="5" placeholder="Description du concert" v-model="concert.description"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Catégorie du concert</ion-label>
        <ion-select required=true placeholder="Sélectionnez une catégorie" v-model="concert.categorie_id">
          <ion-select-option v-for="category in categories" :value="category.id" :key="category.id">{{ category.libelle }}</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Image du concert (URL)</ion-label>
        <ion-input required=true type="url" placeholder="URL de l'image" v-model="concert.image"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Date du concert</ion-label>
        <ion-input required=true type="datetime-local" placeholder="Date du concert" v-model="concert.date"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Heure du concert</ion-label>
        <ion-input required=true type="time" placeholder="Heure du concert" v-model="concert.heure"></ion-input>
      </ion-item>
    </ion-list>

    <ion-button v-if="is_edit_type_form" type="submit" expand="full">Modifier le concert</ion-button>
    <ion-button v-else type="submit" expand="full">Ajouter le concert</ion-button>
  </form>
</template>

<script lang="ts">
import {
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonTextarea,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { defineComponent, toRef } from "vue";

export default defineComponent({
  name: "ConcertFormComponent",
  props: ["concert_prop", "categories", "is_edit_type_form"],
  emits: ["submitForm"],
  setup(props, context) {
    const concert = toRef(props, "concert_prop");
    function submitForm() {
      console.log("concert")
      console.log(concert.value)
      context.emit("submitForm", concert);
    }

    return { submitForm, concert };
  },
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonTextarea,
    IonInput,
    IonSelect,
    IonSelectOption,
  },
});
</script>
