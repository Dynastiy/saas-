<template>
  <div class="app-header">
    <div class="dashboard-header shadow-sm py-2 ">
        <ul class="list-unstyled nav__menu container">
           <router-link to="/dashboard"> <li> <i class="fa fa-calendar" aria-hidden="true"></i> All Appointments</li></router-link>
            <router-link to="/dashboard/pending"><li> <i class="fa fa-calendar-o" aria-hidden="true"></i> Pending Appointments</li></router-link>
            <router-link to="/dashboard/scheduled"><li> <i class="fa fa-calendar-plus-o" aria-hidden="true"></i> Scheduled Appointments</li></router-link>
            <router-link to="/dashboard/declined"><li> <i class="fa fa-calendar-times-o" aria-hidden="true"></i> Declined Appointments</li></router-link>
            <router-link to="/" class="ml-auto"><li> <i class="fa fa-power-off" aria-hidden="true"></i> Logout</li></router-link>
        </ul>
    </div>

    <div class="shadow-sm py-3 px-3 sticky-top">
        <div class="d-flex align-items-center justify-content-between ">
        <router-link to="/" class="text-dark font-weight-bold" style="text-decoration: none">LOGO</router-link>
        <i class="fa fa-bars" aria-hidden="true" id="tog" style="font-size: 24px"></i>
    </div>
    </div>

    <div class="mobile__nav shadow-sm py-2" id="side-bar">
        <ul class="list-unstyled container">
            <div class="text-right py-3">
                <i class="fa fa-times text-white" id="close-menu" aria-hidden="true"></i>
            </div>
           <router-link to="/dashboard"> <li> <i class="fa fa-calendar" aria-hidden="true"></i> All Appointments</li></router-link>
            <router-link to="/dashboard/pending"><li> <i class="fa fa-calendar-o" aria-hidden="true"></i> Pending Appointments</li></router-link>
            <router-link to="/dashboard/scheduled"><li> <i class="fa fa-calendar-plus-o" aria-hidden="true"></i> Scheduled Appointments</li></router-link>
            <router-link to="/dashboard/declined"><li> <i class="fa fa-calendar-times-o" aria-hidden="true"></i> Declined Appointments</li></router-link>
            <router-link to="/" class="ml-auto"><li> <i class="fa fa-power-off" aria-hidden="true"></i> Logout</li></router-link>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
        const toggller = document.getElementById("tog");
        const sidee = document.getElementById('side-bar');
        const closeMenu = document.getElementById('close-menu');
        document.onclick = function(e) {
          if(e.target.id !== "tog" && e.target.id !== "side-bar"){
            sidee.classList.remove('active');
          }
        }
        toggller.onclick = function(){
        sidee.classList.toggle('active');
        }
        closeMenu.onclick = function(){
        sidee.classList.remove('active');
        }
    }
}
</script>

<style>

</style>