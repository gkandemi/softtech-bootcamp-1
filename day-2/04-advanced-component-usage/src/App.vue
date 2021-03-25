<template>
  <div class="container">
    <h3>Modal Testi..</h3>
    <button @click="modalShow = true">Modal Aç</button>
    <app-modal v-if="modalShow" @hide-event="modalShow = false">
      <template #header>
        <h3>bir içerik yazabilirsiniz..</h3>
      </template>
      <template v-slot:default>
        <img
          width="200"
          src="https://softtech.com.tr/wp-content/uploads/2019/07/Softtech-kap%C4%B1lar%C4%B1n%C4%B1-gen%C3%A7-m%C3%BChendislere-a%C3%A7t%C4%B1.png"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, soluta dolores maxime vero aperiam porro similique id? Vero, libero
          accusamus dolorem deleniti cum aspernatur accusantium doloribus qui beatae commodi optio.
        </p>
      </template>
      <template v-slot:footer>
        <button>Kayıt Ol</button>
      </template>
    </app-modal>
  </div>
</template>
<script>
import appModal from "@/components/appModal";
export default {
  components: {
    appModal
  },
  data() {
    return {
      modalShow: false
    };
  }
};
</script>
