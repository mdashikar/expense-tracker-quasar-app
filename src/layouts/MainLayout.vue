<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Expense Tracker
        </q-toolbar-title>
        <q-btn flat dense icon="power_settings_new" label="Logout" @click="logout" />
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        :width="250"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item active clickable v-ripple exact v-for="item in linksData" :key="item.title" :to="item.link">
              <q-item-section avatar>
                <q-icon :name="item.icon" style="font-size: 2em;" />
              </q-item-section>

              <q-item-section>
                {{item.title}}
              </q-item-section>
            </q-item>

            
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.pixabay.com/photo/2020/04/30/05/13/sunrise-5111409_960_720.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://joeschmoe.io/api/v1/random">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


const linksData = [
  {
    title: 'Expense',
    icon: 'list',
    link: '/'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings'
  }
];

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      linksData,
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('auth/signOut')
        .then(user => {
            this.$router.replace({ name: 'home' }).catch(() => {})
        })
        .catch(error => {
            this.$q.notify('Error occured while logging out user!')
        })
    }
  }
}
</script>
