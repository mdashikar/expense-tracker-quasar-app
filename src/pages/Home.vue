<template>
    <!-- This is an example component -->
  <section class="text-gray-700 font-mono bg">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="~/assets/opened_tabs_ly11.svg">
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-5xl mb-3 font-semibold text-gray-700">Store your spending with Expense Tracker</h1>
      <p class="mb-8 leading-relaxed text-2xl text-gray-500">This expense tracker was designed to help users see where their money goes every month and give users an idea of how much to budget weekly, monthly, yearly.</p>
      <div class="flex justify-center">
        <q-btn class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" to="/login">Get Started</q-btn>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.bg{
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1900' height='1200' preserveAspectRatio='none' viewBox='0 0 1900 1200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1132%26quot%3b)' fill='none'%3e%3cpath d='M1279.5318000639113 896.2264273632693L1159.2886965130615 767.2814855190801 1025.9928355222025 1012.1186117674495z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M137.22748160960475 476.6044121140999L25.26047595794954 783.3214154535066 307.1717261920668 738.6710598639855z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M922.1682011382269 410.524952876097L782.3826255610782 420.2997125318957 866.9375528333505 625.0906960697195z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1860.3856325895856 1068.4809751524656L2049.177677764571 835.7959814555232 1791.2236539690364 790.3117272780571z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1314.9870553127394 300.11707236432943L1402.2175821076455 478.9661565549113 1581.0666662982273 391.7356297600052 1493.8361395033212 212.88654556942333z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1463.6065814041885 1182.3611451289646L1637.6576398621287 1282.8495705823957 1701.3647488133051 971.52877016877z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M582.6535869011574 510.42296697295643L372.5194746727824 617.491644960232 479.5881526600579 827.6257571886069 689.722264888433 720.5570792013315z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1020.0195124113656 131.36845633262237L1148.649058474552 115.57473400011413 1060.6437019441964-69.47272392841143z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1549.751287701834 1003.0171145828153L1709.8231827895254 805.3447864978482 1512.1508547045582 645.2728914101567 1352.0789596168668 842.9452194951239z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1132'%3e%3crect width='1900' height='1200' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
}

</style>
