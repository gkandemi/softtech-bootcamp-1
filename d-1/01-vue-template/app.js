Vue.createApp({
  data() {
    return {
      title: "Bu Vue Tarafından gelmiş bir Başlık!!!",
      description: "Bu Vue Tarafından gelmiş bir açıklama!!",
      erdemSen: "Bu custom bir mesaj..",
      htmlTemplate: "<b>Bu benim kalın mesajım</b> <br /> <i>Bu da italik</i>",
      link: "https://www.youtube.com/kablosuzkedii",
      imageUrl: "https://i.ytimg.com/vi/sfEq69Iw-Wo/maxresdefault.jpg",
      imageAltText: "bilginc-akademi",
    };
  },
}).mount("#app");
