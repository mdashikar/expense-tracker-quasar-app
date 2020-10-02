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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1900' height='1200' preserveAspectRatio='none' viewBox='0 0 1900 1200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1074%26quot%3b)' fill='none'%3e%3cpath d='M49.0602210366893 1004.673078594705L112.95728590279506 1119.9464350348358 253.91878812993818 966.4641595156118z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1051.0283606247692 86.0303464889496L807.6554883427962-54.79046989584022 803.3658008477095 190.9655621056254z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1209.4254388213312-113.54656324360917L995.9837576476767 35.90691088233717 1145.4372317736231 249.34859205599162 1358.8789129472775 99.8951179300453z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M523.400345644703 1335.156113234135L725.7586000636162 1188.134235505866 578.7367223353469 985.7759810869526 376.3784679164337 1132.7978588152218z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M296.09611572203863 291.789822584042L140.45688357087062 51.625647620111465 23.008461634306343 272.51400306937074z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M637.4550239121975 518.4404800149548L448.26932171652174 569.132636137801 498.96147783936794 758.3183383334767 688.1471800350437 707.6261822106305z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1650.7524119779082 576.1463326407173L1388.5839074198702 661.3300435035503 1473.7676182827033 923.4985480615883 1735.9361228407413 838.3148371987553z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1659.8828531356428 799.3983153329151L1717.4768559047538 1070.3567948858595 1988.435335457698 1012.7627921167484 1930.841332688587 741.8043125638042z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1837.3562024167757 1209.7581945093318L1731.3811373294031 861.9441753511289 1510.5881408871137 1090.582016239773z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1074'%3e%3crect width='1900' height='1200' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  height: 100vh;
}

</style>
