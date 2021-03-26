<template>
  <div class="container">
    <div class="row">
      <div class="col mt-5">
        <h3 class="text-center mb-3">
          Müşterinin Faturaları ({{ $route.params.clientID }})
        </h3>
        <table v-if="isLoad" class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <div v-else class="alert alert-warning">
          Şu an kayıtlar sorgulanıyor...
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    fetchInvoice() {
      this.isLoad = false;
      setTimeout(() => {
        this.isLoad = true;
      }, 2000);
    },
  },
  beforeCreate() {
    console.log("beforeCreate Calisti..");
  },
  created() {
    console.log("Created Calisti..");
    this.fetchInvoice();
  },
  beforeRouteEnter(to, from, next) {
    console.log("to", to, from);
    if (localStorage.authKey) {
      next();
    } else {
      next(false);
    }
    // localStorage.authKey;
    // next(false);
  },
  beforeRouteUpdate() {
    console.log("Route update edildi..");
    this.fetchInvoice();
  },
};
</script>
