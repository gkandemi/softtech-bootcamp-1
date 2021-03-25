Vue.createApp({
  data() {
    return {
      petList: [
        { gender: "cat", name: "Poğaça" },
        { gender: "dog", name: "Larissa" },
        { gender: "dog", name: "Pars" },
        { gender: "fish", name: "Ciklet" },
      ],
      aboutMe: {
        name: "Depte",
        lname: "Kandemir",
        birthDay: "14-02-2018",
      },
    };
  },
  methods: {
    getPetList(gender) {
      return this.petList.filter((p) => p.gender === gender);
    },
    getAboutMe() {
      return this.aboutMe;
    },
  },
}).mount("#app");
