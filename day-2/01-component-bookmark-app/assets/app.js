const app = Vue.createApp({
  data() {
    return {
      bookmarkList: [
        {
          id: 1,
          title: "Bookmark 1",
          description: "Description 1",
          url: "url1",
        },
        {
          id: 2,
          title: "Bookmark 2",
          description: "Description 2",
          url: "url2",
        },
        {
          id: 3,
          title: "Bookmark 3",
          description: "Description 3",
          url: "url3",
        },
      ],
    };
  },
});

app.component("bookmark-item", {
  data() {
    return {};
  },
  template: `
<div class="bookmark-item">
    <div class="header">
        <h3>Bookmark 1</h3>
        <button class="btn-sm btn-danger">Kaydı Sil</button>
    </div>
    <p class="mt-20 mb-20">Açıklama</p>
    <button class="btn-primary btn-sm">Göster</button>
</div>
  `,
});

app.mount("#app");
