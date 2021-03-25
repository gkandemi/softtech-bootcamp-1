Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {},
  beforeCreate() {
    console.log("beforeCreate çalıştı...");
  },
  created() {
    console.log("created çalıştı...");
    this.counter = 10;
  },
  beforeMount() {
    console.log("beforeMount çalıştı...");
  },
  mounted() {
    console.log("mounted çalıştı...");
  },
  beforeUpdate() {
    console.log("beforeUpdate çalıştı...");
  },
  updated() {
    console.log("updated çalıştı...");
  },
}).mount("#app");
