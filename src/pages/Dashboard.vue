<template>
  <q-page class="q-ma-lg root">
    <div class="grid grid-cols-5 gap-0">
        <div class="col-span-4 bg-gray-400 left-side">
          <h2 class="text-3xl font-bold text-blue-800">Expense Tracker</h2>
        </div>
        <div class="col-span-1 bg-gray-200 right-side">
          <h2 class="text-3xl font-bold text-dark">Wallet </h2>
        </div>
      </div>
  </q-page>
</template>

<script>
// typical import
import { TimelineLite } from "gsap";

export default {
  name: "PageIndex",
  mounted() {
    const { text } = this.$refs;
    const timeline = new TimelineLite();

    timeline.to(text, 1, {
      x: 20,
    });
  },
};
</script>
<style lang="scss" scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.root{
  margin: 0;
  overflow-x: hidden;
  .left-side, .right-side{
    height: 100vh;
  }
}


</style>
