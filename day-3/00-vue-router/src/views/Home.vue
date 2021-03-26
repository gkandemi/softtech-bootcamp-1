<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="text-center">Fatura Ödemenin En Kolay Yolu!!!</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quasi,
          nihil dignissimos, provident commodi molestias beatae repellendus
          cumque earum, modi corporis? Vel nulla laborum distinctio quasi. Quis
          necessitatibus doloribus adipisci!
        </p>

        <hr />

        <div class="row g-3">
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              placeholder="Müşteri Numarası"
              v-model="clientID"
            />
          </div>
          <div class="col-auto">
            <button @click="fetchAllInvoices" class="btn btn-primary mb-3">
              Faturaları Görüntüle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clientID: null,
    };
  },
  methods: {
    fetchAllInvoices() {
      this.$router.push(`/invoices/${this.clientID}`);
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log("to, from :>> ", to, from);
    if (
      confirm("Kaydedilmemiş bilgileriniz mevcuttur ilerlemek istiyor musunuz?")
    ) {
      next();
    } else {
      next(false);
    }
  },
};
</script>
