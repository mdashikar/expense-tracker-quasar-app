<template>
  <q-page class="q-ma-lg root">
    <div class="grid grid-cols-5 gap-0">
      <div class="col-span-4 bg-gray-400 left-side px-6 ">
        <section class="head flex p-4">
          <q-icon size="lg" name="local_mall" color="text-white pt-4" />
          <h2 class="text-3xl font-bold text-blue-600 ">Home Wallet</h2>
        </section>
        <section class="body-font">
          <div class="px-2 mx-auto">
            <div class="flex flex-wrap">
              <div class="flex p-2 lg:w-3/3 md:w-2/2 w-full">
                <div class="flex-1">
                  <h2 class="text-lg text-gray-800 font-medium">
                    Monday October 15, 2020
                  </h2>
                </div>
                <div class="justify-end">
                  <h6 class="text-md text-gray-600 font-medium py-4">
                    Valued: $140.00
                  </h6>
                </div>
              </div>
              <div class="p-2 lg:w-3/3 md:w-2/2 w-full ">
                <div
                  class="bg-white h-full flex items-center border-gray-200 border p-4 rounded-lg"
                >
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-800 title-font font-medium text-2xl">
                      Restaurants & Cafe
                    </h2>
                    <p class="text-gray-500 text-lg">20 August 2020</p>
                  </div>
                  <div class="justify-end">
                    <q-btn icon="edit" class="mx-2" />
                    <q-btn icon="clear" class="mx-2"/>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-3/3 md:w-2/2 w-full">
                <div
                  class="bg-white h-full flex items-center border-gray-200 border p-4 rounded-lg"
                >
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-800 title-font font-medium text-2xl">
                      Clothes & Shopping
                    </h2>
                    <p class="text-gray-500 text-lg">20 Sept. 2020</p>
                  </div>
                  <div class="justify-end">
                    <q-btn icon="edit" class="mx-2" />
                    <q-btn icon="clear" class="mx-2"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="col-span-1 bg-gray-200 right-side px-6">
        <section class="wallets border-b">
          <h4 class="text-2xl font-bold text-gray-600 pt-4 mb-2">Wallets</h4>
          <a href="#" class="py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-sm font-medium text-gray-800 leading-none">
                Home Wallet
              </p>
              <p class="text-xs text-gray-500">$ 23,000</p>
            </div>
          </a>
        </section>
        <section class="categories">
          <h4 class="text-2xl font-bold text-gray-600 pt-4 mb-2">Categories</h4>
          <a href="#" class="py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-sm font-medium text-gray-800 leading-none">
                Add members
              </p>
              <p class="text-xs text-gray-500">Add/manage users &amp; teams</p>
            </div>
          </a>
          <a href="#" class="py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-sm font-medium text-gray-800 leading-none">
                Account settings
              </p>
              <p class="text-xs text-gray-500">
                Usage, billing, branding, teams
              </p>
            </div>
          </a>
          <a href="#" class="py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-sm font-medium text-gray-800 leading-none">
                Personal settings
              </p>
              <p class="text-xs text-gray-500">Email, profile, notifications</p>
            </div>
          </a>
          <a href="#" class="py-2 hover:bg-gray-100 flex">
            <div class="text-green-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-sm font-medium text-gray-800 leading-none">
                Apps &amp; integrations
              </p>
              <p class="text-xs text-gray-500">Google, slack, mail</p>
            </div>
          </a>
        </section>
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

.root {
  margin: 0;
  overflow-x: hidden;
  .left-side,
  .right-side {
    height: 100vh;
  }
}
</style>
