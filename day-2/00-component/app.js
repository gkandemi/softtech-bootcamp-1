// const app = new Vue({
//     el : "#app",
//     data : {},
//     methods : {},
//     computed : {},
//     watch : {},
//     mounted(){},
//     created(){}
// })

const app = Vue.createApp({
  data() {
    return {};
  },
});

app.component("counter-app", {
  data() {
    return {
      counter: 0,
    };
  },
  template: `
    <div class="border text-center p-2 mb-2">
        <h3 class="mb-2">{{ counter }}</h3>
        <button @click="counter++" class="btn btn-lg btn-primary me-2">Arttır</button>
        <button @click="counter--" class="btn btn-lg btn-danger">Azalt</button>
    </div>`,
});

app.mount("#app");
