<template>
    <div>
        <dashboard-header></dashboard-header>
        <div class="container py-4">
            <h3 class="font-weight-bold mb-4">
                {{ currentRouteName }} Appointments
            </h3>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import dashboardHeader from './static/dashboard-header.vue'
export default {
    components:{
        dashboardHeader    
        },
         computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
}
</script>