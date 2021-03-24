Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
      counterResult: "",
    };
  },
  methods: {
    inc() {
      this.counter++;
    },
    dec() {
      this.counter--;
    },
    inc2() {
      this.counter2++;
    },
    dec2() {
      this.counter2--;
    },
  },
  computed: {
    getCounter() {
      console.log("Counter1 Değeri Değişti...");
      return `Counter 1'in Değeri : ${this.counter}`;
    },
    getCounter2() {
      console.log("Counter2 Değeri Değişti...");
      return `Counter 2'in Değeri : ${this.counter2}`;
    },
    updatedCounterValue() {
      return this.counter + 2;
    },
    // counterResult() {
    //   return this.counter >= 10 ? "Counter1 10 değerinden büyüktür.." : "-";
    // },
  },
  watch: {
    counter(newValue, oldValue) {
      console.log(`${oldValue} => ${newValue}`);
      if (newValue === 5) {
        alert("Değer Aşımı");
      }
    },
    getCounter(value) {
      console.log("Watcher", value);
    },
  },
}).mount("#app");
