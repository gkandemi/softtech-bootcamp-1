Vue.createApp({
  data() {
    return {
      activeClass: "",
      counter: 0,
      demoClass: {
        red: true,
        border: true,
        "border-radius": true,
        biggerFont: true,
      },
      name: null,
      submitted: false,
      activeBoxStyle: {
        marginTop: "10px",
        backgroundColor: "blue",
        borderRadius: "10px",
        border: "2px solid yellow",
      },
    };
  },
  methods: {
    onSubmit() {
      this.submitted = true;
    },
  },
  computed: {
    activeBoxClass() {
      return {
        // [this.activeClass]: true,
        red: this.counter >= 0 && this.counter <= 5,
        purple: this.counter > 5,
        border: this.counter >= 5 && this.counter <= 10,
        "border-radius": this.counter >= 7 && this.counter <= 12,
        biggerFont: this.counter >= 20,
      };
    },
    validationClasses() {
      return {
        "invalid-border": this.submitted && !this.name,
      };
    },
  },
}).mount("#app");
