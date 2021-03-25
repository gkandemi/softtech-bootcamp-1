const app = Vue.createApp({
  data() {
    return {
      showBox: false,
      username: null,
      invalid: false,
      phone: 0,
    };
  },
  methods: {
    onSubmit() {
      if (!this.username) {
        this.invalid = true;
      } else {
        this.invalid = false;
      }
    },
  },
  watch: {
    username() {
      //   this.submitted = false;
    },
  },
});
app.mount("#app");
