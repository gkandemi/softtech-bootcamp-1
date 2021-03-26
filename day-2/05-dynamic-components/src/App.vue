<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-8 offset-2 p-2 border">
        <h3>Dinamik Componentler</h3>
        <hr />
        <button @click="activeComponent = 'redComp'" class="btn btn-danger me-1">Kırmızı</button>
        <button @click="activeComponent = 'greenComp'" class="btn btn-success me-1">Yeşil</button>
        <button @click="activeComponent = 'blueComp'" class="btn btn-primary">Mavi</button>
        <div class="mt-4">
          <!-- <red-comp v-if="activeComponent === 'red'"></red-comp>
          <blue-comp v-if="activeComponent === 'blue'"></blue-comp>
          <green-comp v-if="activeComponent === 'green'"></green-comp> -->
          <keep-alive>
            <component @payback-event="eventWorked" :is="activeComponent"> {{ activeComponent }} Bölgesidir... </component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import redComp from "@/components/redComp";
import greenComp from "@/components/greenComp";
import blueComp from "@/components/blueComp";
export default {
  components: {
    redComp,
    greenComp,
    blueComp
  },
  data() {
    return {
      activeComponent: "redComp"
    };
  },
  methods: {
    eventWorked() {
      alert();
    }
  }
};
</script>
