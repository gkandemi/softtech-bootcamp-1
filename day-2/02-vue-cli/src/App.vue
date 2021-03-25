<template>
  <div>
    <header>Bookmark App</header>
    <div class="container">
      <div class="bookmark--app--container">
        <app-bookmark-item :bookmarkItem="item" v-for="item in bookmarkList" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import appBookmarkItem from "@/components/appBookmarkItem";
export default {
  components: {
    appBookmarkItem
  },
  data() {
    return {
      bookmarkList: [
        {
          id: 1,
          title: "Kişisel Bilgiler",
          description: "Description 1",
          url: "http://gkandemir.com"
        },
        {
          id: 2,
          title: "Video İzle",
          description: "Description 2",
          url: "https://youtube.com"
        },
        {
          id: 3,
          title: "Taş Kağıt Makas Oyunu",
          description: "Description 3",
          url: "https://taskagitmakas.app"
        }
      ]
    };
  },
  methods: {
    deleteBookmarkItem(ID) {
      this.bookmarkList = this.bookmarkList.filter(b => b.id !== ID);
    }
  }
};
</script>
