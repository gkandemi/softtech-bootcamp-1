<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="text-center">Hakkımda Sayfasına hoş geldiniz...</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quasi,
          nihil dignissimos, provident commodi molestias beatae repellendus
          cumque earum, modi corporis? Vel nulla laborum distinctio quasi. Quis
          necessitatibus doloribus adipisci!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quasi,
          nihil dignissimos, provident commodi molestias beatae repellendus
          cumque earum, modi corporis? Vel nulla laborum distinctio quasi. Quis
          necessitatibus doloribus adipisci!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quasi,
          nihil dignissimos, provident commodi molestias beatae repellendus
          cumque earum, modi corporis? Vel nulla laborum distinctio quasi. Quis
          necessitatibus doloribus adipisci!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quasi,
          nihil dignissimos, provident commodi molestias beatae repellendus
          cumque earum, modi corporis? Vel nulla laborum distinctio quasi. Quis
          necessitatibus doloribus adipisci!
        </p>
        <button @click="goToContact" class="btn btn-sm btn-info">
          Benimle çalışmak ister misiniz?
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {},
  methods: {
    goToContact() {
      // this.$router.push("/contact");
      this.$router.push({ name: "Contact" });
    },
  },
};
</script>
