Vue.createApp({
  data() {
    return {
      title: "Event Dinlemek..",
      myNumber: 0,
      personalName: "Gokhan Kandemir",
      x: "-",
      y: "-",
    };
  },
  methods: {
    changeTitle() {
      this.title = "Bu Değiştirilmiş bir Başlık bilgisidir...";
      this.counter();
    },
    counter() {
      this.myNumber++;
    },
    getTitle() {
      return "##" + this.title + "##";
    },
    inputChanged(customValue, event) {
      // console.log("event :>> ", event);
      console.log("customValue :>> ", customValue);
      this.personalName = event.target.value;
      // console.log(event.target.value);
    },
    updateCoords(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
}).mount("#app");
