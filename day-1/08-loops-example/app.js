Vue.createApp({
  data() {
    return {
      categoryList: null,
      courseName: null,
      conceptName: null,
      searchKey: "",
      conceptOptionList: [
        {
          name: "Frontend",
          color: "bg-warning",
        },
        {
          name: "Backend",
          color: "bg-success",
        },
        {
          name: "DevOPS",
          color: "bg-dark",
        },
        {
          name: "Cloud",
          color: "bg-info",
        },
      ],
    };
  },
  methods: {
    addNewCategory(event) {
      this.categoryList.push(event.target.value);
      event.target.value = "";
    },
    onSubmit() {
      console.log(this.courseName, this.conceptName);
      this.categoryList.push({
        title: this.courseName,
        id: new Date().getTime(),
        concept: {
          ...this.conceptOptionList.find((c) => c.name === this.conceptName),
        },
      });
      this.courseName = null;
      this.conceptName = null;
    },
    deleteItem(itemID) {
      this.categoryList = this.categoryList.filter((c) => c.id !== itemID);
    },
  },
  created() {
    setTimeout(() => {
      this.categoryList = [
        {
          title: "Vue.js",
          id: 1,
          concept: {
            name: "Frontend",
            color: "bg-warning",
          },
        },
        {
          title: "JavaScript",
          id: 2,
          concept: {
            name: "Frontend",
            color: "bg-warning",
          },
        },
        {
          title: "PHP",
          id: 3,
          concept: {
            name: "Backend",
            color: "bg-success",
          },
        },
        {
          title: ".Net",
          id: 4,
          concept: {
            name: "Backend",
            color: "bg-success",
          },
        },
        {
          title: "React",
          id: 5,
          concept: {
            name: "Frontend",
            color: "bg-warning",
          },
        },
        {
          title: "Angular",
          id: 6,
          concept: {
            name: "Frontend",
            color: "bg-warning",
          },
        },
        {
          title: "Svelte",
          id: 7,
          concept: {
            name: "Frontend",
            color: "bg-warning",
          },
        },
        {
          title: "Webpack",
          id: 8,
          concept: {
            name: "Frontend",
            color: "bg-warning",
          },
        },
        {
          title: "GO",
          id: 9,
          concept: {
            name: "Backend",
            color: "bg-success",
          },
        },
        {
          title: "Python",
          id: 10,
          concept: {
            name: "Backend",
            color: "bg-success",
          },
        },
        {
          title: "Docker",
          id: 11,
          concept: {
            name: "DevOPS",
            color: "bg-dark",
          },
        },
        {
          title: "AWS",
          id: 12,
          concept: {
            name: "Cloud",
            color: "bg-info",
          },
        },
      ];
    }, 1000);
  },
  computed: {
    categoryAvailable() {
      return this.categoryList !== null && this.categoryList.length > 0;
    },
    filterItems() {
      return this.categoryList.filter((c) => c.title.toLowerCase().includes(this.searchKey.toLowerCase()));
    },
  },
}).mount("#app");
