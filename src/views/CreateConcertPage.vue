<template>
  <layout-component page-title="Add Concert Page" :page-default-back-link="backLink">
    <template v-slot:content-page>
      <concert-form-component
          :concert_prop="concert"
          :categories="categories"
          @submit-form="saveConcert"
          :is_edit_type_form="false"
      ></concert-form-component>
    </template>
  </layout-component>
</template>

<script>
import { defineComponent } from "vue";
import ConcertFormComponent from "../components/formComponent.vue";
import LayoutComponent from "../components/layoutComponent.vue";
import { useStore } from "@/store";
import { toastController } from "@ionic/vue";
import { useRouter } from "vue-router";
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';

export default defineComponent({
  name: "CreateConcert",
  setup() {
    const store = useStore();
    const router = useRouter();
    const concert = {
      nom: "",
      description: "",
      categorie_id: 1,
      image: "",
      date: "",
      heure: "",
      user_id: 1
    };
    const categories = [
      { id: 1, libelle: "Rock" },
      { id: 2, libelle: "Pop" },
      { id: 3, libelle: "Jazz" },
      { id: 4, libelle: "Classique" },
    ];

    async function showToast(type_color = "success", message) {
      const toast = await toastController.create({
        message: message,
        duration: 2000,
        color: type_color,
      });
      toast.present();
    }

    function saveConcert(concertEmit) {
      store.dispatch("addConcert", concertEmit);
      showToast("success", "Concert ajouté");
      // router.push("/tabs/tab1");
    }

    return {
      concert,
      categories,
      saveConcert,
      backLink: "/tabs/tab2",
    };
  },
  components: {
    LayoutComponent,
    ConcertFormComponent,
  },
});
</script>
