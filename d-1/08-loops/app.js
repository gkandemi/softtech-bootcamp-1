Vue.createApp({
  data() {
    return {
      petList: [],
    };
  },
  methods: {
    addNewPet(event) {
      this.petList.push(event.target.value);
      event.target.value = "";
    },
  },
}).mount("#app");
